import Input from "./Components/Input";
import { useState } from "react";

function App() {
  const [note, setNote] = useState([]);

  const deleteNote = (index) => {
    setNote(note.filter((_, i) => i !== index));
  };

  return (
    <>
      <main className=" flex flex-col p-6 bg-white text-black rounded-xl shadow-lg w-[90%] sm:w-xl md:w-2xl mx-auto mt-10">
        <h1 className="font-semibold text-2xl text-center sm:text-start mb-3">
          Sticky Notes
        </h1>
        <Input note={note} setNote={setNote} />
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {note.map((n, i) => (
            <div
              key={i}
              className="p-4 rounded-sm shadow break-words relative"
              style={{ backgroundColor: n.color }}
            >
              <button
                onClick={() => deleteNote(i)}
                className="absolute top-1 right-2 text-[#000000bb] font-bold hover:text-red-600 "
              >
                &times;
              </button>
              {n.text}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
