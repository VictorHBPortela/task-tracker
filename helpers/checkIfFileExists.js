import fs from "fs";

export const checkIfFileExists = (path) => {
    try {
        if (fs.existsSync(path)) {
            return true;
        }
        return false;
        
    } catch (error) {
        console.log("error in checkIfFileExists:", JSON.stringify(error))
    }
}