import React from "react";
import Box from "../components/Box";
import Title from "../components/Title";

export default function Home() {
  return (
    <Box as="section">
      <Box className="border">
        <Title>This is home!</Title>
      </Box>
      <Box>
        Go to <a href="/exercises">Go to exercises</a>
      </Box>
    </Box>
  );
}
