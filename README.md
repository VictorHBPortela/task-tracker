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
