"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

type Props = {};

const MEditor = (props: Props) => {
  const [code, setCode] = useState();

  return (
    // <div style={{ height: "90vh" }}>
    <Editor
      height="100%"
      defaultLanguage="javascript"
      defaultValue="// start typing here..."
      theme="vs-dark"
    />
    // </div>
  );
};

export default MEditor;
