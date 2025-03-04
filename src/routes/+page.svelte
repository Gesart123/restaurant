<script>
	let {data} = $props();
</script>
<div>
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

</div>

<style>
div {
		font-family: Arial, sans-serif;
		background-color: #F8F9FA;
		color: #333;
		margin: 0;
		padding: 20px;
		text-align: center;
	}

	
	h1 {
		background-color: #2C3E50;
		color: #ECF0F1;
		padding: 20px;
		margin: 0;
		border-radius: 5px;
	}
	
	
	p {
		color: #555;
		margin: 15px 0;
	}

	ul {
		list-style: none;
		padding: 0;
		margin-top: 20px;
	}

	li {
		margin: 10px 0;
	}

	a {
		color: #3498DB;
		text-decoration: none;
		font-weight: bold;
		transition: color 0.3s ease;
	}

	a:hover {
		color: #1ABC9C;
	}
</style>



