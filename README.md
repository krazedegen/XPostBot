# XPostBot

XPostBot is a Twitter bot created by krazedegen that allows you to schedule and automate tweets using the Twitter API v2.

## Getting Started

### Clone the Repository

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/krazedegen/XPostBot.git
Installation
Navigate to the project directory:

bash
Copy code
cd XPostBot
Configure your Twitter API credentials by creating a .env file in the project's root directory:

plaintext
Copy code
TWITTER_API_KEY=your_api_key
TWITTER_API_KEY_SECRET=your_api_key_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret
Install project dependencies:

bash
Copy code
npm install
Usage
Start the XPostBot to schedule tweets:

bash
Copy code
node post.js
The bot will begin posting tweets based on the default schedule.

Customization
You can customize the bot's behavior by adjusting the cron schedule in the post.js file.