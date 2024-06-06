import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  function handleMessageInput(event) {
    setMessageInput(event.target.value);
  }

  function handleMessageSubmit() {
    setMessageList([...messageList, messageInput]);
    setMessageInput("");
  }

  function handleMessageRemove(messageIndex) {
    const newMessage = [...messageList];
    newMessage.splice(messageIndex, 1);
    setMessageList(newMessage);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleMessageInput}
            value={messageInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleMessageSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {messageList.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => handleMessageRemove(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
