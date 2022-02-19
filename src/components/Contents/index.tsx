import React, { useState } from "react";
import { Container } from "./style";

export function Contents() {
  const [bin, setBin] = useState("");

  // converter value do input em binario

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const bin = value
      .split("")
      .map((letter) => {
        const bin = letter.charCodeAt(0).toString(2);
        return bin.toString().padStart(8, "0");
      })
      .join("");

    setBin(bin);
  };

  return (
    <Container>
      <h1>Conversor Binário</h1>
      <input type="text" onChange={handleInput} />
      <textarea value={bin} disabled />
    </Container>
  );
}
