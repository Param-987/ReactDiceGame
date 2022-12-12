import './App.scss'
import React, {useRef, useState } from 'react'
import Button from './Components/Button'
import Image from './Components/Image'
import PlayerInput from './Components/PlayerInput'
import Span from './Components/Span'

export default function App() {

  const [Name,setName] = useState([
    {id:0,name:"Player1"},
    {id:1,name:"Player2"}
])

  // const [startTetx, setstartTetx] = useState("Click TO Start")

  const [Title, setTitle] = useState("Click TO Start")

  const [ImageUrl,setImageUrl] = useState([
    {id:0,url:"./Photos/dice6.png"},
    {id:1,url:"./Photos/dice6.png"}
])

const nameRef = useRef()

const editName = (ref) => {
    setName([...Name].map((e) => 
    { if(e.id === Number(ref.target.id)) e.name = ref.target.value
        return e
    }));
}
const handlePlay = () =>
{
  const a  = [Math.floor(Math.random()*6+1) ,Math.floor(Math.random()*6+1)];

  setImageUrl([...ImageUrl].map((e,idx) =>{
    var b = `./Photos/dice${a[idx]}.png`
    return {
        id:e.id,
        url:b
    }
  }));

  if(a[0] === a[1]) setTitle("Game Draw")
  else if(a[0] > a[1]) setTitle(`${Name[0]['name']} Won`)
  else setTitle(`${Name[1]['name']} Won`)
}

  return (
    <div>
      <h1>{Title}</h1>
      <div className='box'>
        <Span PlayerName={Name}/>
        <Image url = {ImageUrl} />
        <Button text = {'Click me to play'} onclick = {handlePlay} />
        <PlayerInput Name = {Name} nameRef = {nameRef} editName = {editName}  />
      </div>

    </div>  
  )
}
