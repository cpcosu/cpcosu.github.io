<script lang="ts">
	import { base } from '$app/paths';
	import '$lib/main.scss';
</script>

<header>
	<div class="header-content">
		<div class="left-part">
			<a href="{base}/" class="acronym"
				><span class="red">CPC</span><span class="gray">@</span><span class="red">OSU</span></a
			>
		</div>
		<div class="right-links">
			<a href="{base}/about">About</a>
			<a href="{base}/schedule">Schedule</a>
			<a href="{base}/icpc">ICPC</a>
			<a href="{base}/leadership">Leadership</a>
		</div>
	</div>
</header>
<main>
	<div class="content">
		<slot></slot>
	</div>
</main>

<style lang="scss">
	@import '$lib/shared';

	header {
		border-bottom: solid #eee 3px;
	}

	.header-content {
		display: flex;
		align-items: center;

		max-width: 850px;
		margin: auto;

		padding: 20px;

		.left-part {
			.gray {
				color: #ccc;
			}
			.red {
				color: $scarlet;
			}
			* {
				font-weight: bold;
				font-family: 'Roboto Mono', monospace;
			}
			margin-right: auto;
			.acronym {
				font-size: 1.5em;
				text-decoration: none;
				padding: 10px;
				margin: 10px;
			}
		}

		.right-links {
			a {
				text-decoration: none;
				padding: 10px;
				margin: 10px;
				color: black;
				font-weight: bold;
				font-family: 'Roboto', sans-serif;
			}
		}
	}

	/* .content {
		max-width: 750px;
		margin: auto;
	} */
</style>
