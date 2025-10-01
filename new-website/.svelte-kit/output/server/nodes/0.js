import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BKwNMHp2.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BD70hWAe.js","_app/immutable/chunks/BIyY7vsI.js","_app/immutable/chunks/BjUNya1v.js","_app/immutable/chunks/B8ZfDcF3.js"];
export const stylesheets = ["_app/immutable/assets/0.DQDj3WLC.css","_app/immutable/assets/main.BzAjC4Yn.css"];
export const fonts = [];
