# nodechat
Nodechat is an instant messaging web app designed to let users begin chatting instantly with no registration necessary. The app offers search, inbox and recent conversation functionality to make it easy to find new users to chat with and keep track of conversations they already have. 

The app is written in JavaScript, with the backend using Node.js and the frontend using AngularJS. Message-sending functionality is handled by [Socket.IO](https://socket.io/) both on the frontend and backend.

## Running the software
> Prerequisite: Git must be installed on the host machine.

1. Checkout the source
```bash
git checkout https://github.com/nathansj97/nodechat.git
```

2. Install Node.js & npm
```bash
pacman -S node npm
```

3. Install npm dependencies

In the source directory:
```bash
npm install
```

4. Launch the software
```bash
node server.js
```

5. Navigate to the app in a browser

In a web browser, navigate to your local ip address at port 3000.

For example:
> 192.168.1.1:3000
