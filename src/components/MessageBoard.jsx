import { useState } from "react";
function MessageBoard() {
  const [text, setText] = useState(["Hello all! This is first message"]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setText([...text, inputText]);
      setInputText("");
    } 
    else {
      alert("Enter a message!!!")
    }
  };

  const handleDelete = (index) => {
    const newText = [...text];
    newText.splice(index, 1);
    setText(newText);
  };
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
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {text.map((item, index) => {
        return (
          <div class="board">
            <div className="message">
              <h1 key={index}>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
