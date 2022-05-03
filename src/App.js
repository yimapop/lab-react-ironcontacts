import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react'


function App() {

  const arr = contacts.slice(0, 4)
  const [contactsList, setContactsList] = useState(arr)


  const randomContact = contacts[Math.floor(Math.random() * contacts.length)]

  const addContact = () => {
    console.log(addContact)

    const arrCopy = [...contactsList]
    arrCopy.push(randomContact)
    setContactsList(arrCopy)

  }

  return (
    <div className="App">

      <h2>Iron Contacts</h2>
      <button onClick={addContact}>Add Random Contacts</button>

      <table border="1" >
        <tbody>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
          <td>Won Oscar</td>
          <td>Won Emmy</td>
        </tr>

        {contactsList.map(contact => {
          return (
            < tr key={contact._id} >
              <td><img src={contact.pictureUrl}></img> </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? <p>🏆</p> : <p>❌</p>}</td>
              <td>{contact.wonEmmy ? <p>🏆</p> : <p>❌</p>}</td>
            </tr>
          )
        })}

        </tbody>
      </table>

    </div>


  )
}

export default App
