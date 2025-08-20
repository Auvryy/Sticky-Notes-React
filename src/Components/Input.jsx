
export default function Input() {
  return(
    <div className="flex flex-col sm:flex-row w-full gap-2 ">
      <input type="text" className=" w-full border-2 rounded-sm border-[#00000067] p-2 outline-none focus:border-black transition duration-500" placeholder="Enter a new note.." maxLength={30}/>
      <button className="primary-button">Add</button>
    </div>
  )
}