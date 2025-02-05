//Create a express server

const express = require('express');
const app = express();
const port = 3000;

//Create a route

app.get('/', (req, res) => {
	console.log('Request received');
	res.send('Hello World');

	res.send('Hello World');
	console.log('Hello Cris');
	console.log('Hello Cris');
	console.log('Hello Cris');
	console.log('Hello Cris');
	console.log('Hello Cris');
}

//Start the server

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
	console.log(`Server running on port ${port}`);
}
