import React, { useState, useEffect } from 'react'

import { GET_API_THOUGHTS_URL } from './components/urls'
import { POST_API_THOUGHTS_URL } from './components/urls'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const newMessageChange = (event) => {
    setNewMessage(event.target.value)
    // console.log(newMessage)
  }

  useEffect(() => {
    fetchMessages()
  },[messageList])

  const fetchMessages = () => {
    fetch(GET_API_THOUGHTS_URL)
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: newMessage })
  }
  
  fetch(POST_API_THOUGHTS_URL, option)
    .then(res => res.json())
    .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
    // console.log(newMessage)
    .catch(err => console.error(err));
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
          {messageList.map(data => (
            <div key={data._id}>
              <h3>{data.message}</h3>
              <p>Created at: {data.createdAt}</p>
              <p> Likes: {data.hearts}</p>
            </div>
          ))}
         </div>

      </form>
    </>
  )
}