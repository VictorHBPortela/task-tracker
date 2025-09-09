# Task Tracker CLI

A simple and efficient command-line task management application built with Node.js. Track your tasks, update their status, and stay organized directly from your terminal.

## Features

- ✅ Add new tasks
- 📝 Update existing tasks
- 🗑️ Delete tasks
- 📋 List all tasks or filter by status
- 🔄 Mark tasks as in-progress or done
- 💾 Persistent storage with JSON file
- 🚀 Easy-to-use CLI interface

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Local Installation

1. Clone the repository:
```bash
git clone https://github.com/VictorHBPortela/task-tracker.git
cd task-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Make the CLI globally available:
```bash
sudo npm link
```

Now you can use `task-cli` from anywhere in your system!

## Usage

### Basic Commands

#### Add a new task
```bash
task-cli add "Buy groceries"
task-cli add "Learn Node.js CLI development"
```

#### List tasks
```bash
# List all tasks
task-cli list

# List tasks by status
task-cli list todo
task-cli list in-progress
task-cli list done
```

#### Update a task
```bash
task-cli update 1 "Buy groceries and cook dinner"
```

#### Mark task status
```bash
# Mark as in progress
task-cli mark-in-progress 1

# Mark as done
task-cli mark-done 1
```

#### Delete a task
```bash
task-cli delete 1
```

#### Get help
```bash
task-cli help
```

### Task Status

Tasks can have one of three statuses:
- `todo` - Default status when a task is created
- `in-progress` - Task is currently being worked on
- `done` - Task is completed

## Examples

```bash
# Add some tasks
task-cli add "Complete project documentation"
task-cli add "Review pull requests"
task-cli add "Deploy to production"

# List all tasks
task-cli list

# Mark first task as in progress
task-cli mark-in-progress 1

# Update task description
task-cli update 2 "Review and approve pull requests"

# Mark task as done
task-cli mark-done 1

# List only completed tasks
task-cli list done

# Delete a task
task-cli delete 3
```

## Output Example

```
┌─────────┬────┬─────────────────────────────────┬──────────────┬────────────────────────────┬────────────────────────────┐
│ (index) │ id │           description           │    status    │         createdAt          │         updatedAt          │
├─────────┼────┼─────────────────────────────────┼──────────────┼────────────────────────────┼────────────────────────────┤
│    0    │ 1  │ 'Complete project documentation'│ 'in-progress'│ '2025-09-09T23:05:35.592Z' │ '2025-09-09T23:06:14.613Z' │
│    1    │ 2  │ 'Review and approve pull reqs'  │    'todo'    │ '2025-09-09T23:05:40.011Z' │ '2025-09-09T23:05:50.201Z' │
└─────────┴────┴─────────────────────────────────┴──────────────┴────────────────────────────┴────────────────────────────┘
```

## Project Structure

```
task-tracker/
├── index.js              # Main CLI entry point
├── task-cli              # Bash wrapper script
├── command-handler.js    # Command processing logic
├── task-service.js       # Business logic for task operations
├── task-repository.js    # Data persistence layer
├── task-model.js         # Task data model
├── task-status.js        # Task status constants
├── tasks.json            # JSON file for data storage (auto-generated)
├── package.json          # Node.js project configuration
└── README.md             # Project documentation
```

## Development

### Running without global installation

If you prefer not to install globally, you can run commands directly:

```bash
# Using Node.js
node index.js add "Your task description"

# Using the executable script
./index.js add "Your task description"

# Using the wrapper script
./task-cli add "Your task description"
```

### Adding to PATH manually

Alternatively, you can add the project directory to your PATH:

```bash
# Add to ~/.zshrc or ~/.bashrc
export PATH="$PATH:/path/to/task-tracker"

# Or create an alias
alias task-cli="/path/to/task-tracker/task-cli"
```

## Technical Details

### Architecture

- **Modular Design**: Separated concerns with distinct layers for CLI handling, business logic, and data persistence
- **ES6 Modules**: Uses modern JavaScript module syntax
- **JSON Storage**: Simple file-based storage for portability
- **Error Handling**: Comprehensive error handling throughout the application

### Dependencies

- `nodemon` - Development dependency for hot reloading during development

### Data Storage

Tasks are stored in a local `tasks.json` file with the following structure:

```json
[
  {
    "id": 1,
    "description": "Task description",
    "status": "todo",
    "createdAt": "2025-09-09T23:05:35.592Z",
    "updatedAt": "2025-09-09T23:05:35.592Z"
  }
]
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests (if available)
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is licensed under the ISC License.

## Roadmap

Future enhancements planned:
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Export/import functionality
- [ ] Task search functionality
- [ ] Configuration file support
- [ ] Multiple storage backends (SQLite, MongoDB)

## Author

**Victor Hugo Barros Portela**

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

⭐ If you found this project helpful, please give it a star on GitHub!
