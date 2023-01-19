import { useState } from 'react'
import styles from './RusumeCreate.module.css';
const RusumeCreate = ({ addTask }) => {
  const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    const [userValue, setUserValue] = useState("");  
  const [todoList, setTodoList] = useState([]);
  const [action, setAction] = useState('add');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [complete, setComplete] = useState([]);

  // Methods
  // getting the user value
  // onChange
  const handleUserValue = ({ target: { value }}) => {
    setUserValue(value); // saving into local state
  }


  // Adding the user value to the DOM 
  // onClick
  const addTodo = () => {    
    if (action === 'add') {
      // need to be a letter and not a number
      if (userValue !== ""  && isNaN(userValue)) {
        setTodoList([...todoList, userValue]); //save the actual items in the array + the new one
      }
    }

    // cleanning the user input
    setUserValue("");
  }

  // Deletting
  const handleDelete = (todo, index) => {
    // Return me all the todos in that array, but not this item whith this index
    const newTodos = todoList.filter((item, i) => i !== index);

    // Update the local state
    setTodoList(newTodos);
  }

 

  const updateTodo = () => {
    const newTodos = [...todoList];
    newTodos[currentIndex] = userValue; // updating this todo index
    
    // Adding update items to the local state
    setTodoList(newTodos);

    // cleanning the user input
    setUserValue("");
  }


return(
  <div className={styles.RusumeCreate}>
    <div class="w-full mx-5 py-10">
   <h1 class="text-blue-800 text-center">Rusume</h1>
 <div class="mx-auto w-full">
 <div class="flex justify-center">
           <div className='w-60 h-44 ml-20'>
           <div class="mt-5">
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-40 h-44 border-4 border-dashed border-blue-800">
                    <div class="flex flex-col items-center justify-center pt-7">
                    <i class="bi bi-image-fill text-4xl text-blue-800 mt-3"></i>
                        <p class="pt-1 text-sm tracking-wider text-blue-800 cursor-pointer">
                            Select a photo</p>
                    </div>
                    <input type="file" class="opacity-0" />
                </label>
            </div>
        </div>
           </div>
           <div className='w-full h-44 text-left mr-40 text-2xl mt-5 bg-blue-300 text-blue-800'>
              <div class="p-4">
              <i class="bi bi-pencil-square"></i>
              <i class="bi bi-clipboard-check-fill ml-4"></i>
                <div class="d-flex w-20 mx-auto ">
                <input class="w-60 placeholder-blue-800 px-2 border-2 border-blue-800 bg-blue-300 rounded-xl text-xl" type="text" placeholder='Full name'/>
               <input class="w-60 ml-5 placeholder-blue-800 px-2 border-2 border-blue-800 bg-blue-300 rounded-xl text-xl" type="text" placeholder='Position work'/>
               </div>
              <div class="d-flex text-lg mt-2 p-4"><p>
                <i class="bi bi-envelope-fill px-2"></i><input class="w-60 placeholder-blue-800 px-2 border-2 border-blue-800 bg-blue-300 rounded-xl text-xl" type="text" placeholder='Email'/>
              <i class="bi bi-telephone-fill px-2"></i><input class="w-60 placeholder-blue-800 px-2 border-2 border-blue-800 bg-blue-300 rounded-xl text-xl" type="text" placeholder='Phone'/>
              <i class="bi bi-geo-alt-fill px-2"></i><input class="w-60 placeholder-blue-800 px-2 border-2 border-blue-800 bg-blue-300 rounded-xl text-xl" type="text" placeholder='Country'/>
              <select class="mx-3 border-2 border-blue-800 bg-blue-400 h-8">
                <option selected>City</option>
                <option>Chernivtsi</option>
              </select>
              </p></div>
              </div>
           </div>
           </div>
   </div>
   <div class="flex justify-between mt-5 mx-20">
     <div class="info-left w-full text-left pl-8 text-blue-800">
      <div class="w-full"></div>
    <div class="w-96">
    <h2>Achievements</h2>
       <textarea class="border-2 border-blue-800 w-96 h-20 outline-none text-2xl p-3 pt-4"></textarea>
    </div>
    <div class="w-96 mt-3">
       <h2>Education</h2>
       <textarea class="border-2 border-blue-800 w-96 h-20 outline-none text-2xl p-3 pt-4"></textarea>
       </div>
       <div class="w-96 mt-3">
       <h2>Courses</h2>
       <textarea class="border-2 border-blue-800 w-96 h-20 outline-none text-2xl p-3 pt-4"></textarea>
       </div>
       <div class="w-96 mt-3">
       <h2>Profile</h2>
       <textarea class="border-2 border-blue-800 w-96 h-20 outline-none text-2xl p-3 pt-4"></textarea>
       </div>
     </div>
     
     <div class="info-right w-full pl-8 text-blue-800 text-left">
       <div class="w-60 mx-auto">
       <h2>Personal details</h2>
       <ul class="pl-3">
         <li class="text-blue-800 font-bold">Data of birth</li>
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
  <i class="bi bi-calendar-event-fill"></i>
  </div>
  <input datepicker type="text" class="border-2 border-blue-800 text-blue-800 text-sm outline-none w-full pl-10 p-2.5 placeholder-blue-800" placeholder="28/06/2000"/>
</div>

         <li class="text-blue-800 font-bold">Gender</li>
         <div class="flex flex-wrap w-40">
    <div class="flex items-center mr-4">
        <input id="red-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-blue-300 ring-red-500 accent-blue-800"/>
        <label for="red-radio" class="ml-4 text-sm font-medium text-blue-800">W</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-blue-300 accent-blue-800"/>
        <label for="green-radio" class="ml-2 text-sm font-medium text-blue-800">M</label>
    </div>
    </div>
         <li class="text-blue-800 font-bold">Website</li>
         <form onSubmit={handleSubmit} className="d-flex">
            <input class="border-2 border-blue-800 placeholder-blue-800 px-2 outline-none"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="http://website..."
            />        
            <button className='w-12 h-8 bg-blue-300 text-blue-800 text-2xl px-1'><i class="bi bi-clipboard-check-fill"></i></button>
        </form>
         <li class="text-blue-800 font-bold">LinkedIn</li>
         <form onSubmit={handleSubmit} className="d-flex">
            <input class="border-2 border-blue-800 placeholder-blue-800 px-2 outline-none"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="http://linkedln..."
            />        
            <button className='w-12 h-8 bg-blue-300 text-blue-800 text-2xl px-1'><i class="bi bi-clipboard-check-fill"></i></button>
        </form>
         <li class="text-blue-800 font-bold">Github</li>
         <form onSubmit={handleSubmit} className="d-flex">
            <input class="border-2 border-blue-800 placeholder-blue-800 px-2 outline-none"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="http://github..."
            />        
            <button className='w-12 h-8 bg-blue-300 text-blue-800 text-2xl px-1'><i class="bi bi-clipboard-check-fill"></i></button>
        </form>
       </ul>
       <hr/>
       <h2>Skills</h2>
       <section className="form d-flex">
          <input class="border-2 border-blue-800 placeholder-blue-800 px-2 outline-none"
              type="input"
              placeholder="Add your skill ..."
              id="todoInputText"
              className="todoText"
              autoFocus="autofocus"
              value={userValue}
              onChange={handleUserValue}
          />

          {
            action === 'add' ? (
              <button  
              type="submit"
              id="todoInputSave"
              className="todoButtonAdd bg-blue-300 text-blue-800 text-2xl px-1"
              onClick={() => addTodo()}
          ><i class="bi bi-plus-square w-14 h-14 "></i></button>
          
            ) : <button type="submit"
            value="update"
            id="todoInputUpdate"
            onClick={() => updateTodo()} className='todoButtonUpdate '></button>
                
          }

      </section>

      <section className="todoList">
        {
          todoList.length > 0 ? (
            <>
              <ul>
                {
                  todoList.map((todo, index) => {
                    return (
                      <li class="border-2 px-2 w-32 rounded-xl pt-2 h-10 border-blue-800 font-bold text-xl mt-3"
                        key={index}
                        className={` ${ complete.includes(index) ? 'complete'  : '' } `}
                      >
                        {todo}
                        <span 
                          onClick={() => handleDelete(todo,index)}
                        ><i class="bi bi-trash3-fill ml-2 text-red-800"></i></span>
                      </li>
                    )
                  })
                }
              </ul>
            </>
          ) : ''
        }
      </section>
       <hr/>
       <h2>Languages</h2>
       <div class="w-60">
       <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-800 bg-blue-800 border-gray-300 rounded accent-blue-800"/>
        <label for="default-checkbox" class="ml-2 text-lg font-bold text-blue-800">English</label>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-800 bg-blue-800 border-gray-300 rounded accent-blue-800"/>
        <label for="default-checkbox" class="ml-2 text-lg font-bold text-blue-800">Ukraine</label>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-800 bg-blue-800 border-gray-300 rounded accent-blue-800"/>
        <label for="default-checkbox" class="ml-2 text-lg font-bold text-blue-800">Spain</label>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-800 bg-blue-800 border-gray-300 rounded accent-blue-800"/>
        <label for="default-checkbox" class="ml-2 text-lg font-bold text-blue-800">Arabian</label>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-800 bg-blue-800 border-gray-300 rounded accent-blue-800"/>
        <label for="default-checkbox" class="ml-2 text-lg font-bold text-blue-800">French</label>
      </div>
       </div>
       <hr/>
       <h2>Qualities</h2>
       <ul class="pl-3">
         <li></li>
       </ul>
       <hr/>
       </div>
       </div>
   </div>
   <div class="mt-5">
     <button className='w-44 h-14 bg-blue-800 border-none rounded-xl text-xl text-blue-300'>Create Resume</button>
   </div>
   </div>
  </div>
);
}
RusumeCreate.propTypes = {};

RusumeCreate.defaultProps = {};

export default RusumeCreate;
