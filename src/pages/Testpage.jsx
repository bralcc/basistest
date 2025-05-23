import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";

export default function Testpage() {
  // List your color variable names as they appear in index.cs

  return (
    <Box as="section" className="flex flex-col gap-4">
      <Button variant="contained">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button>Button</Button>
    </Box>
  );
}
// This page is for testing purposes only. It displays all the colors defined in index.css.
