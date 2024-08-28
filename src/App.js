import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [todos, setTodos] = useState([]);

  const addToList = async () => {
    const idea = document.getElementById('idea');
    setTodos([...todos, { todo: idea.value }])

    const length = idea.value.length;
    for (let i = 0; i < length; i++) {
      idea.value = idea.value.substring(0, idea.value.length - 1);
      await new Promise(r => setTimeout(r, 25));
    }
  }

  const removeFromList = (index) => {
    const list = [...todos];
    list.splice(index, 1);
    setTodos(list);
  }

  const max = () => {
    if (document.readyState === "complete") {
      // const computed = Math.round(window.innerHeight/document.getElementsByClassName('item').length)
    // await new Promise(r => setTimeout(r, 100));
      let computed = 0;
      setTimeout(() => {
        window.returnValue = (window.innerHeight - document.getElementById("back").clientHeight) / 3.5 < 20;
      }, 100)

      return window.returnValue;

      // console.log(window.returnValue)
      // return window.returnValue;
    }
  }

  return (
    <div className='w-screen min-h-screen h-max m-0 p-0 bg-indigo-900 overflow-y-scroll'>
      <div id='back' className='shadow-2xl lg:w-4/12 w-11/12 sm:w-9/12 min-h-80 h-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl'>
        <h1 className='font-semibold font-sans text-2xl absolute p-6 text-indigo-950 w-full text-center'>To-Do List 📝</h1>
        <div className='group w-3/4 h-16 absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
          <input id='idea' placeholder='New task...' className='border-2 p-3 pl-6 pr-36 w-full rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-0 bg-stone-200 font-medium text-lg group-hover:-translate-y-2/3 group-hover:shadow-lg duration-500 transition-all ease-in-out'></input>
          {!max() && (
            <button onClick={addToList} className='hover:bg-indigo-500 group-hover:shadow-indigo-200 group-hover:shadow-lg p-3 border-2 border-indigo-600 -translate-x-2 w-32 rounded-full absolute top-1/2 -right-2 -translate-y-1/2 focus:outline-0 text-white bg-indigo-600 font-semibold text-lg group-hover:-translate-y-2/3 duration-500 transition-all ease-in-out'>Add</button>
          )}
          {max() && (
            <button disabled className='p-3 border-2 border-indigo-600 -translate-x-2 w-32 rounded-full absolute top-1/2 -right-2 -translate-y-1/2 focus:outline-0 text-white bg-indigo-200 font-semibold text-lg group-hover:-translate-y-2/3 duration-500 transition-all ease-in-out'>Full</button>
          )}
        </div>

        <ul className='relative mt-40 mb-4 ml-4 list-disc list-inside font-sans text-base p-2 font-medium'>
          {todos.map((todo, index) => (
            <div className='item mb-2'>
              <button onClick={() => removeFromList(index)}><i className="fa-regular fa-circle-xmark text-indigo-800 pl-3 pr-2 text-2xl translate-y-0.5 hover:drop-shadow-2xl hover:-translate-y-0.5 transition-all duration-300 ease-in-out active:translate-y-0.5"></i></button>
              <input type="checkbox" className='p-2.5 m-2 rounded-full focus:ring-transparent transition-all ease-in-out duration-500'></input>
              <label className='pl-3'>{todo.todo}</label>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
