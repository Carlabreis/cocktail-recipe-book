// prop types. you dont have to use it, but it makes your code more robust and catch errors before they happen
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: "Default header's prop title. If Header doesn't have title defined in app.js"
}


// if usign propTypes. it checks is prop type is string. you can use .isRequired if its required:
// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

//CSS in JS - you can pass the const name as a value for a style property in the element you want to use the style:
// const headingStyle = {
//   color:'red',
//   backgroundColor: 'black',
// }

export default Header
