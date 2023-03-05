import { useRef, useState, useEffect } from "react";

export default function InputRef() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef('');

  useEffect(() => {
    inputRef.current=inputValue;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {inputRef.current}</h1>
    </>
  );
}