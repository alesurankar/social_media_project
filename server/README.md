# Backend Server
 
> Backend server with Express, MongoDB, and seeding scripts

---

## Development

From the **root of the monorepo**:

```bash
cd <root>
pnpm install           # install all dependencies
pnpm run seed:server   # seed the database with default users
pnpm run dev:server    # run the server 
```
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
│  └─ asyncErrorHandler.js # Async wrapper for controllers
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