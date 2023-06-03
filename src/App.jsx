import './App.css';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState();
  const [mainArray, setMainArray] = useState([]);

  function addFunc() {
    // mainArray.push(inputValue);
    // setMainArray(mainArray);
    setMainArray([...mainArray, inputValue]);
    // console.log(mainArray);
    setInputValue("");
  }

  function delFunc(index) {

    const temprory = [...mainArray];
    temprory.splice(index, 1)
    setMainArray(temprory);

  }

  function delAllFunc() {
    setMainArray([]);
  }

  function editFunc(index) {
    console.log("Edited"+index);
  }


  return (
    <div>

      <input value={inputValue} type="text" onChange={(e) => { setInputValue(e.target.value) }} />
      <button onClick={addFunc}>Add</button>



      <ol>
        {
          mainArray.map((element, index) => {
            return (
              <li key={index}>
                {element}
                <button onClick={()=>{delFunc(index)}} >Delete</button>
                <button onClick={()=>{editFunc(index)}}>Edit</button>
              </li>
            )
          })
        }
      </ol>

      <button onClick={delAllFunc}>Delete All</button>

    </div>
  );
}

export default App;
