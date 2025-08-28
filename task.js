import { createFile } from "./helpers/createFile.js";

export class Task {
    constructor(args, filePath) {
        this.args = args;
        this.filePath = filePath;
    }
    
    async add(task, taskList) {
        taskList.push(task);
        await createFile(this.filePath, JSON.stringify(taskList))
    }

    list(taskList) {
        const status = this.args[3];
        if (status) {
            const taskListByStatus = taskList.filter((task) => task.status === status);
            console.log(taskListByStatus);
            return;
        }
        console.log(taskList)
    }

    async update(taskList) {
        const id = Number(this.args[3]);
        const newDescription = this.args[4];
        let taskUpdated = false;
        taskList.forEach((task) => {
            if (task.id === id) {
                task.description = newDescription;
                task.updatedAt = new Date();
                taskUpdated = true;
            }
        });
    
        if (taskUpdated) {
            await createFile(this.filePath, JSON.stringify(taskList));
            console.log("Task updated successfully");
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    async delete(taskList) {
        const id = Number(this.args[3]);
        let taskDeleted = false;
        taskList.forEach((task, index) => {
            if (task.id === id) {
                taskList.splice(index, 1);
                taskDeleted = true
            }
        })
        if (taskDeleted) {
            await createFile(this.filePath, JSON.stringify(taskList));
            console.log("Task deleted successfully");
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }
}