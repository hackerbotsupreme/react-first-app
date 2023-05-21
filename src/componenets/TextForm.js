import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //this is arrow function
    // console.log("Uppercase is clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase ", "sucess");

  };
  const handleloChange = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase ", "sucess");
  };
  const handleOnChange = (event) => {
    //this is arrow function
    // console.log("On Change ");
    setText(event.target.value);
    props.showAlert("Converted to uppercase ", "sucess");
  };
  // react hooks
  const [text, setText] = useState(""); // text is a state and settext is the function which we will use to vhange the state of the text
  //  text =  "wedbwadhehejdkclfpcwewe";//  wrong way to set the text
  //  setText =  ("wedbwadhehejdkclfpcwewe");//  correct way to set the text

  const handleCopy = () => {
    console.log("I am  copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipborad", 'sucess');
  };

  const handleExtraSpaces = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Has Been CLeared", "sucess");
  }
  const handleClearCopy = ()=>{
    setText('');
    props.showAlert("The Text Has Been Cleared", "sucess");
    
  }
  return (
    <>
      <div className="container" style={{color:props.mode ==='light'?'#071661':'white' }}>
        <h1   >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            placeholder="Enter your Text Here "
             style={{backgroundColor:props.mode ==='light'?'white':'grey' ,color:props.mode ==='light'?'#071661':'white' }}//to write javascript , first curly baraces for javascript and second curly braces are for the object 
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert To UpperCase{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleloChange}>
          Convert To LowerCase{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearCopy}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces 
        </button>
      </div>
      <div className="container my-3 "  style={{color:props.mode ==='light'?'#071661':'white' }} >
        <h1> Your Text Summery </h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters{" "}
        </p>
        <p>{0.008 * text.split(" ").length}minutes to read </p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Enter Your Text To  Preview It Here "}</p>
      </div>
    </>
  );
}
