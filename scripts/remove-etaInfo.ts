import fs from "fs/promises";
import path from "path";

async function removeEtaInfoAndExpectedProcessingTime() {
  const countriesDir = path.join(process.cwd(), "lib", "countries");
  const files = await fs.readdir(countriesDir);

  for (const file of files) {
    if (!file.endsWith(".ts")) continue;
    const filePath = path.join(countriesDir, file);
    let content = await fs.readFile(filePath, "utf-8");
    // Remove expectedProcessingTime from visaTypes (single-line or multi-line)
    content = content.replace(/serviceFee:\s*[^,}]+,?\s*\n?/g, "");

    await fs.writeFile(filePath, content, "utf-8");
    console.log(`Cleaned etaInfo and expectedProcessingTime from ${file}`);
  }
}

removeEtaInfoAndExpectedProcessingTime().catch(console.error);