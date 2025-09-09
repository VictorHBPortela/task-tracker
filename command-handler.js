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
                    console.log('Usage: node index.js <command> [arguments...]');
                    console.log('Available commands:');
                    console.log('  add "description"');
                    console.log('  update <id> "description"');
                    console.log('  delete <id>');
                    console.log('  mark-in-progress <id>');
                    console.log('  mark-done <id>');
                    console.log('  list [status]');
                    process.exit(1);
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