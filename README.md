
# XPostBot

## Getting Started

These instructions will guide you through setting up and running XPostBot on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Git

### Clone the Repository

Clone this repository to your local machine to get started with XPostBot:

`git clone [https://github.com/krazedegen/XPostBot.git](https://github.com/krazedegen/XPostBot.git)`

### Installation

Navigate to the XPostBot project directory:

`cd XPostBot`

Install the necessary Node.js packages:

`npm install`

### Configuration

Configure your Twitter API credentials:

1. Copy `.env.sample` to a new file named `.env` in the project's root directory.

cp .env.sample .env

2. Edit the `.env` file to include your Twitter API credentials.

### Customization

You can customize the bot's behavior by adjusting the cron schedule in the `post.js` file. The default is set to post every night at 10 PM Central Time.

### Running the Bot

Execute the following command to run the bot:

`node post.js`

## Using PM2 for Process Management and Callback Server

PM2 is an advanced, production process manager for Node.js applications. It can be used to manage both your XPostBot application and any callback server you might have for handling Twitter API interactions.

### Install PM2

If you haven't already, install PM2 globally on your machine:

`npm install pm2 -g`

### Running XPostBot with PM2

To start the XPostBot application using PM2, use the following command:

`pm2 start post.js --name xpostbot`

This command will start the XPostBot and keep it running in the background.

### Managing the Callback Server with PM2

If your bot requires a callback server (for example, for handling webhook events from Twitter), you can also manage this server with PM2.

Assuming you have a separate file like `callbackServer.js` for your server, you can start it with PM2:

`pm2 start callbackServer.js --name xpostbot-callback`

### Monitoring and Managing Processes with PM2

PM2 provides several commands to help you monitor and manage your Node.js processes:

- List all processes: `pm2 list`
- Monitor processes: `pm2 monit`
- View logs: `pm2 logs`
- Restart a process: `pm2 restart <process_name>`
- Stop a process: `pm2 stop <process_name>`
- Delete a process from PM2's list: `pm2 delete <process_name>`

Replace `<process_name>` with `xpostbot` or `xpostbot-callback` depending on which process you want to manage.

## Conclusion

With PM2, you can efficiently manage both the XPostBot application and its callback server, ensuring they are always up and running. PM2's monitoring and log management features also provide valuable insights into the performance and health of your application.
