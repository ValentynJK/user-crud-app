# User CRUD Application

A simple CRUD application for managing users (and pets) using Express.js, TypeScript, Prisma ORM, and PostgreSQL. The app supports creating, reading, updating, and deleting user records, and is ready for modern TypeScript development.

## Project Structure

```
user-crud-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── config/
│   │   └── database.ts       # Database config for environments
│   ├── controllers/
│   │   └── userController.ts # Controller for user operations
│   ├── routes/
│   │   └── userRoutes.ts     # User CRUD routes
│   ├── services/
│   │   └── userService.ts    # User business logic and DB access
│   └── utils/
│       └── prisma.ts         # Prisma client instance
├── prisma/
│   ├── schema.prisma         # Prisma schema (data model)
│   ├── migrations/           # Prisma migration files
│   └── scripts/              # DB utility scripts (create/drop)
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── provider.tf
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd user-crud-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure your environment:**
   - Edit `.env` with your PostgreSQL credentials and database name.

4. **Create the database:**

   ```sh
   npm run db:create
   ```

5. **Run Prisma migrations:**

   ```sh
   npx prisma migrate dev --name init --schema=./prisma/schema.prisma
   ```

6. **(Optional) Open Prisma Studio:**

   ```sh
   npm run studio
   ```

7. **Start the development server (auto-reloads on changes):**
   ```sh
   npm run dev
   ```

## Usage

- **Create a User:** `POST /users` with user details in the body.
- **Get a User:** `GET /users/:id`
- **Update a User:** `PUT /users/:id` with updated user details.
- **Delete a User:** `DELETE /users/:id`

## Technologies Used

- **TypeScript**: Type-safe JavaScript
- **Express.js**: Web framework
- **Prisma ORM**: TypeScript ORM for PostgreSQL
- **PostgreSQL**: Database
- **Terraform**: Infrastructure as code

## Development

- Uses `nodemon` and `ts-node` for hot-reloading in development.
- Linting and formatting with ESLint and Prettier.
- All Prisma commands use the schema at `prisma/schema.prisma`.

## License

MIT License
