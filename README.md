# Pet CRUD Application

This is a simple CRUD application for managing pets using Express.js, Prisma ORM, and PostgreSQL. The application allows users to create, read, update, and delete pet records.

## Project Structure

```
pet-crud-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── petController.ts  # Controller for pet-related operations
│   ├── routes                # Defines application routes
│   │   └── petRoutes.ts      # Routes for pet CRUD operations
│   ├── services              # Contains business logic
│   │   └── petService.ts     # Service for interacting with the database
│   ├── prisma                # Prisma schema and database configuration
│   │   └── schema.prisma     # Defines the data model for pets
│   └── utils                 # Utility functions
│       └── db.ts            # Database connection utility
├── terraform                  # Infrastructure as code using Terraform
│   ├── main.tf               # Main Terraform configuration
│   ├── variables.tf          # Input variables for Terraform
│   ├── outputs.tf            # Outputs of the Terraform configuration
│   └── provider.tf           # Provider configuration for Terraform
├── package.json              # NPM configuration and dependencies
├── tsconfig.json             # TypeScript configuration
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd pet-crud-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the database:**
   - Configure your PostgreSQL database details in the `.env` file.
   - Use Terraform to provision the database:
     ```
     cd terraform
     terraform init
     terraform apply
     ```

4. **Run the application:**
   ```
   npm start
   ```

## Usage

- **Create a Pet:** Send a POST request to `/pets` with pet details.
- **Get a Pet:** Send a GET request to `/pets/:id` to retrieve a pet by ID.
- **Update a Pet:** Send a PUT request to `/pets/:id` with updated pet details.
- **Delete a Pet:** Send a DELETE request to `/pets/:id` to remove a pet.

## Technologies Used

- **Express.js**: Web framework for Node.js
- **Prisma ORM**: Database toolkit for TypeScript and Node.js
- **PostgreSQL**: Relational database management system
- **Terraform**: Infrastructure as code tool for provisioning cloud resources

## License

This project is licensed under the MIT License.