import React, { useRef, useState, useEffect } from "react";
import ActionBar from "./ActionBar/ActionBar";
import "./App.css";

function App() {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.innerText);
  };

  return (
    <>
      <ActionBar />
      <div
        ref={editorRef}
        onInput={handleChange}
        style={{ border: "2px solid grey", height: "800px",width:"80%" }}
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}

export default App;
