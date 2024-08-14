"use client"
import React,{useState} from "react";

const page=()=>{
  const [title, settitle]=useState("");
  const [desc, setdesc]=useState("");
  const [mainTask,setmainTask]=useState([]);
  
  const submitHandler=(event)=>{
    event.preventDefault();
    setmainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const DeleteHandler=(i)=>{
    let copyTask= [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  };

  let renderTask;
  if(mainTask.length===0){
    renderTask = <h2>NO TASK AVAILABLE</h2>;
  }
  else{
    renderTask=mainTask.map((task,i)=>{
      return (
          <li key={i} className="flex items-center justify-between">
            <div className="flex items-center justify-between mb-5 w-2/3">
              <h5 className="text-2xl font-semibold">{task.title}</h5>
              <h6 className="text-lg font-semibold">{task.desc}</h6>
              <button onClick={()=>{
                DeleteHandler(i)
              }} className="text-2xl bg-red-600 border-zinc-950 border-2 rounded py-2 px-4">DELETE</button>
            </div>
          </li>
      );
    });
  }    
  return (
    <>
      <h1 className="text-5xl text-center px-5 py-3 font-bold text-white bg-black">
        MY ToDo List
      </h1>
      <form onSubmit={submitHandler} className="bg-white">
        <input placeholder="enter Title here" 
        type="text" 
        className="border-zinc-950 px-4 py-2 m-4 border-4"
        value={title}
        onChange={(event)=>{
          settitle(event.target.value)
        }}
        >
        </input>
        <input placeholder="enter description" 
        type="text" 
        className="border-zinc-950 px-4 py-2 m-4 border-4"
        value={desc}
        onChange={(event)=>{
          setdesc(event.target.value)
        }}
        >
        </input>
        <button className="text-white bg-black px-4 py-3 text-2xl m-5 font-bold-rounded">
        Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}
export default page;