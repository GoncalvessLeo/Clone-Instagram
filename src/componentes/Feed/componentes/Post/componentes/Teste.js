import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MyComponent() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <button onClick={handleClick}>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
}