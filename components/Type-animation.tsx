"use client";
import { TypeAnimation } from "react-type-animation"

const TypeAnimationSequence = () => {
  return (
    <TypeAnimation
      sequence={[
        "I code better Frontend UIs",
        1000,
        "I code better Backend APIs",
        1000,
        "I code better web applications",
        1000,
        "I code better web experiences",
        2000,
      ]}
      speed={50}
      style={{
        display: "inline-block",
        color:"#14b8a6",
        fontSize: "16px",
      }}
      repeat={Infinity}
    />
  )
}

export default TypeAnimationSequence
