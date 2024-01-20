const express = require('express');
const app = express();
const clientID = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;

app.get('/twitter-callback', (req, res) => {
    // handle the callback here
});

app.listen(3000, () => console.log('Server running on port 3000'));
