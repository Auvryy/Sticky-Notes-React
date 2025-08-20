import { useState } from "react";

export default function Input({ note, setNote }) {
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim() === "") return;

    // pick a random color
    const colors = ["#f3f694", "#ffdbef", "#dbf3ff", "#c1fabc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // create note object with unique id
    const newNote = {
      id: Date.now(),
      text,
      color: randomColor,
    };

    setNote([...note, newNote]);
    setText("");
  };

  return (
    <div className="flex flex-col sm:flex-row w-full gap-2">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        className="w-full border-2 rounded-sm border-[#00000067] p-2 outline-none focus:border-black transition duration-500"
        placeholder="Enter a new note.."
        maxLength={60}
      />
      <button onClick={addNote} className="primary-button">
        Add
      </button>
    </div>
  );
}
