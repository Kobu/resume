import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import path from "path";
import { CV } from "../src/App";

// Image paths in data.ts are relative to /public, so we chdir there
process.chdir(path.resolve(__dirname, "../public"));

renderToFile(<CV />, path.resolve(__dirname, "../resume.pdf"))
  .then(() => console.log("resume.pdf generated"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
