import Input from "./Components/Input";
import { useEffect, useState } from "react";

function App() {
  const [note, setNote] = useState([]);

  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("sticky-notes");
    if (savedNotes) {
      setNote(JSON.parse(savedNotes));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("sticky-notes", JSON.stringify(note));
    }
  }, [note, loaded]);

  const deleteNote = (id) => {
    setNote(note.filter((n) => n.id !== id));
  };

  return (
    <>
    <main className="flex flex-col p-6 bg-white text-black rounded-xl shadow-lg w-[90%] sm:w-xl md:w-2xl mx-auto mt-10">
      <h1 className="font-semibold text-2xl text-center sm:text-start mb-3">
        Sticky Notes
      </h1>

      <Input note={note} setNote={setNote} />

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {note.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">
            No notes yet. Add one!
          </p>
        ) : (
          note.map((n) => (
            <div
              key={n.id}
              className="p-4 rounded-sm shadow break-words relative text-center"
              style={{ backgroundColor: n.color }}
            >
              <button
                onClick={() => deleteNote(n.id)}
                className="absolute top-1 right-2 text-[#000000bb] font-bold hover:text-red-600"
              >
                &times;
              </button>
              {n.text}
            </div>
          ))
        )}
      </section>
    </main>
    </>
    
  );
}

export default App;
