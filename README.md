# Game Preorder API

## Status

![Status: Work in Progress](https://img.shields.io/badge/status-work_in_progress-yellow)

> **Note:** This project is currently under development. The API is not yet stable and is subject to change.

A simple Node.js Express API for managing game preorders, built with TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need Node.js (LTS recommended) and npm (which comes with Node.js) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone [YOUR_REPO_URL]
    cd game-preorder-api
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root of the project and add your environment variables. See `.env.example` for required variables.

### Running the Application

#### Development Mode

To run the API in development mode with hot-reloading and debugging capabilities:

```bash
npm run dev
```

The server will typically run on `http://localhost:5001`.

#### Production Mode

To build and run the API for production:

1.  Build the TypeScript code:
    ```bash
    npm run build
    ```
2.  Start the compiled application:
    ```bash
    npm start
    ```

### Available Scripts

- `npm run dev`: Starts the application in development mode with `nodemon`.
- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm start`: Runs the compiled JavaScript application in production mode.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format:check`: Runs Prettier to check for formatting issues.

---

**Note:** Remember to replace `[YOUR_REPO_URL]` with the actual URL of your Git repository.
