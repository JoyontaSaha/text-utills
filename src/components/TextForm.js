import React, { useState } from "react";


export default function TextForm(props) {

  const wordCounter = (word) =>{
    console.log("wordCounter");
    const wordArray = word.split(' ');
    let count = 0;   
    for(let i = 0; i < wordArray.length; i++ ) {
      if(wordArray[i] !== '') {
          count++;
      }
    }
    return count;
  }

  const handleUpClick = () => {
    console.log("handleUpClick");
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper case", "success");
  };

  const handleLoClick = () => {
    console.log("handleLoClick");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower case", "success");
  };

  const handleClearClick = () => {
    console.log("handleClearClick");
    setText("");
    props.showAlert("Cleared Text", "success");
  };

  const handleExtraSpacesClick = () => {
    console.log("handleExtraSpacesClick");
    setText(text.split(/[ ]+/).join(""));
    props.showAlert("Erased Extra Spaces", "success");
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
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div style={{color: props.mode === "light" ? "black" : "white"}}>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{background: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white"}}
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
        <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>
          Trim Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyTextClick}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {wordCounter(text)} words, {text.length} characters
        </p>
        <p>{Math.ceil(0.008 * text.split(" ").length)} mins read</p>
        <h2>Preview</h2>
        <p>{text.length > 1 ? text : 'Enter Something To Preview'}</p>
      </div>
    </div>
  );
}
