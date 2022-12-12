import './button.scss'

const Button = ({text,onclick}) => {
  return (
    <button  className='click' onClick = {onclick}> {text} </button>
  )
}

export default Button