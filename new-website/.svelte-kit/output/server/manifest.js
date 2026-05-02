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
		client: {start:"_app/immutable/entry/start.B0a66Zd4.js",app:"_app/immutable/entry/app.BbRSwFGQ.js",imports:["_app/immutable/entry/start.B0a66Zd4.js","_app/immutable/chunks/lJlZknuU.js","_app/immutable/chunks/B2JZ6Ixs.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BljwP9oz.js","_app/immutable/chunks/B_dNVSMD.js","_app/immutable/entry/app.BbRSwFGQ.js","_app/immutable/chunks/B2JZ6Ixs.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CkdMoUad.js","_app/immutable/chunks/BomnwAjd.js","_app/immutable/chunks/C9-2bEt5.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/B_dNVSMD.js","_app/immutable/chunks/g9G07bP3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
