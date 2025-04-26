# Git'n'Go

Git'n'Go is a tool that helps developers write better commit messages by automatically formatting informal descriptions into conventional commit messages using AI.

## Features

- **VSCode Extension**: Integrates directly into your editor for easy access
- **AI-Powered Commit Formatting**: Converts plain language descriptions into standardized commit messages

## Components

- **Node.js Backend Server**: Handles AI processing using Groq API
- **VSCode Extension**: Provides UI integration for the commit message formatter
- **Common Package**: Shared types and utilities between components

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- VS Code (for extension usage)
- Groq API key for AI capabilities

### Installation

#### Server Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/git-n-go.git
   cd git-n-go
   ```

2. Install dependencies:
   ```
   cd server
   npm install
   ```

3. Create a `.env` file in the server directory:
   ```
   PORT=3000
   NODE_ENV=development
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5000
   GROQ_API_KEY=your_groq_api_key_here
   LOG_LEVEL=info
   ```

4. Build and start the server:
   ```
   npm run build
   npm start
   ```

#### VSCode Extension Installation

1. Install the extension:
   ```
   cd vscode
   npm install
   npm run package
   ```

2. Install the generated `.vsix` file in VS Code:
   - In VS Code, go to Extensions
   - Click "..." menu and select "Install from VSIX..."
   - Choose the `gitngo-0.0.1.vsix` file from the `vscode` directory

### Usage

1. From VS Code, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the command palette
2. Type "Format Commit Message" and select the command
3. Enter a plain-language description of your changes
4. The formatted commit message will be copied to your clipboard, ready to paste into your git commit command

## Development

### Project Structure

- `/server`: Backend Node.js server with Express and Groq integration
- `/vscode`: VS Code extension source code
- `/packages/common`: Shared TypeScript types and utilities

### Build Commands

#### Server
```
cd server
npm run build    # Compile TypeScript
npm run dev      # Run in development mode with hot-reload
npm run lint     # Run ESLint
npm run test     # Run tests
```

#### VSCode Extension
```
cd vscode
npm run compile        # Compile TypeScript
npm run package        # Create .vsix package
```

## License

This project is licensed under the ISC License. 