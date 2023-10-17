import { useState } from 'react'
import './App.css'



function NameList(){

  const [list, setList] = useState(["Ram","Sita"]);
  const [name, setName] = useState(()=>"Jack");

  const onaddName = () =>{

   setList([...list,name]);
   setName("");

  }
  return (

    <div>
      <ul>
        {list.map((name) =>(

          <li key={name}>{name}</li>

        ))}
      </ul>
      <input 
        type='text'
        value={name}
        onChange={(e)=>(
          setName(e.target.value)
        )}
        >
      </input>
      <button
      onClick={onaddName} >
          Add Name
      </button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10)

  function addone(){

    setCount(count+1);

  }

  return (

      <div className="App">
        <button onClick={addone}>
          Count = {count}
        </button>
      </div>

  )
}

function App(){

  return (
    <div>
      <Counter/>
      <NameList/>
    </div>
  )
}

export default App;
