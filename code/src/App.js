import React, { useState, useEffect } from 'react'

import { GET_API_THOUGHTS_URL } from './components/urls'
// import { POST_API_THOUGHTS_URL } from './components/urls'

export const App = () => {
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    fetchMessages()
  })

  const fetchMessages = () => {
    fetch(GET_API_THOUGHTS_URL)
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {

        .then(res => res.json())
        .then(data => setMessageList(data))
        .catch(err => console.error(err));


        // The whole object from the api //
        // const setMessageList = data
        // const theWholeObject = data
        // console.log(theWholeObject)
        // console.log(setMessageList)
    
        // // an array with all the messages only //
        // const messageArray = data.map(item => (item.message))
        // console.log(messageArray)

        // an array with all created at //
        // const createdAt = data.map(item => (item.createdAt))
        // console.log(createdAt)

       // an array with all hearts //
        // const hearts = data.map(item => (item.hearts))
        // console.log(hearts)

       // an array with all views //
      //  const views = data.map(item => (item.__v))
      //  console.log(views)

       // an array with all id's //
      //  const id = data.map(item => (item._id))
      //  console.log(id)

       console.log(`here is the message list: ${messageList}`)
       console.log('helloo')

  }

  return (
    <div>
      Recent thoughts:
      {/* {messageList.map(data => (
        <div key={data._id}>
          <h4>{message.text}</h4>
        </div>
      ))} */}
    </div>
  )
}