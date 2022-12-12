import React from 'react'

const Input = ({Name,nameRef,editName,idx}) => {
  return (
    <>
    <label htmlFor={Name[idx].id}>Player {idx+1}:  
    <input type="text" value={Name[idx].name} onChange={editName} ref = {nameRef}
    id={Name[idx].id} />
    </label>
    </>
  )
}

export default Input