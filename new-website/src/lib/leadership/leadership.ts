export type Leader = {
	fullName: string;
	position: string;
	socials: {
		/**
		 * Links to mailto:{email}.
		 */
		email: string;
		/**
		 * Links to the page https://github.com/{githubHandle}.
		 */
		githubHandle?: string;
		/**
		 * Links to the page https://www.linkedin.com/in/{linkedInHandle}.
		 */
		linkedInHandle?: string;
		discordHandle?: string;
	};
};

export const leadership25: Leader[] = [
	{
		fullName: 'Ayden Coughlin',
		position: 'President',
		socials: {
			email: 'coughlin.166@osu.edu',
			githubHandle: 'iuaphe',
			discordHandle: 'iuaphe'
		}
	},
	{
		fullName: 'Trevor Pribis',
		position: 'Vice President',
		socials: {
			email: 'pribis.1@osu.edu',
			githubHandle: 'tjbuddy100',
			discordHandle: 'tjbuddy100'
		}
	},
	{
		fullName: 'Patrick Carraway',
		position: 'Treasurer',
		socials: {
			email: 'carraway.17@osu.edu',
			discordHandle: 'petreck'
		}
	}
];

// export const leadership24: Leader[] = [
// 	{
// 		fullName: 'Danny Kaja',
// 		position: 'President',
// 		socials: {
// 			email: 'kaja.8@osu.edu',
// 			githubHandle: 'Dannyx51',
// 			linkedInHandle: 'dhaanish-kaja'
// 		}
// 	},
// 	{
// 		fullName: 'Toby Simpson',
// 		position: 'Vice President',
// 		socials: {
// 			email: 'simpson.900@osu.edu'
// 		}
// 	},
// 	{
// 		fullName: 'Spencer Lee',
// 		position: 'Problem Engineer',
// 		socials: {
// 			email: 'lee.10501@osu.edu'
// 		}
// 	},
// 	{
// 		fullName: 'Trevor Pribis',
// 		position: 'Treasurer',
// 		socials: {
// 			email: 'kaja.8@osu.edu'
// 		}
// 	},
// 	{
// 		fullName: 'Nripesh Uskaikar',
// 		position: 'E-Council Representative',
// 		socials: {
// 			email: 'kaja.8@osu.edu'
// 		}
// 	},
// 	{
// 		fullName: 'Yusen Peng',
// 		position: 'Media Coordinator',
// 		socials: {
// 			email: 'kaja.8@osu.edu'
// 		}
// 	},
// 	{
// 		fullName: 'Ayden Coughlin',
// 		position: 'Event Coordinator',
// 		socials: {
// 			email: 'kaja.8@osu.edu'
// 		}
// 	}
// ];

// todo: add more directory members.
