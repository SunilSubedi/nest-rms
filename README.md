# Restaurant Management System (RMS)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

A comprehensive Restaurant Management System API built with NestJS, TypeScript, and Prisma ORM. This system features JWT authentication, role-based access control, and PostgreSQL database integration for managing restaurant operations including tables, customers, and staff.

## 🚀 Features

- **RESTful API** with CRUD operations for restaurant management
- **JWT Authentication** with secure login/register endpoints
- **Role-Based Access Control** (Admin, Waiter, Chef, Cashier)
- **Table Management** - Track table availability, capacity, and reservations
- **Customer Management** - Store customer information and contact details
- **User Management** - Manage staff with different roles
- **PostgreSQL Database** with Prisma ORM
- **Docker Containerization** for easy deployment
- **TypeScript** for type safety
- **Input Validation** with class-validator
- **Environment Configuration** with dotenv
- **Testing** with Jest

## 🛠️ Tech Stack

- **Framework**: NestJS 11.0.1
- **Language**: TypeScript 5.7.3
- **Database**: PostgreSQL
- **ORM**: Prisma 6.19.0
- **Authentication**: JWT (@nestjs/jwt 11.0.1)
- **Password Hashing**: bcrypt 6.0.0
- **Validation**: class-validator & class-transformer
- **Containerization**: Docker & Docker Compose
- **Testing**: Jest 29.7.0
- **Linting**: ESLint with TypeScript

## 📁 Project Structure

```
nest-rms/
├── src/
│   ├── auth/           # Authentication module (JWT, guards, role-based access)
│   ├── customer/       # Customer management module
│   ├── table/          # Table management module
│   ├── users/          # User/Staff management module
│   ├── prisma/         # Prisma service
│   └── main.ts         # Application entry point
├── prisma/
│   ├── schema.prisma   # Database schema (users, customers, tables)
│   └── migrations/     # Database migrations
├── docker-compose.yml  # Docker configuration
├── Dockerfile          # Container configuration
└── .env                # Environment variables
```

## 📊 Database Schema

### Users (Staff)

- Roles: ADMIN, WAITER, CHEF, CASHIER
- Fields: id, name, email, password, role, timestamps

### Customers

- Fields: id, name, phone, email, address, timestamps

### Tables

- Status: AVAILABLE, OCCUPIED, RESERVED
- Fields: id, tableNo, capacity, status, timestamps

## 🐳 Quick Start with Docker (Recommended)

### Prerequisites

- Docker installed on your machine
- Docker Compose installed

## Project Setup

### 1. Clone the Repository$ npm run test:e2e

````bash# test coverage

git clone <your-repository-url>$ npm run test:cov

cd project2```

````

## Deployment

### 2. Create Environment File

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

Create a `.env` file in the root directory with the following variables:

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

````env

# Database Configuration```bash

### 1. Clone the repository

```bash
git clone <repository-url>
cd nest-rms
```

### 2. Set up environment variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/rms_db"

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# Optional: API Configuration
API_KEY=your-api-key-here
```

> **Note**: Replace the values with your actual configuration.

### 3. Run with Docker Compose

```bash
# Build and start the application
docker-compose up --build -d

# Check if the container is running
docker-compose ps

# View logs
docker-compose logs app
```

### 4. Access the Application

The API will be available at: `http://localhost:3000`

### 5. Stop the Application

```bash
docker-compose down
```

## 🔧 Local Development Setup

If you prefer to run the application locally without Docker:

### Prerequisites

- Node.js (>= 18.18.0)
- npm or yarn
- PostgreSQL database

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run start:dev
```

## 📊 Database Management

### Database Migrations

```bash
# Create a new migration
npx prisma migrate dev --name your-migration-name

# Reset database (development only)
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```


## 🔐 API Endpoints

### Authentication Endpoints (Public)

#### Register
```bash
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "WAITER"  // Options: ADMIN, WAITER, CHEF, CASHIER
}
```

#### Login
```bash
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Customer Endpoints (Protected - Requires JWT)

