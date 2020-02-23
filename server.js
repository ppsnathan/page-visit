const express = require('express')
const app = express()
const port = 3000

const REDIS_URL = process.env.REDIS_URL
const redis = require("redis");
const client = redis.createClient(REDIS_URL);

app.get('/', (request, response) => {
	console.log('request')
	client.incr("visit", function(err, res) {
		response.send("This is the " + res + " visitor.")
	})
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))
