import React from 'react'

const MessageForm = ({ newMessage, onMessageChange, onSubmitMessage }) => {
    return (
        <>    
            <form onSubmit={onSubmitMessage}>
                <div className="input-section">
                    <label htmlFor="newMessage"></label>
                    <input
                        id="newMessage"
                        name="newMessage"
                        type="text"
                        value={newMessage}
                        onChange={onMessageChange}
                        placeholder="Type your message here"
                    />
                    <button type="submit">Submit message</button>
                </div>
            </form>
        </>
    )
}

export default MessageForm