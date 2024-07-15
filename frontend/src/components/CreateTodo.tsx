import axios from "axios";
import { useState } from "react"

export function CreateTodo(){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    /*return <div>
        <div className="flex flex-col justify-center items-center gap-6 pt-20">
           <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Title</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required  />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
              <input type="text" id="last_name" className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
            </div>
        </div>
    </div>*/

    return <div>

<div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-lg">
      <h2 className="font-bold mb-4 text-3xl">Create Todo</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className=" text-xl font-semibold w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-800"
         onChange={(e) => {
            setTitle(e.target.value)
         }}/>
      </div>
      <div className="mb-4">
        <textarea
          rows={5}
          placeholder="Description"
          className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-800"
          onChange={(e) => {
            setDescription(e.target.value);
          }} 
        ></textarea>
      </div>
      <button
        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-sm"
        onClick={async () => {
            await axios.post("http://localhost:3000/todos",{
                title: title,
                description: description
            })
        }}>
        Add Todo
      </button>
    </div>
    </div>
}