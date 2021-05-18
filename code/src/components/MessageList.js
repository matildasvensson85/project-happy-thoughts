import React from 'react'
import moment from 'moment'

const MessageList = ({ messageList, onHeartsIncrease }) => {
    return (
        <section aria-label="List of all happy thoughts" className="list-wrapper">
                {messageList.map(item => (
                    <div className="single-message-wrapper" key={item._id}>
                        <div className="happy-message">
                            <p tabIndex="0" className="happy-text">{item.message}</p>
                        </div>
                        <div className="like-and-date-wrapper">
                            <p className="like-wrapper">
                                <button 
                                    onClick={() => onHeartsIncrease(item._id)}
                                    className={`heart-btn ${item.hearts === 0 ? 'heart-btn-unliked' : 'heart-btn-liked'}`}>
                                    <span role="img" aria-label="heart">♥</span>
                                </button>
                                x {item.hearts}
                            </p>
                            <p tabIndex="0" className="created-at">{moment(item.createdAt).fromNow()}</p>
                        </div>
                    </div>
                ))}
        </section>
    )
}

export default MessageList