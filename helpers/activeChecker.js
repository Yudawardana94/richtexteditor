import { Editor } from "slate";

export const isBoldMarkActive = (editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => {
      return n.bold === true;
    },
    universal: true,
  });

  return !!match;
};

export const isItalicMarkActive = (editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => {
      return n.italic === true;
    },
    universal: true,
  });

  return !!match;
};

export const isUnderlineMarkActive = (editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => {
      return n.underline === true;
    },
    universal: true,
  });

  return !!match;
};

export const isCodeMarkActive = (editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => {
      return n.code === true;
    },
    universal: true,
  });

  return !!match;
};

// export const isCodeBlockActive = (editor) => {
//   const [match] = Editor.nodes(editor, {
//     match: (n) => {
//       return n.code === true;
//     },
//     universal: true,
//   });

//   console.log(match, !!match, "match");

//   return !!match;
// };

export const isQuoteBlockActive = (editor) => {
  const { selection } = editor;
  if (!selection) return false;
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === "quote",
  });
  return !!match;
};

export const isHoneBlockActive = (editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => {
      return n.type === "hone";
    },
  });

  return !!match;
};
