import React from 'react'

const span = ({PlayerName}) => {
  const [a,b] = PlayerName
  return (
    <div className='span'>
          <span className='st' id="p01" >{a['name']}</span>
          <span className='st' id="p02" >{b['name']}</span>
    </div>
  )
}

export default span