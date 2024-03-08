import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singers from './Singers'


function App() {
  const [count, setCount] = useState(0)
  const actors = ['Tom Cruise', 'Tom Hanks', 'Tom Hardy', 'Tom Holland', 'Tom Felton']

  const singers = [{ name: 'Atif Aslam', age: 38 }, { name: 'Ali Zafar', age: 40 }, { name: 'Arijit Singh', age: 34 }, { name: 'Sonu Nigam', age: 48 }, { name: 'Arjit Singh', age: 34 }]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> 
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React ka jalwa</h1>
      
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }



      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}






      {/* <Student grade="3.88" name="Badar"></Student>
      <Student grade={3.88} name="Badar"></Student> */}




      {/* <Developer></Developer> */}



      {/* <Device name="Laptop" price="55"></Device> */}
      {/* here name is a prop and Laptop is the value of the prop  and price is also a prop and it becomes an object(props) */}
      {/* <Device name="Watch"></Device>
      <Device name="Mobile"></Device> */}




      {/* <Person></Person> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Hello World
      </p>
    </>
  )
}

function Device(props) {
  console.log(props)
  return (
    <div>
      <h5>Device: {props.name} Price: {props.price}</h5>

    </div>

  )
}

function Person() { //component banaiso
  const number = 1;
  return <h3>I am a DISCO dancer number: {number}</h3>
}

function Student({ grade = "4.00", name }) {
  console.log(grade, name)  //props is an object

  return (
    <div className='student'>
      <h1>I am a student</h1>
      <p>My Name is {name}</p>
      <p>Cgpa is {grade}</p>



    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'

  }
  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>
        Cooooooder
      </p>
    </div>
  )
}

export default App
