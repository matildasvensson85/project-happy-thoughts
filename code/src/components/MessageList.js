import React from 'react'

import MessageElement from './MessageElement'

const MessageList = ({ messageList, onHeartsIncrease }) => {
    return (
        <>
            <div className="message-list-section">
                <h1>Recent thoughts:</h1>
                {messageList.map(item => (
                    <div key={item._id}>
                        <h3>{item.message}</h3>
                        <p>Created at: {item.createdAt}</p>
                        <button onClick={() => onHeartsIncrease(item._id)}> 
                        ♥ {item.hearts}
                        </button>
                    </div>

                    // <MessageElement
                    //     key={item._id}
                    //     item={item}
                    //     onHeartsIncrease={handleHeartsIncrease}   
                    // />
                ))}
            </div>
        </>
    )
}

export default MessageList