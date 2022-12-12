import Input from './Input'
import './playerInput.scss'


export default function PlayerInput({Name,nameRef,editName}) {
    
  return (
    <div className = 'playerInput'>
        <Input Name = {Name} nameRef ={nameRef} editName = {editName} idx = {0}/>
        <Input Name = {Name} nameRef ={nameRef} editName = {editName} idx = {1}/>  
    </div> 
  )
}
