import dynamic from "next/dynamic";
import React, { useState, useMemo } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import styles from "../../styles/Home.module.css";

const defaultInitialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text inside the house." }],
  },
];

function Base() {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = useMemo(
    () => JSON.parse(localStorage.getItem("content")) || defaultInitialValue,
    []
  );
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Rich Text Editor II </h1>
        <div className={styles.slateContainer}>
          <Slate
            editor={editor}
            value={initialValue}
            onChange={(value) => {
              const isAstChange = editor.operations.some(
                (op) => "set_selection" !== op.type
              );
              if (isAstChange) {
                // Save the value to Local Storage.
                const content = JSON.stringify(value);
                localStorage.setItem("content", content);
              }
            }}
          >
            <Editable />
          </Slate>
        </div>
      </main>
    </div>
  );
}

// export default Base;
export default dynamic(() => Promise.resolve(Base), {
  ssr: false,
});
