export class CommandHandler {
    constructor(taskService) {
        this.taskService = taskService;
        this.commandParsers = {
            add: (args) => ({ description: args[1] }),
            update: (args) => ({ id: parseInt(args[1]), description: args[2] }),
            delete: (args) => ({ id: parseInt(args[1]) }),
            'mark-in-progress': (args) => ({ id: parseInt(args[1]) }),
            'mark-done': (args) => ({ id: parseInt(args[1]) }),
            list: (args) => ({ status: args[1] || null }),
            help: (args) => ({ help: args[1]})
        };
    }

    async handleCommand(command, args) {
        try {
            switch(command) {
                case 'add':
                    await this.taskService.addTask(args.description);
                    break;
                case 'list':
                    await this.taskService.listTasks(args.status);
                    break;
                case 'update':
                    await this.taskService.updateTask(args.id, args.description);
                    break;
                case 'delete':
                    await this.taskService.deleteTask(args.id);
                    break;
                case 'mark-in-progress':
                    await this.taskService.updateStatus(args.id, 'in-progress');
                    break;
                case 'mark-done': 
                    await this.taskService.updateStatus(args.id, 'done');
                    break;
                case 'help':
                    console.log('Task Tracker CLI - Usage:');
                    console.log('  task-cli <command> [arguments...]');
                    console.log('  ./task-cli <command> [arguments...]');
                    console.log('  ./index.js <command> [arguments...]');
                    console.log('');
                    console.log('Available commands:');
                    console.log('  add "description"              Add a new task');
                    console.log('  update <id> "description"      Update an existing task');
                    console.log('  delete <id>                    Delete a task');
                    console.log('  mark-in-progress <id>          Mark task as in progress');
                    console.log('  mark-done <id>                 Mark task as done');
                    console.log('  list [status]                  List all tasks or by status');
                    console.log('');
                    console.log('Examples:');
                    console.log('  task-cli add "Buy groceries"');
                    console.log('  task-cli update 1 "Buy groceries and cook dinner"');
                    console.log('  task-cli mark-done 1');
                    console.log('  task-cli list done');
                    break;
                default:
                    console.log('Unknown command');
            }
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    parseArguments(command, args) {
        const parser = this.commandParsers[command];
        
        if (!parser) {
            console.log(`Unknown command: ${command}`);
            console.log('Available commands:', Object.keys(this.commandParsers).join(', '));
            process.exit(1);
        }
        
        return { command, ...parser(args) };
    }

}