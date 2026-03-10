# Backend Server
 
> Express + MongoDB backend with API routes, database seeding, and environment-based configuration.

---


## Development


🌱 Database Setup (Optional)

You can run the server entirely with local seed data or connect to MongoDB.

---

Option 1: Use Local Seed Data

If you don’t have MongoDB:

1. Configure environment variables:
- open [/example.env](./example.env).
- rename "example.env" to ".env"

2. From the **root of the monorepo**:

```bash
cd <root>
pnpm install           # install all dependencies
pnpm run dev:server    # run the server 
```

The server will run, using local users instead of a database.

---

Option 2: Use MongoDB

1. Create a free MongoDB Atlas account:

- [MongoDB Atlas Signup](https://account.mongodb.com/account/login)
Follow instructions to create a cluster.

2. Get your connection string

```text
mongodb+srv://<"username">:<"password">@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

3. configure your environment variables.
- open [/example.env](./example.env).
- rename "example.env" to ".env" and set USE_LOCAL_DATA=false


4. From the **root of the monorepo**:

```bash
cd <root>
pnpm install           # install all dependencies
pnpm run seed:server   # seed the database with default users
pnpm run dev:server    # run the server 
```

The server will connect to MongoDB and seed default users.

---

## 🏗 Project Structure

```text
server/
├─ config/
│  └─ database.js          # MongoDB connection logic
├─ controllers/
│  └─ userController.js    # Controller functions for user routes
├─ data/
│  └─ userProvider.js      # Fetch users from DB or local seed
├─ helpers/
│  ├─ asyncErrorHandler.js # Async wrapper for controllers
│  ├─ auth.js
│  ├─ errorHandler.js
│  └─ sendToken.js
├─ models/
│  └─ userModel.js         # Mongoose User schema
├─ routes/
│  └─ userRoutes.js        # Express routes for users
├─ seed/
│  └─ users.js             # Local user seed array
├─ .env                    # Environment variables
├─ app.js                  # Express app setup
├─ seedUsers.js            # Seed script to populate MongoDB
└─ server.js               # Entry point to start the server
```

⚠️ Important Notes

- Environment variables contain sensitive information (MONGO_URI, JWT_SECRET) and should never be committed to GitHub.
- .env is included in .gitignore by default.
- Use USE_LOCAL_DATA=true for quick development without MongoDB.
- Use USE_LOCAL_DATA=false for production or testing with MongoDB.

---
