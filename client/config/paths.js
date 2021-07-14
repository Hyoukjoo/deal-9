import path from "path";
import fs from "fs";

export const appPath = fs.realpathSync(process.cwd());

export const srcPath = path.join(appPath, "src");
export const distPath = path.join(appPath, "dist");
export const entryPath = path.join(srcPath, "index.js");
export const serverPath = path.join(srcPath, "server.js");
export const publicPath = path.join(appPath, "public");

export const componentPath = path.join(srcPath, "components");
export const atomPath = path.join(componentPath, "atoms");
export const moleculePath = path.join(componentPath, "molecules");
export const organismPath = path.join(componentPath, "organisms");
export const templatePath = path.join(componentPath, "templates");
export const pagePath = path.join(componentPath, "pages");

export const utilPath = path.join(srcPath, "utils");
