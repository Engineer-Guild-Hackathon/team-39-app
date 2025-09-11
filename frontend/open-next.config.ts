import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

// Default config (in-memory incremental cache). For R2, adjust `wrangler.jsonc`
// and swap to the R2 override per docs.
export default defineCloudflareConfig({});
