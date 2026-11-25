import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single-line safety warning label for every human being.
// Written in the voice of a real printed label — "WARNING:" up front,
// a plain list of defects, and the laugh landing in the last few words,
// when the human blames you for what it did to itself.
const line =
  "WARNING: This human has no warranty, no off switch, and will absolutely blame you for the thing it just did to itself.";

// The gate counts every character of entry.txt and wants exactly one
// line, so the file is written with no trailing newline: the bytes on
// disk are the label and nothing else. A newline would be one more
// character and a second, empty line after the split.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, line, "utf8");
