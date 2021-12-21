import "./Input.css";
const Input = ({ message, sendMessage, setMessage }) => {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Enter a message to get started....."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </form>
  );
};

export default Input;
