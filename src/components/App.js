import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Header from "./Header";
import useLocalStorage from "../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `
      );
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <Header />
      {/* input area/pane for html css js */}
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          icon={<FontAwesomeIcon icon={faHtml5} className="html-icon" />}
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          icon={<FontAwesomeIcon icon={faCss3} className="css-icon" />}
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          icon={<FontAwesomeIcon icon={faSquareJs} className="js-icon" />}
          value={js}
          onChange={setJs}
        />
      </div>

      {/*output area/pane */}
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
