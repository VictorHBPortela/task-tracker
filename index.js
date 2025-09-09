#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import { TaskRepository } from "./task-repository.js";
import { TaskService } from "./task-service.js";
import { CommandHandler } from "./command-handler.js";

const args = process.argv.slice(2); 
const command = args[0];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "tasks.json");

const taskRepository = new TaskRepository(filePath);
const taskService = new TaskService(taskRepository);
const handler = new CommandHandler(taskService);


const commandArgs = handler.parseArguments(command, args);
await handler.handleCommand(command, commandArgs);