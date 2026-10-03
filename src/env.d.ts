/// <reference path="../.astro/types.d.ts" />
// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="astro/client" />

interface Window {
  // Plausible's queue stub, defined inline in Layout.astro before the real script loads.
  plausible: { (...args: unknown[]): void; q?: IArguments[] };
}
