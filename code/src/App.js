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
    
  // const onHeartsIncrease = (id) => {
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   }
  //   fetch(LIKE_API_URL(id), options)


// // FIRST ATTEMPT, NOW WORKING
  const onHeartsIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }

    fetch(LIKE_API_URL(id), options)
    
    //SECOND VERSION INSIDE TEST ATTEMPT, FROM STACK OVERFLOW
  //   .then(res => res.json())
  //   .then(newLike => {
  //     const updatedMessageList = messageList.map(message => {
  //       if (message._id === newLike._id) {
  //         message.hearts += 1;
  //       }
  //       return message
  //       }) 
  //       setMessageList(updatedMessageList)

  //   })
  //   .catch(error => console.error(error))
  // }

      // MY VERSION
      .then(res => res.json())
      .then(receivedMessage => {
        const updatedMessageList = messageList.map(item => {
          if (item._id === receivedMessage._id) {
            item.hearts += 1;
            // console.log('true', data.message)
          } 
          return item
        })
        setMessageList(updatedMessageList)
      })
      .catch(err => console.error(err))
  }


  // console.log(messageList)

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
        </form>


        <div className="message-list-section">
          <h1>Recent thoughts:</h1>
          {messageList.map((item) => (
            <div key={item._id}>
              <h3>{item.message}</h3>
              <p>Created at: {item.createdAt}</p>
              <button onClick={() => onHeartsIncrease(item._id)}> 
                ♥ {item.hearts}
              </button>
            </div>
          ))}
        </div>
      

    </>
  )
}