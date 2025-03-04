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

	h1 {
		background-color: #2C3E50;
		color: #ECF0F1;
		padding: 20px;
		margin: 0;
		border-radius: 5px;
		text-align: center;
	}

	
	p {
		color: #555;
		margin: 15px 0;
		text-align: center;
	}

	ul {
		list-style: none;
		padding: 0;
		margin-top: 20px;
		text-align: center;
	}

	li {
		margin: 10px 0;
		text-align: center;
	}

	a {
		color: #3498DB;
		text-decoration: none;
		font-weight: bold;
		transition: color 0.3s ease;
		text-align: center;
	}

	a:hover {
		color: #1ABC9C;
	}
</style>



