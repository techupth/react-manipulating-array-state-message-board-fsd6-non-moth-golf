import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessage] = useState("");
  const [messageArr, setMessageArr] = useState([]);

  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  const addMessage = () => {
    const newMessage = [...messageArr];
    newMessage.push(messageInput);
    setMessageArr(newMessage);
    setMessage("")
  };

  const removeMessage = (index) => {
    const removeMessage = [...messageArr];
    removeMessage.splice(index, 1);
    setMessageArr(removeMessage)
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={handleMessageInput}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {messageArr.map((message, index) => {
          
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button className="delete-button" onClick={removeMessage}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
