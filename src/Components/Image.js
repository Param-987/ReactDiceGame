import React from 'react'

const Image = ({url}) => {
  return (
    <div className='img'>
       { url.map((u,idx) => <img key = {idx} src={u.url} alt="6"  />)}
    </div>
  )
}

export default Image