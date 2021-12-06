import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("handleUpClick");
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    console.log("handleLoClick");
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    console.log("handleClearClick");
    setText("");
  };

  const handleSpacesClick = () => {
    console.log("handleSpacesClick");
    setText(text.trim());
  };

  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  };

  const handleCopyTextClick = (event) => {
    /* Get the text field */
    var copyText = document.getElementById("myBox");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpacesClick}>
          Trim Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyTextClick}>
          Copy Text
        </button>
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{Math.ceil(0.008 * text.split(" ").length)} mins read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
