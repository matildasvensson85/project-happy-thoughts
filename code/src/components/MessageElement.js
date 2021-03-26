import React from 'react'

const MessageElement = ({ item, onHeartsIncrease }) => {
    return (
        <>
            {/* <div key={item._id}> */}
                <h3>{item.message}</h3>
                <p>Created at: {item.createdAt}</p>
                <button onClick={() => onHeartsIncrease(item._id)}> 
                ♥ {item.hearts}
                </button>
            {/* </div> */}
        </>
    )
}

export default MessageElement