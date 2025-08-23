<script lang="ts">
	export let iconUrl: string;
	/**
	 * Whatever the name of the social is. This is used for the alt text.
	 */
	export let name: string;
	export let handle: string | undefined;
	export let url: string | undefined;
</script>

{#if handle !== undefined}
	<li>
		{#if url !== undefined}
			<img src={iconUrl} alt="The social icon for {name}." />
			<a href={url} target="_blank">
				<span>
					{handle}
				</span>
			</a>
		{:else}
			<img src={iconUrl} alt="The social icon for {name}." />
			<span>
				{handle}
			</span>
		{/if}
	</li>
{/if}

<style>
	li {
		margin: 0;
		/* we need to do this to override the `a` color in main.scss. this rule refers to "this li" (the &) and any child `a`s. */
		&,
		a {
			color: #838383;
		}
	}

	img {
		width: 15px;
		vertical-align: center;
	}

	a {
		text-decoration: none;
	}
</style>
