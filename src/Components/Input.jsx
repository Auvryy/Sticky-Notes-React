import { useState } from "react";

export default function Input({ note, setNote }) {
  const [text, setText] = useState("");

  const userInput = (e) => {
    setText(e.target.value);
  };

  const addNote = () => {
    if (text.trim() !== "") {
      // pick a random color
      const colors = ["#f3f694", "#ffdbef", "#dbf3ff", "#c1fabc"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      // store as object
      setNote([...note, { text, color: randomColor }]);
      setText("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row w-full gap-2 ">
      <input
        onChange={(e) => userInput(e)}
        value={text}
        type="text"
        className=" w-full border-2 rounded-sm border-[#00000067] p-2 outline-none focus:border-black transition duration-500"
        placeholder="Enter a new note.."
        maxLength={30}
      />
      <button onClick={addNote} className="primary-button">
        Add
      </button>
    </div>
  );
}
