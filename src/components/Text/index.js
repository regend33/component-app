import PropTypes from "prop-types";
import "./Text.css";

const Text = ({
  // fontStyle
  children,
  size,
  strong,
  underline,
  strikethrough: del,
  color,
  mark,
  code,

  // Tag
  block,
  paragraph,
  ...props
}) => {
  const fontStyle = {
    fontSize: typeof size === "number" ? size : undefined,
    fontWeight: strong ? "bold" : undefined,
    textDecoration: underline ? "underline" : undefined,
    color,
  };

  if (del) {
    children = <del>{children}</del>;
  }

  if (mark) {
    children = <mark>{children}</mark>;
  }

  if (code) {
    children = <code>{children}</code>;
  }

  const Tag = block ? "div" : paragraph ? "p" : "span";

  return (
    <Tag
      className={typeof size === "string" ? `Text--size-${size}` : undefined}
      style={{ ...props.style, ...fontStyle }}
    >
      {children}
    </Tag>
  );
};

Text.propTypes = {
  // fontStyle
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
  delete: PropTypes.bool,
  strong: PropTypes.bool,
  color: PropTypes.string,

  // Tag
  code: PropTypes.bool,
  mark: PropTypes.bool,
};

export default Text;
