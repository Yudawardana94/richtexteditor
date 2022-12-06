import { Editor, Transforms, Text } from "slate";
import {
  isBoldMarkActive,
  isItalicMarkActive,
  isUnderlineMarkActive,
  isCodeMarkActive,
  isCodeBlockActive,
  isQuoteBlockActive,
  isHoneBlockActive,
} from "./activeChecker";

// ===================================================== Mark =====================================================
export const toggleBoldMark = (editor) => {
  const isActive = isBoldMarkActive(editor);
  isActive
    ? Editor.removeMark(editor, "bold")
    : Editor.addMark(editor, "bold", true);
};
export const toggleItalicMark = (editor) => {
  const isActive = isItalicMarkActive(editor);
  Transforms.setNodes(
    editor,
    { italic: isActive ? null : true },
    { match: (n) => Text.isText(n), split: true }
  );
};
export const toggleUnderlineMark = (editor) => {
  const isActive = isUnderlineMarkActive(editor);
  Transforms.setNodes(
    editor,
    { underline: isActive ? null : true },
    { match: (n) => Text.isText(n), split: true }
  );
};
export const toggleCodeMark = (editor) => {
  const isActive = isCodeMarkActive(editor);
  Transforms.setNodes(
    editor,
    { code: isActive ? null : true },
    { match: (n) => Text.isText(n), split: true }
  );
};

// ===================================================== Block =====================================================
// export const toggleCodeBlock = (editor) => {
//   const isActive = isCodeBlockActive(editor);
//   Transforms.setNodes(
//     editor,
//     { type: isActive ? "paragraph" : "code" },
//     { match: (n) => Editor.isBlock(editor, n) }
//   );
// };

export const toggleQuoteBlock = (editor) => {
  const isActive = isQuoteBlockActive(editor);
  Transforms.setNodes(
    editor,
    { type: isActive ? "paragraph" : "quote" },
    { match: (n) => Editor.isBlock(editor, n) }
  );
};
export const toggleHoneBlock = (editor) => {
  const isActive = isHoneBlockActive(editor);
  Transforms.setNodes(
    editor,
    { type: isActive ? "paragraph" : "hone" },
    { match: (n) => Editor.isBlock(editor, n) }
  );
};
