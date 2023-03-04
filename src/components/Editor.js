import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

export default function Editor(props) {
  const { language, displayName, icon, value, onChange } = props;
  const [open, setOpen] = useState(true);
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      {/* if open is true we dont want any additional classes to be added if false then we will add one more class named collapsed*/}
      <div className="editor-title">
        <div>
          <Box
            component="span"
            style={{
              padding: "0 1rem 0 0",
            }}
          >
            {icon}
          </Box>
          {displayName}
        </div>

        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
          {/* if editor is open show compress icon else if closed show expand icon */}
        </button>
      </div>

      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
