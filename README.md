# Git'n'Go

Git'n'Go is a tool that helps developers write better commit messages by automatically formatting informal descriptions into conventional commit messages using AI.

**Current Version: Development Version 1.0.0**

## Features

- **VSCode Extension**: Integrates directly into your editor for easy access
- **AI-Powered Commit Formatting**: Converts plain language descriptions into standardized commit messages
- **Conventional Commit Format**: Ensures your commit messages follow best practices
- **Time-Saving**: Reduces the effort needed to write clear, structured commit messages

## Components

- **Node.js Backend Server**: Handles AI processing using Groq API
- **VSCode Extension**: Provides UI integration for the commit message formatter
- **Common Package**: Shared types and utilities between components

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- VS Code (for extension usage)
- Groq API key for AI capabilities

### Groq Account Setup

1. Visit [Groq's website](https://console.groq.com/signup) and create an account
2. After signing in, navigate to the API Keys section
3. Click "Create API Key" and provide a name for your key
4. Copy the generated API key - you'll need this for the server setup
5. Store this key securely as it won't be shown again

### Installation

#### Server Setup

1. Clone the repository:
   ```
   git clone https://github.com/prxdyut/git-n-go.git
   cd git-n-go
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Create a `.env` file in the server directory based on the provided `env.example` file:
   ```
   # Copy the env.example file to .env
   cp env.example .env
   
   # Then edit the .env file with your own values:
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

   For development with auto-reload:
   ```
   npm run dev
   ```

#### VSCode Extension Installation

1. Navigate to the VSCode extension directory:
   ```
   cd vscode
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the extension:
   ```
   npm run compile
   ```

4. Package the extension:
   ```
   npm run package
   ```

5. Install the generated `.vsix` file in VS Code:
   - In VS Code, go to Extensions view (Ctrl+Shift+X)
   - Click "..." menu in the top-right of the Extensions panel
   - Select "Install from VSIX..."
   - Choose the `gitngo-0.0.1.vsix` file from the `vscode` directory

### Usage

1. From VS Code, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the command palette
2. Type "Format Commit Message" and select the command
3. Enter a plain-language description of your changes
4. The formatted commit message will be copied to your clipboard, ready to paste into your git commit command

## Why Git'n'Go?

### Benefits of Good Commit Messages

- **Enhanced Collaboration**: Clear commit messages help team members understand the purpose and impact of changes
- **Simpler Code Reviews**: Well-structured commits make the review process more efficient
- **Improved Debugging**: When tracking down issues, good commit messages provide critical context
- **Automated Changelog Generation**: Conventional commits can be automatically processed into release notes
- **Better Project History**: A meaningful commit history tells the story of your project's evolution
- **Onboarding Assistance**: New developers can understand the codebase faster by reading well-structured commits

### How This Service Is Useful

- **Consistency Across Teams**: Standardizes commit messages across developers and teams
- **Reduced Mental Overhead**: No need to remember conventional commit formats and rules
- **Learning Tool**: Helps developers learn proper commit message structure through examples
- **Time Efficiency**: Saves time crafting properly formatted commit messages
- **Accessible AI Integration**: Leverages cutting-edge AI without requiring expertise in prompt engineering
- **Customizable**: As an open-source tool, it can be extended and customized for specific project needs
- **IDE Integration**: Works directly in your development environment without context switching

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Versioning

Git'n'Go follows semantic versioning (SemVer):
- Current release: **Development Version 1.0.0**
- Status: Active development, pre-release

## License

This project is licensed under the ISC License. 