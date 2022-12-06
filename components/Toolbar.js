import React from "react";
import { useSlate } from "slate-react";

import {
  toggleBoldMark,
  toggleCodeMark,
  toggleItalicMark,
  toggleUnderlineMark,
  // toggleCodeBlock,
  toggleQuoteBlock,
  toggleHoneBlock,
} from "../helpers/toggleMarker";

import {
  isBoldMarkActive,
  isItalicMarkActive,
  isUnderlineMarkActive,
  isCodeMarkActive,
  // isCodeBlockActive,
  isQuoteBlockActive,
  isHoneBlockActive,
} from "../helpers/activeChecker";

const Toolbar = () => {
  const editor = useSlate();
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        paddingBottom: "1rem",
        borderBottom: "2px solid lightgrey",
      }}
    >
      <div
        style={{
          fontWeight: isBoldMarkActive(editor) ? "bold" : "normal",
          margin: "0px 5px",
          padding: "1px 4px",
          cursor: "pointer",
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBoldMark(editor);
        }}
      >
        B
      </div>
      <div
        style={{
          fontWeight: isItalicMarkActive(editor) ? "bold" : "normal",
          margin: "0px 5px",
          padding: "1px 4px",
          cursor: "pointer",
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleItalicMark(editor);
        }}
      >
        I
      </div>
      <div
        style={{
          fontWeight: isUnderlineMarkActive(editor) ? "bold" : "normal",
          margin: "0px 5px",
          padding: "1px 4px",
          cursor: "pointer",
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleUnderlineMark(editor);
        }}
      >
        U
      </div>
      <div
        style={{
          borderLeft: "2px solid #ddd",
          marginLeft: "5px",
          paddingLeft: "5px",
        }}
      />
      <div
        style={{
          fontWeight: isHoneBlockActive(editor) ? "bold" : "normal",
          margin: "0px 5px",
          padding: "1px 4px",
          cursor: "pointer",
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleHoneBlock(editor);
        }}
      >
        h1
      </div>
      <div
        style={{
          fontWeight: isCodeMarkActive(editor) ? "bold" : "normal",
          margin: "0px 5px",
          padding: "1px 4px",
          cursor: "pointer",
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleCodeMark(editor);
        }}
      >
        cb
      </div>
      <div
        style={{
          fontWeight: isQuoteBlockActive(editor) ? "bold" : "normal",
          margin: "0px 5px",
          padding: "1px 4px",
          cursor: "pointer",
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleQuoteBlock(editor);
        }}
      >
        qu
      </div>
    </div>
  );
};

export default Toolbar;
