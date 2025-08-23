export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["discord-mark-blue.svg","ecna-24.jpg","email-mark.svg","favicon.png","github-mark.svg","image/ecna23.jpg","image/ecna24.jpg","linkedin-mark.svg","logo-no-text.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.D0tREART.js",app:"_app/immutable/entry/app.DAegiXMl.js",imports:["_app/immutable/entry/start.D0tREART.js","_app/immutable/chunks/_3V3PTrr.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DRnEYQTN.js","_app/immutable/chunks/mkL0qHY1.js","_app/immutable/entry/app.DAegiXMl.js","_app/immutable/chunks/_3V3PTrr.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/XYh5maX5.js","_app/immutable/chunks/B1Px5g-h.js","_app/immutable/chunks/DRKh4jNZ.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/mkL0qHY1.js","_app/immutable/chunks/CZ4XjHy2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/history","/icpc","/leadership","/schedule"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
