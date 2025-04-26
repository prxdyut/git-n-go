import * as vscode from 'vscode';
import axios from 'axios';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    // Register the command for simple commit message
    let disposable = vscode.commands.registerCommand('gitngo.commitHelper', async () => {
        // Show input box to get the commit message from the user
        const commitMessage = await vscode.window.showInputBox({
            placeHolder: 'Enter your commit message',
            prompt: 'This will be copied to your clipboard'
        });

        // If user provided a message (didn't cancel)
        if (commitMessage) {
            // Copy the message to the clipboard
            await vscode.env.clipboard.writeText(commitMessage);
            
            // Show a notification
            vscode.window.showInformationMessage('Commit message copied to clipboard!');
        }
    });

    // Register the command for AI-powered commit formatting
    let formatCommitDisposable = vscode.commands.registerCommand('gitngo.formatCommit', async () => {
        try {
            // Show input box to get the commit description from the user
            const description = await vscode.window.showInputBox({
                placeHolder: 'Describe your changes in plain language',
                prompt: 'This will be formatted into a conventional commit message'
            });

            if (!description) {
                return; // User cancelled
            }

            // Show progress notification
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: 'Formatting commit message...',
                cancellable: false
            }, async () => {
                try {
                    // Call the API to format the commit
                    const response = await axios.post('http://localhost:3000/api/commit/format', {
                        description,
                        emoji: false
                    });

                    // Get the formatted commit message
                    const formattedCommit = response.data.commit;

                    // Copy to clipboard
                    await vscode.env.clipboard.writeText(formattedCommit);

                    // Show success message
                    vscode.window.showInformationMessage(`Formatted commit message copied to clipboard!`);
                } catch (error) {
                    vscode.window.showErrorMessage(`Failed to format commit: ${error instanceof Error ? error.message : 'Unknown error'}`);
                }
            });
        } catch (error) {
            vscode.window.showErrorMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    });

    // Add the commands to the context subscriptions to ensure proper disposal
    context.subscriptions.push(disposable, formatCommitDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {} 