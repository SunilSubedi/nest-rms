# NestJS Cats API Project<p align="center">

<a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>

A robust RESTful API built with NestJS, TypeScript, and Prisma ORM, featuring JWT authentication, PostgreSQL database integration, and Docker containerization.</p>

## 🚀 Features[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

- **RESTful API** with CRUD operations for cats management

- **JWT Authentication** with secure login/register endpoints <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

- **PostgreSQL Database** with Prisma ORM <p align="center">

- **Docker Containerization** for easy deployment<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

- **TypeScript** for type safety<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

- **Input Validation** with class-validator<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>

- **Environment Configuration** with dotenv<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

- **Rate Limiting** middleware<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>

- **Logging** middleware<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>

- **Role-based Guards** for protected routes<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>

  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>

## 🛠️ Tech Stack <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>

<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>

- **Framework**: NestJS</p>

- **Language**: TypeScript <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

- **Database**: PostgreSQL (via Prisma Accelerate) [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

- **ORM**: Prisma

- **Authentication**: JWT## Description

- **Containerization**: Docker & Docker Compose

- **Testing**: Jest[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

- **Linting**: ESLint with TypeScript

## Project setup

## 📁 Project Structure

````bash

```$ npm install

project2/```

├── src/

│   ├── auth/           # Authentication module (JWT, guards)## Compile and run the project

│   ├── cats/           # Cats module (CRUD operations)

│   ├── users/          # Users module```bash

│   ├── prisma/         # Prisma service# development

│   └── main.ts         # Application entry point$ npm run start

├── prisma/

│   ├── schema.prisma   # Database schema# watch mode

│   └── migrations/     # Database migrations$ npm run start:dev

├── docker-compose.yml  # Docker configuration

├── Dockerfile         # Container configuration# production mode

└── .env               # Environment variables$ npm run start:prod

````

## 🐳 Quick Start with Docker (Recommended)## Run tests

### Prerequisites```bash

# unit tests

- Docker installed on your machine$ npm run test

- Docker Compose installed

# e2e tests

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

DATABASE_URL="your-postgresql-connection-string"$ npm install -g @nestjs/mau

$ mau deploy

# JWT Configuration```

JWT_SECRET=your-super-secret-jwt-key-here

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

# API Configuration

API_KEY=your-api-key-here## Resources

````

Check out a few resources that may come in handy when working with NestJS:

> **Note**: Replace the values with your actual configuration. For DATABASE_URL, you can use Prisma Accelerate or any PostgreSQL connection string.

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

### 3. Run with Docker Compose- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).

- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).

```bash- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.

# Build and start the application- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

docker-compose up --build -d- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).

- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

# Check if the container is running- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

docker-compose ps

## Support

# View logs

docker-compose logs appNest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

```

## Stay in touch

### 4. Access the Application

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)

The API will be available at: `http://localhost:3000`- Website - [https://nestjs.com](https://nestjs.com/)

- Twitter - [@nestframework](https://twitter.com/nestframework)

### 5. Stop the Application

## License

```bash

docker-compose downNest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

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

## 📊 Database Setup

This project uses Prisma with PostgreSQL. The database schema includes:

- **Users**: User authentication and profile data
- **Cats**: Cat entities with name, age, and breed information

### Database Migration

```bash
# Create a new migration
npx prisma migrate dev --name your-migration-name

# Reset database (development only)
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```

## 🔐 API Endpoints

### Authentication

- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### Cats (Protected Routes)

- `GET /cats` - Get all cats
- `POST /cats` - Create a new cat
- `GET /cats/:id` - Get cat by ID
- `PUT /cats/:id` - Update cat
- `DELETE /cats/:id` - Delete cat

### Usage Examples

#### Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "password": "password123"}'
```

#### Access Protected Route

```bash
curl -X GET http://localhost:3000/cats \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov
```

## 🚀 Deployment

### Using Docker in Production

1. **Clone the repository** on your production server
2. **Set up environment variables** in `.env` file
3. **Run the application**:
   ```bash
   docker-compose up --build -d
   ```

### Environment Variables for Production

Make sure to set secure values for:

- `JWT_SECRET`: Use a strong, random secret key
- `DATABASE_URL`: Your production PostgreSQL connection string
- `API_KEY`: Your production API key

## 📝 Available Scripts

```bash
npm run start          # Start production server
npm run start:dev      # Start development server with hot reload
npm run start:debug    # Start server in debug mode
npm run build          # Build the application
npm run test           # Run tests
npm run test:e2e       # Run end-to-end tests
npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

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
   - Ensure your database is accessible
   - Check Prisma connection with `npx prisma db pull`

4. **JWT Token issues**
   - Ensure `JWT_SECRET` is set in `.env`
   - Check token expiration (default: 180 seconds)

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the troubleshooting section above
2. Review the application logs
3. Create an issue in the repository

---

**Happy Coding!** 🚀
