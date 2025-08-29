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
		client: {start:"_app/immutable/entry/start.BHxnJC4U.js",app:"_app/immutable/entry/app.QBjIer_Y.js",imports:["_app/immutable/entry/start.BHxnJC4U.js","_app/immutable/chunks/JdnMEFOh.js","_app/immutable/chunks/CZU13uu7.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/COb_uP9D.js","_app/immutable/chunks/Bwl0ud3G.js","_app/immutable/entry/app.QBjIer_Y.js","_app/immutable/chunks/CZU13uu7.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B1c2rv09.js","_app/immutable/chunks/BMb5llEB.js","_app/immutable/chunks/YpWQREtn.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Bwl0ud3G.js","_app/immutable/chunks/RLbamg9n.js","_app/immutable/chunks/cWNhISsL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
