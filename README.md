# Scrum Master Project Management Application

A project management application built with Node.js, Express, and MongoDB, following Scrum methodology.

## Features

- User authentication (JWT)
- Project management
- Task tracking
- Team collaboration
- API documentation

## Prerequisites

- Node.js 18.x or higher
- MongoDB 6.0 or higher
- npm 9.x or higher

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/scrum-master.git
   cd scrum-master
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CORS_ORIGIN=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- Run tests: `npm test`
- Format code: `npx prettier --write .`
- Lint code: `npx eslint .`

## CI/CD

This project uses GitHub Actions for CI/CD. The workflow includes:

- Linting
- Testing
- Build verification
- Code formatting checks

## Code Review

This project uses [CodeRabbit](https://coderabbit.ai) for AI-powered code reviews. Every pull request will be automatically reviewed by CodeRabbit.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
