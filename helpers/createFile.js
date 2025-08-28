import fs from "fs";

export const createFile = async (path, tasks) => {
    try {
        fs.writeFileSync(path, tasks);
        console.log("Task updated successfully");
    } catch (error) {
        console.log("error in createFile: ", JSON.stringify(error));
    }
}