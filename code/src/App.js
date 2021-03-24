import React, { useState, useEffect } from 'react'

import { GET_API_THOUGHTS_URL } from './components/urls'
// import { POST_API_THOUGHTS_URL } from './components/urls'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const newMessageChange = (event) => {
    setNewMessage(event.target.value)
    console.log(newMessage)
  }

  useEffect(() => {
    fetchMessages()
  },[])

  const fetchMessages = () => {
    fetch(GET_API_THOUGHTS_URL)
        .then(res => res.json())
        .then(data => setMessageList(data))
        .catch(err => console.error(err));
  }

  console.log(messageList)

  return (
    <>
      <form onSubmit={event => event.preventDefault()}>
        
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
          <button>Press me!</button>
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