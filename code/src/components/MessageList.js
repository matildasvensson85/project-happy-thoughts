import React from 'react'

const MessageList = ({ messageList, onHeartsIncrease }) => {
    return (
        <>
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

export default MessageList