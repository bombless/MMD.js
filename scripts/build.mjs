import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outDir = path.resolve(rootDir, "dist");

const entries = [
  "index.html",
  "main.js",
  "MMD.js",
  "libs",
  "data",
  "model",
  "motion"
];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const entry of entries) {
  await cp(path.join(rootDir, entry), path.join(outDir, entry), { recursive: true });
}

console.log(`Build completed. Output directory: ${outDir}`);
