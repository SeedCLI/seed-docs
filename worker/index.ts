/**
 * Cloudflare Worker entry point.
 *
 * For apps without image optimization, you can use vinext/server/app-router-entry
 * directly in wrangler.jsonc: "main": "vinext/server/app-router-entry"
 */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        response(): Promise<Response>;
      };
    };
  };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return handleImageOptimization(request, env, ctx, {
      handler,
      deviceSizes: DEFAULT_DEVICE_SIZES,
      imageSizes: DEFAULT_IMAGE_SIZES,
    });
  },
} satisfies ExportedHandler<Env>;
