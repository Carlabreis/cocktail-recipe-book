// prop types. you dont have to use it, but it makes your code more robust and catch errors before they happen
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
   return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : "Add"} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}

// if usign propTypes. it checks the prop type and if its required
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

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
