"use client";
import { TypeAnimation } from "react-type-animation"

const TypeAnimationSequence = () => {
  return (
    <TypeAnimation
      sequence={[
        "I code better Frontend UIs Ꮘ",
        1000,
        "I code better Backend APIs ⚕",
        1000,
        "I code better web services ✨",
        1000,
        "I code better web experiences ✨",
        2000,
      ]}
      speed={50}
      style={{
        display: "inline-block",
        color:"#14b8a6",
      }}
      repeat={Infinity}
    />
  )
}

export default TypeAnimationSequence
