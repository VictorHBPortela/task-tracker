import { taskStatus } from "./task-status.js";
import { TaskModel } from "./task-model.js";

export class TaskService {
    constructor(repository) {
        this.repository = repository;
    }

    async addTask(description) {
        const tasks = await this.repository.loadTasks();
        const newId = await this.getNextId();
        const newTask = new TaskModel(newId, description);
        tasks.push(newTask);
        await this.repository.saveTasks(tasks);
        console.log(`Task added: ${description}`);
    }
    
    async updateTask(id, description) {
        const tasks = await this.repository.loadTasks();
        const task = tasks.find((task) => task.id === id);
        if (!task) {
            console.log(`Task not found with ID ${id}`);
            return;
        }
        task.description = description;
        task.updatedAt = new Date();

        await this.repository.saveTasks(tasks);
        console.log('Task updated successfully');
        return task;
    }
    
    async updateStatus(id, status) {
        const tasks = await this.repository.loadTasks();
        const task = tasks.find((task) => task.id === id);
        if (!task) {
            console.log(`Task not found with ID ${id}`);
            return;
        }

        task.status = status;
        task.updatedAt = new Date();

        await this.repository.saveTasks(tasks);
        console.log('Task updated successfully');
        return task;
    }
    
    async listTasks(status = null) {
        const tasks = await this.repository.loadTasks();
        if (!status) {
            console.table(tasks);
            return;
        }
        console.table(tasks.filter(t => t.status === status));
    }
    
    async deleteTask(id) {
        const tasks = await this.repository.loadTasks();
        const filteredTasks = tasks.filter(t => t.id !== id);
        if (filteredTasks.length === tasks.length) {
            console.log(`Task not found with ID ${id}`);
            return false;
        }
        await this.repository.saveTasks(filteredTasks);
        console.log("Task deleted successfully!");
        return true;
    }

    async getNextId() {
    const tasks = await this.repository.loadTasks();
    return tasks.length > 0 
        ? Math.max(...tasks.map(task => task.id)) + 1 
        : 1;
    }
}