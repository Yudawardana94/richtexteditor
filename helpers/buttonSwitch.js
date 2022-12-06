import { Editor, Transforms, Text } from "slate";

import {
  toggleBoldMark,
  toggleCodeMark,
  toggleItalicMark,
  toggleUnderlineMark,
  //   toggleCodeBlock,
  toggleQuoteBlock,
} from "../helpers/toggleMarker";

const Switcher = (event, editor) => {
  event.preventDefault();
  switch (event.key) {
    case "`": {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "code",
      });
      Transforms.setNodes(
        editor,
        { type: match ? "paragraph" : "code" },
        { match: (n) => Editor.isBlock(editor, n) }
      );
      break;
    }

    case "l": {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "link",
      });
      Transforms.setNodes(
        editor,
        { type: match ? "paragraph" : "link" },
        { match: (n) => Editor.isBlock(editor, n) }
      );
      break;
    }

    case "b": {
      toggleBoldMark(editor);
      break;
    }

    case "i": {
      toggleItalicMark(editor);
      break;
    }

    case "u": {
      toggleUnderlineMark(editor);
      break;
    }

    case "c": {
      toggleCodeMark(editor);
      break;
    }

    case "q": {
      toggleQuoteBlock(editor);
      break;
    }
  }
};
export default Switcher;
