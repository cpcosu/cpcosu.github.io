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
		client: {start:"_app/immutable/entry/start.5lhRfhoL.js",app:"_app/immutable/entry/app.Dp-Gac9f.js",imports:["_app/immutable/entry/start.5lhRfhoL.js","_app/immutable/chunks/BskF8-UI.js","_app/immutable/chunks/BD70hWAe.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C4GhXyxm.js","_app/immutable/chunks/CxpBhRg2.js","_app/immutable/entry/app.Dp-Gac9f.js","_app/immutable/chunks/BD70hWAe.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C8OkFCBt.js","_app/immutable/chunks/DqzZPOhh.js","_app/immutable/chunks/BIyY7vsI.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CxpBhRg2.js","_app/immutable/chunks/DqBY4wbd.js","_app/immutable/chunks/Cw9BVPcG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/404","/about","/history","/icpc","/leadership","/schedule"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
