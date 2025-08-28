export class TaskProcessor {
    constructor(task) {
        this.task = task;
    }

    processTask(command, taskList, task = {}) {
        switch(command) {
            case "add":
                this.task.add(task, taskList)
                break;
            case "list":
                this.task.list(taskList)
                break; 
            case "update": 
                this.task.update(taskList)
                break;
            case "delete":
                this.task.delete(taskList)
                break;
            default:
                break;
        }
    }
}