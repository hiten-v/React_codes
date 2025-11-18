import React,{ useState, useEffect } from "react";

function Input() {

  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (text.length === 0) {
      setMessage("");
    } else if (text.length < 3) {
      setMessage("Too small");
    } else {
      setMessage("Looks good!");
    }
  }, [text]);


  return (
    <>
      <label htmlFor="inp">Enter Character</label>
      <input
        id="inp"
        type="text"
        className="border-2 m-2 border-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    
      <div>
        {message}
      </div>


    </>
  );
}

export default Input;


