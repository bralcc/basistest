import React from "react";
import Box from "../components/Box";
import Title from "../components/Title";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 my-2">
      <Title>Cognitieve test - Oefeningen</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        sequi cumque error commodi sit magni ipsam, amet nisi nemo quaerat
        minima veritatis eos incidunt explicabo dolorum ea alias tenetur animi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        delectus, nihil aut reprehenderit excepturi esse ipsum quas, est laborum
        sunt quisquam, similique fugit! Nobis dolorum ratione facilis quas
        officiis dignissimos.
      </p>
      <Button>
        <a href="/exercises">Oefeningen</a>
      </Button>
    </div>
  );
}
