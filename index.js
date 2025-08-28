import fs from "fs";
import path from "path";
import { checkIfFileExists } from "./helpers/checkIfFileExists.js";
import { fileURLToPath } from "url";
import { taskStatus } from "./helpers/taskStatus.js";
import { Task } from "./task.js";
import { TaskProcessor } from "./task-processor.js";

const args = process.argv;
const command = args[2];
const taskDescription = args[3];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "tasks.json");

let taskList = [];
let newTask = { 
    id: 1, 
    description: taskDescription, 
    status: taskStatus.TODO, 
    createdAt: new Date(), 
    updatedAt: new Date() 
};
const fileExists = checkIfFileExists(filePath);

if (fileExists) {
    taskList = JSON.parse(fs.readFileSync(filePath));
    newTask.id = taskList.length + 1
}

const task = new Task(args, filePath);
const taskProcessor = new TaskProcessor(task);
taskProcessor.processTask(command, taskList, newTask);