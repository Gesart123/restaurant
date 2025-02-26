<script>
	let {data} = $props();
</script>

<h1>Restaurants in Shiroka</h1>
<p>
	All API endpoints are defined in the <code>src/routes/api</code> folder. Start with the
	<a href="/api/restaurant">restaurant overview</a>
</p>

<ul>
	{#each data.restaurants as restaurant }
	  <li><a href="/api/restaurant/{restaurant.id}">{restaurant.name}</a></li>
	
	{/each}
</ul>


<style>
	 
	h1{
		
	}

</style>