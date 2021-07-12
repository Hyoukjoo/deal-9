import path from "path";
import fs from "fs";

export const appPath = fs.realpathSync(process.cwd());

export const distPath = path.resolve(appPath, "dist");
export const entryPath = path.resolve(appPath, "src", "index.js");
