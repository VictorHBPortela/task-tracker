import fs from "fs";

export class TaskRepository {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async saveTasks(tasks) {
        await fs.promises.writeFile(this.filePath, JSON.stringify(tasks, null, 2));
    }

    async loadTasks() {
        if (!fs.existsSync(this.filePath)) {
            await fs.promises.writeFile(this.filePath, JSON.stringify([]), 'utf-8');
            return [];
        }

        const tasks = await fs.promises.readFile(this.filePath, 'utf-8');
        return JSON.parse(tasks);
    }
}