require('dotenv').config(); // Load environment variables from .env file
const { TwitterApi } = require('twitter-api-v2');
const cron = require('node-cron');

// Set up Twitter API v2 client with your credentials
const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_KEY_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Function to post a tweet using Twitter API v2
async function postTweetV2() {
  try {
    const tweet = await twitterClient.v2.tweet("*** This is a test tweet from the Twitter bot! ***");;
    console.log('Tweet sent:', tweet.data);
  } catch (err) {
    console.error('Error:', err);
  }
}

// Schedule the tweet for 3:14 PM Central Time every day
cron.schedule('00 22 * * *', postTweetV2, {
  scheduled: true,
  timezone: "America/Chicago"
});

console.log('Twitter bot started!');

