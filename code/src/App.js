import React, { useState, useEffect } from 'react'

import { API_URL } from './components/urls'
import { LIKE_API_URL } from './components/urls'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const newMessageChange = (event) => {
    setNewMessage(event.target.value)
    // console.log(newMessage)
  }

  useEffect(() => {
    fetchMessages()
  },[])

  const fetchMessages = () => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => setMessageList(data))
        .catch(err => console.error(err));
  }

  const onSubmitMessage = (event) => {
    event.preventDefault();
    console.log(`Form submitted: ${newMessage}`)

    const option = {
      method: 'POST',
      headers: {
      ' Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage })
    }
  
    fetch(API_URL, option)
      .then(res => res.json())
      .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
      .catch(err => console.error(err));
  }

    // TEST ATTEMPT, NOT FINISHED //
//   const onHeartsIncrease = (id) => {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     }

//     fetch(LIKE_API_URL(id), options)
//       .then(res => res.json())
//       .then(receivedMessage => {
//           const updatedMessageList = messageList.map(data.message => {
//             if (data_id === receivedMessage._id) {
//               console.log('True', data.message)
//               data.hearts += 1
//             }  else {
//               console.log('False', data.message)
//             }
//           })
//       })
//       .catch(err => console.error(err))
// }


  const onHeartsIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }

    fetch(LIKE_API_URL(id), options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }


  console.log(messageList)

  return (
    <>
      <form onSubmit={onSubmitMessage}>
        
        <div className="input-section">
          <label htmlFor="newMessage"></label>
          <input
            id={newMessage}
            name="newMessage"
            type="text"
            value={newMessage}
            onChange={newMessageChange}
            placeholder="Type your message here"
          />
          <button type="submit">Submit message</button>
        </div>


        <div className="message-list-section">
          <h1>Recent thoughts:</h1>
          {messageList.map((data) => (
            <div key={data._id}>
              <h3>{data.message}</h3>
              <p>Created at: {data.createdAt}</p>
              <button onClick={() => onHeartsIncrease(data._id)}> 
                ♥ {data.hearts}
              </button>
            </div>
          ))}
         </div>

      </form>
    </>
  )
}