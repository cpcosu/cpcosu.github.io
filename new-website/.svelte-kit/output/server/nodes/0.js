import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CKk109Or.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B2JZ6Ixs.js","_app/immutable/chunks/C9-2bEt5.js","_app/immutable/chunks/CWaM53KR.js","_app/immutable/chunks/BljwP9oz.js"];
export const stylesheets = ["_app/immutable/assets/0.DQDj3WLC.css","_app/immutable/assets/main.BzAjC4Yn.css"];
export const fonts = [];
