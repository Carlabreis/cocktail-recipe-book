import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Cocktails from './components/Cocktails'
import AddCocktail from './components/AddCocktail'
import About from './components/About'
// example on how to render using a class:
// import React from 'react'

const App = () => {
  const [showAddCocktail, setShowAddCocktail] = useState(false)
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    const getCocktails = async () => {
      const cocktailsFromServer = await fetchCocktails()
      setCocktails(cocktailsFromServer)
    }

    getCocktails()
  }, [])

  // Fetch Cocktails
    const fetchCocktails = async () => {
    const res = await fetch('http://localhost:5000/cocktails')
    const data = await res.json()

    return data
  }

  // Fetch Cocktail
  const fetchCocktail = async (id) => {
    const res = await fetch(`http://localhost:5000/cocktails/${id}`)
    const data = await res.json()

    return data
  }

  // Add Cocktail
  const addCocktail = async (cocktail) => {
    const res = await fetch('http://localhost:5000/cocktails', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(cocktail),
    })

    const data = await res.json()

    setCocktails([...cocktails, data])
  }

  // Delete Cocktail
  const deleteCocktail = async (id) => {
    const res = await fetch(`http://localhost:5000/cocktails/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setCocktails(cocktails.filter((cocktail) => cocktail.id !== id))
      : alert('Error Deleting This Cocktail')
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const cocktailToToggle = await fetchCocktail(id)
    const updCocktail = { ...cocktailToToggle, reminder: !cocktailToToggle.reminder }

    const res = await fetch(`http://localhost:5000/cocktails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updCocktail),
    })

    const data = await res.json()

    setCocktails(
      cocktails.map((cocktail) =>
        cocktail.id === id ? { ...cocktail, reminder: data.reminder } : cocktail
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header
          title="Cocktail Recipe Book"
          onAdd={() => setShowAddCocktail(!showAddCocktail)}
          showAdd={showAddCocktail}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddCocktail && <AddCocktail onAdd={addCocktail} />}
                {cocktails.length > 0 ? (
                  <Cocktails
                    cocktails={cocktails}
                    onDelete={deleteCocktail}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Cocktails To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

// {/*function App() {
//   const name = 'Brad'
//   const x = true

//   return (
//     // it looks html but it is JSX (JavaScript Extension)
//     // title='Hello' is a prop that you can use to retrieve the prop inside the componenet - like Header.js
//       <div className="container">
//       <Header title='Header using title prop'/>
//       <h1>This is a basic h1</h1>
//       <h2>Hello {name} using const name</h2>
//       <h2>Hello {1 + 1} using 1+1 inside curly braces</h2>
//       <h2>Hello {x ? 'Yes' : 'No'} using conditionals</h2>
//     </div>
//   );
// }

// // this is rendering using a class:
// // class App extends React.Component {
// //   render() {
// //     return <h1>Hello from a class</h1>
// //   }
// // }

// export default App;
// */}
