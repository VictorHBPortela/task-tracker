import fs from "fs";
import path from "path";
import { checkIfFileExists } from "./helpers/checkIfFileExists.js";
import { createFile } from "./helpers/createFile.js";
import { fileURLToPath } from "url";
import { taskStatus } from "./helpers/taskStatus.js";

const args = process.argv;
const command = args[2];
const taskDescription = args[3];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "tasks.json");

let currentTasks = [];
let newTask = { 
    id: 1, 
    description: taskDescription, 
    status: taskStatus.TODO, 
    createdAt: new Date(), 
    updatedAt: new Date() 
};
const fileExists = checkIfFileExists(filePath);

if (fileExists) {
    currentTasks = JSON.parse(fs.readFileSync(filePath));
    newTask.id = currentTasks.length + 1
}

switch (command) {
    case "add":
        currentTasks.push(newTask);
        await createFile(filePath, JSON.stringify(currentTasks))
    default: 
        break;
}