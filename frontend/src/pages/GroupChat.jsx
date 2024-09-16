import React, { useState } from 'react'

const GroupChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: "You" }]);
      setInput("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.chatBox}>
        {messages.map((message, index) => (
          <div key={index} style={styles.message}>
            <strong>{message.user}: </strong> {message.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

// Basic styles for chat UI
const styles = {
  chatContainer: {
    width: "300px",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
  },
  chatBox: {
    height: "300px",
    overflowY: "scroll",
    marginBottom: "10px",
    padding: "5px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
  },
  message: {
    padding: "5px 0",
    color: "#000",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    color: "#000", 
  },
  button: {
    padding: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    marginLeft: "5px",
    cursor: "pointer",
  },
};

export default GroupChat;