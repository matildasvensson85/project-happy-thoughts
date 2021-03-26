import React from 'react'

const MessageForm = ({ newMessage, onMessageChange, onSubmitMessage }) => {
    return (
        <>
            <form 
                onSubmit={onSubmitMessage}
                aria-label="input form for happy thoughts"
                className="form-wrapper"
                >
                
                <label htmlFor="newMessage">
                    <h1 tabIndex="0" className="form-title">What is making you happy right now?</h1>
                </label>

                <input
                    className="input-field"
                    id="newMessage"
                    name="newMessage"
                    type="text"
                    value={newMessage}
                    onChange={onMessageChange}
                    placeholder="Type here"
                />

                <button 
                    type="submit"
                    className="submit-btn">
                    Send happy thought
            </button>
                
            </form>
      </>
    )
}

export default MessageForm