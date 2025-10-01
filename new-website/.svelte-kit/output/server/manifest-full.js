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
		client: {start:"_app/immutable/entry/start.Owjz-fQQ.js",app:"_app/immutable/entry/app.DSnU44Q1.js",imports:["_app/immutable/entry/start.Owjz-fQQ.js","_app/immutable/chunks/C7H2DaVO.js","_app/immutable/chunks/BD70hWAe.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B8ZfDcF3.js","_app/immutable/chunks/CxpBhRg2.js","_app/immutable/entry/app.DSnU44Q1.js","_app/immutable/chunks/BD70hWAe.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C8OkFCBt.js","_app/immutable/chunks/DqzZPOhh.js","_app/immutable/chunks/BIyY7vsI.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CxpBhRg2.js","_app/immutable/chunks/DqBY4wbd.js","_app/immutable/chunks/Cw9BVPcG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/history",
				pattern: /^\/history\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/icpc",
				pattern: /^\/icpc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/leadership",
				pattern: /^\/leadership\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/schedule",
				pattern: /^\/schedule\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
