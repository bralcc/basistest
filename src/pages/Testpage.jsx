import React from "react";
import Box from "../components/Box";

export default function Testpage() {
  // List your color variable names as they appear in index.css
  const colors = [
    "primary",
    "secondary",
    "accent",
    "black",
    "gray",
    "backgroundExtra",
    "cutoutColor",
    "gradient-overlay-color0",
    "gradient-color0",
    "foregroundPrimary",
    "foregroundTertiary",
    "subtitle",
    "gradient-color1",
    "background",
    "title",
  ];

  return (
    <Box as="section">
      <h1>All Colors</h1>
      <Box className="flex flex-wrap gap-4">
        {colors.map((colorVar) => (
          <Box key={colorVar} className={`bg-${colorVar} p-4 rounded-md`}>
            <span style={{ fontSize: "0.9rem", textShadow: "0 1px 2px #0008" }}>
              {colorVar}
            </span>
          </Box>
        ))}
      </Box>
      <Box className="gap-4 bg-focus">
        <h2 className="text-foregroundPrimary">Test</h2>
      </Box>
    </Box>
  );
}
// This page is for testing purposes only. It displays all the colors defined in index.css.
