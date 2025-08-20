import Input from "./Components/Input"


function App() {
  return(
    <>
      <main className=" flex flex-col p-6 bg-white text-black rounded-xl shadow-lg w-[80%] sm:w-xl md:w-2xl top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
        <h1 className="font-semibold text-2xl text-center sm:text-start mb-3">Sticky Notes</h1>
        <Input/>
        <section className="">

        </section>
      </main>
    </>
  )
}

export default App
