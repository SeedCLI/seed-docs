import { c as createContentHighlighter } from "./index-CCT_ngfX.js";
import { r as removeUndefined } from "./remove-undefined-B_oBVupY-7355g_Rp.js";
import { search as search$1, getByID, create, load } from "@orama/orama";
import "remark";
import "unist-util-visit";
async function searchSimple(db, query, params = {}) {
  const highlighter = createContentHighlighter(query);
  return (await search$1(db, {
    term: query,
    tolerance: 1,
    ...params,
    boost: {
      title: 2,
      ..."boost" in params ? params.boost : void 0
    }
  })).hits.map((hit) => ({
    type: "page",
    content: highlighter.highlightMarkdown(hit.document.title),
    breadcrumbs: hit.document.breadcrumbs,
    id: hit.document.url,
    url: hit.document.url
  }));
}
async function searchAdvanced(db, query, tag = [], { mode = "fulltext", ...override } = {}) {
  if (typeof tag === "string") tag = [tag];
  const params = {
    ...override,
    mode,
    where: removeUndefined({
      tags: tag.length > 0 ? { containsAll: tag } : void 0,
      ...override.where
    }),
    limit: 10,
    groupBy: {
      properties: ["page_id"],
      maxResult: 8,
      ...override.groupBy
    }
  };
  if (query.length > 0) Object.assign(params, {
    term: query,
    properties: mode === "fulltext" ? ["content"] : ["content", "embeddings"]
  });
  const highlighter = createContentHighlighter(query);
  const result = await search$1(db, params);
  const list = [];
  for (const item of result.groups ?? []) {
    const pageId = item.values[0];
    const page = getByID(db, pageId);
    if (!page) continue;
    list.push({
      id: pageId,
      type: "page",
      content: highlighter.highlightMarkdown(page.content),
      breadcrumbs: page.breadcrumbs,
      url: page.url
    });
    for (const hit of item.result) {
      if (hit.document.type === "page") continue;
      list.push({
        id: hit.document.id.toString(),
        content: highlighter.highlightMarkdown(hit.document.content),
        breadcrumbs: hit.document.breadcrumbs,
        type: hit.document.type,
        url: hit.document.url
      });
    }
  }
  return list.length > 80 ? list.slice(0, 80) : list;
}
const cache = /* @__PURE__ */ new Map();
async function loadDB({ from = "/api/search", initOrama = (locale) => create({
  schema: { _: "string" },
  language: locale
}) }) {
  const cacheKey = from;
  const cached = cache.get(cacheKey);
  if (cached) return cached;
  async function init() {
    const res = await fetch(from);
    if (!res.ok) throw new Error(`failed to fetch exported search indexes from ${from}, make sure the search database is exported and available for client.`);
    const data = await res.json();
    const dbs = /* @__PURE__ */ new Map();
    if (data.type === "i18n") {
      await Promise.all(Object.entries(data.data).map(async ([k, v]) => {
        const db2 = await initOrama(k);
        load(db2, v);
        dbs.set(k, {
          type: v.type,
          db: db2
        });
      }));
      return dbs;
    }
    const db = await initOrama();
    load(db, data);
    dbs.set("", {
      type: data.type,
      db
    });
    return dbs;
  }
  const result = init();
  cache.set(cacheKey, result);
  return result;
}
async function search(query, options) {
  const { tag, locale } = options;
  const db = (await loadDB(options)).get(locale ?? "");
  if (!db) return [];
  if (db.type === "simple") return searchSimple(db, query);
  return searchAdvanced(db.db, query, tag);
}
export {
  search
};
