import React, { useState, useEffect } from 'react'

import MessageList from './components/MessageList'
import MessageForm from './components/MessageForm'

import { API_URL } from './reusable/urls'
import { LIKE_API_URL } from './reusable/urls'


export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessages()
  },[])

  const fetchMessages = () => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => setMessageList(data))
        .catch(err => console.error(err))
  }

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSubmitMessage = (event) => {
    event.preventDefault()
  
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage })
    }
  
    fetch(API_URL, option)
      .then(res => res.json())
      .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
      .then(() => setNewMessage(''))
      .catch(err => console.error(err))
  }

  const handleHeartsIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }

    fetch(LIKE_API_URL(id), options)
      .then(res => res.json())
      .then(receivedMessage => {
        const updatedMessageList = messageList.map(item => {
          if (item._id === receivedMessage._id) {
            item.hearts += 1
          } 
          return item
        })
        setMessageList(updatedMessageList)
      })
      .catch(err => console.error(err))
  }

  return (
    <section className="site-wrapper">
      <MessageForm
        newMessage={newMessage}
        onMessageChange={handleMessageChange}
        onSubmitMessage={handleSubmitMessage}/>
       
      <MessageList
        messageList={messageList}
        onHeartsIncrease={handleHeartsIncrease}/>
    </section>
  )
}