import "./App.css";
import { useRef, useState } from "react";

function App() {
  const inputfName = useRef();
  const inputlName = useRef();
  const [btnClicked, setBtnClicked] = useState(false);

  function onClickSave(e) {
    e.preventDefault();
    (inputfName.current.value !== '' && inputlName.current.value !== '') && setBtnClicked(true);
  }

  function onClearForm() {
    setBtnClicked(false)
    inputfName.current.value = '';
    inputlName.current.value = '';
  }

  return (
    <div className="App">
      <div className="main_form">
        <input type='text' placeholder="Enter First Name" name="fname" ref={inputfName} /> <br /><br />
        <input type='text' placeholder="Enter Last Name" name="lname" ref={inputlName} /> <br /><br /><br />
        <button type="submit" onClick={onClickSave}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" onClick={() => onClearForm()}>Clear</button>
        <div className="detail_section">
          {btnClicked && 
            <>
              <h3>Hey, {inputfName.current.value}  {inputlName.current.value}</h3>
              <h4>How are you?</h4>
              <p>i know you understood useRef better using this example. <br/> Thanks me later, <a href='https://namrata-72269.medium.com/' target="_blank">Click here</a> to follow me!</p>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
