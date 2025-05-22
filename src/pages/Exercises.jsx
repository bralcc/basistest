import React from "react";
import Box from "../components/Box";
import ExerciseData from "../data/ExerciseData";
import Title from "../components/Title";

export default function Exercises() {
  return (
    <Box className="bg-background text-text p-4">
      <Title>Exercises</Title>
      <ul>
        {ExerciseData.map((item, key) => {
          return (
            <li>
              <a id={key} href={item.path} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}