#### Get All Customers
```bash
GET /customer
Authorization: Bearer <your_jwt_token>
```

#### Create Customer (WAITER role required)
```bash
POST /customer
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "address": "123 Main St"
}
```

#### Update Customer (WAITER role required)
```bash
PATCH /customer/:id
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "phone": "+0987654321",
  "address": "456 Oak Ave"
}
```

### Table Endpoints (Protected - Requires JWT)

#### Get All Tables
```bash
GET /table
Authorization: Bearer <your_jwt_token>
```

#### Create Table (WAITER or CASHIER role required)
```bash
POST /table
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "tableNo": 5,
  "capacity": 4,
  "status": "AVAILABLE"  // Options: AVAILABLE, OCCUPIED, RESERVED
}
```

#### Update Table (WAITER or CASHIER role required)
```bash
PATCH /table/:id
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "status": "OCCUPIED",
  "capacity": 6
}
```

### cURL Examples

#### Login Example
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "password123"}'
```

#### Create Customer (with JWT)
```bash
curl -X POST http://localhost:3000/customer \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Smith", "email": "jane@example.com", "phone": "+1234567890"}'
```

## 🔒 Role-Based Access Control

The system implements role-based authorization:

- **Public Routes**: `/auth/login`, `/auth/register`
- **Protected Routes (Any authenticated user)**:
  - `GET /customer`, `GET /table`
- **WAITER Role**:
  - Create/Update customers
  - Create/Update tables
- **CASHIER Role**:
  - Create/Update tables
- **ADMIN Role**:
  - Full access to all endpoints
- **CHEF Role**:
  - Currently view-only access



## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov

# Run tests in watch mode
npm run test:watch
```

## 📝 Available Scripts

```bash
npm run start          # Start production server
npm run start:dev      # Start development server with hot reload
npm run start:debug    # Start server in debug mode
npm run build          # Build the application
npm run test           # Run unit tests
npm run test:e2e       # Run end-to-end tests
npm run test:cov       # Run tests with coverage
npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

## 🚀 Deployment

### Using Docker in Production

1. **Clone the repository** on your production server
2. **Set up environment variables** in `.env` file with secure values
3. **Run the application**:
   ```bash
   docker-compose up --build -d
   ```

### Environment Variables for Production

Make sure to set secure values for:

- `JWT_SECRET`: Use a strong, random secret key (minimum 32 characters)
- `DATABASE_URL`: Your production PostgreSQL connection string
- `NODE_ENV`: Set to `production`

## 🔍 Monitoring and Logs

### Docker Logs

```bash
# View real-time logs
docker-compose logs -f app

# View last 50 lines
docker-compose logs --tail=50 app
```

### Health Check

```bash
# Check if application is running
curl http://localhost:3000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Find and kill process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Docker build fails**
   ```bash
   # Clean Docker cache and rebuild
   docker system prune -a
   docker-compose up --build --force-recreate
   ```

3. **Database connection issues**
   - Verify your `DATABASE_URL` in `.env`
   - Ensure PostgreSQL is running
   - Check database credentials and host
   - Test connection with `npx prisma db pull`

4. **JWT Token issues**
   - Ensure `JWT_SECRET` is set in `.env`
   - Check token expiration settings
   - Verify token format in Authorization header: `Bearer <token>`

5. **Prisma migration errors**
   ```bash
   # Reset database and migrations (development only)
   npx prisma migrate reset

   # Apply migrations
   npx prisma migrate deploy
   ```

6. **Role-based access denied**
   - Verify user role in database
   - Check if JWT token includes correct user information
   - Ensure guards are properly configured

## 📚 Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [JWT.io](https://jwt.io) - JWT debugger

## 📄 License

This project is licensed under the UNLICENSED license.

## 👥 Author

Restaurant Management System built with NestJS, TypeScript, and Prisma.

---

**Built with ❤️ using NestJS**

**Happy Coding!** 🚀
````
