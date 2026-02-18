const fs = require("fs");
const path = require("path");

const docsPath = path.join(__dirname, "../docs");
const outputFile = path.join(docsPath, "knowledge.json");

const repoBase = "/Course-Azure-for-SREs"; // <-- your GitHub Pages repo base path

let knowledge = [];

// Folders to ignore
const ignoreFolders = ["_layouts", "_includes"];

// Remove Jekyll front matter
function removeFrontMatter(content) {
  return content.replace(/^---[\s\S]*?---/, "");
}

// Clean markdown formatting
function cleanMarkdown(content) {
  return content
    .replace(/[#>*`]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // remove links but keep text
    .replace(/\n+/g, " ")
    .trim();
}

function extractFromFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const noFrontMatter = removeFrontMatter(raw);
  const cleaned = cleanMarkdown(noFrontMatter);

  const titleMatch = cleaned.match(/^(.{1,80})/);
  const title = titleMatch ? titleMatch[1] : path.basename(filePath, ".md");

  return {
    title,
    content: cleaned.substring(0, 3000) // limit size for performance
  };
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(docsPath, fullPath);

    if (fs.statSync(fullPath).isDirectory()) {
      if (!ignoreFolders.includes(file)) {
        scanDirectory(fullPath);
      }
    } else if (file.endsWith(".md")) {
      const data = extractFromFile(fullPath);

      knowledge.push({
        title: data.title,
        content: data.content,
        url: repoBase + "/" + relativePath.replace(/\.md$/, "/").toLowerCase()
      });
    }
  });
}

scanDirectory(docsPath);

fs.writeFileSync(outputFile, JSON.stringify(knowledge, null, 2));

console.log("knowledge.json generated successfully!");
