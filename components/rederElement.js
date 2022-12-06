import "../styles/Home.module.css";

export const Element = ({ element, attributes, children }) => {
  switch (element.type) {
    case "code":
      return <code {...attributes}>{children}</code>;
    case "quote":
      return (
        <blockquote
          style={{
            borderLeft: "2px solid #ddd",
            marginLeft: "0",
            marginRight: "0",
            paddingLeft: "10px",
            color: "#aaa",
            fontStyle: "italic",
          }}
          {...attributes}
        >
          {children}
        </blockquote>
      );
    case "hone":
      return <h1 {...attributes}>{children}</h1>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export const Leaf = ({ leaf, attributes, children }) => {
  if (leaf.bold) {
    children = <b>{children}</b>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <i>{children}</i>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
