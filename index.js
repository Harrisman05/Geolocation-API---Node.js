const test = "node is running";
console.log(test);

const express = require("express");
const app = express();

app.listen(4000, () => console.log("Port 4000 is listening for requests"));

app.use(express.static('public'));

// This allows express to parse any incoming JSON data (JSON is stringfied from the post request)

app.use(express.json({
    limit: '1mb'
}));

// Routes

// Setting up /api endpoint for the POST request by fetch originating from the client

app.post('/api', (request, response) => {
    console.log("Request received");
    console.log(request.body);

    // posting a response back to client to confirm receipt

    response.json({
        status: "success, response received from server and handled by the client"
    });
});