# Twitter Clone

A full-stack Twitter clone built with the **MERN stack** (MongoDB, Express.js, React, Node.js), styled using **TailwindCSS** and **DaisyUI**. Authentication and Authorization are implemented using **JWT**, and **React Query** is used for efficient data fetching, caching, and state management

![Demo App](/frontend/public/screenshot-for-readme.png)

---

## Demo

🔗 **Live App**: [Twitter Clone](https://real-time-chat-app-fqbd.onrender.com)
- Please wait 50 seconds for the server to turn on instance.
Test accounts:
- username: janedoe
- Password: 123456

---

## Features

-   Suggested Users to Follow
-   Creating Posts
-   Deleting Posts
-   Commenting on Posts
-   Liking Posts
-   Delete Posts (if you are the owner)
-   Edit Profile Info
-   Edit Cover Image and Profile Image
-   Image Uploads using Cloudinary
-   Send Notifications

---

## Tech Stack

- **Frontend**: React.js, React Query, Tailwind CSS, DaisyUI

- **Backend**: Node.js, Express.js, MongoDB

- **Authentication**: JSON Web Tokens (JWT)

- **Image Storage**: Cloudinary

- **Deployment**: Render.com

---

### Setup .env file

```js
MONGO_URI=...
PORT=...
JWT_SECRET=...
NODE_ENV=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```
