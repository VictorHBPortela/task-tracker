import fs from "fs";

export const createFile = async (path, task) => {
    try {
        fs.writeFileSync(path, task);
        console.log("JSON file updated sucessfully.");
    } catch (error) {
        console.log("error in createFile: ", JSON.stringify(error));
    }
}