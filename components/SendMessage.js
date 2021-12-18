import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        user: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // The object was saved successfully.
        },
        (error) => {
          // The save failed.
          // error is a Parse.Error with an error code and description.
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };
  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 rounded-full max-w-2xl shadow-xl border-4 border-pink-500">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow outline-none bg-transparent text-gray-100 placeholder:gray-500 pr-5"
        type="text"
        placeholder={`Enter a message to ${user.getUsername()}...`}
      />
      <button
        onClick={sendMessage}
        className="font-bold text-pink-500"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
