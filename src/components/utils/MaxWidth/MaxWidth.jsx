import styled from "./MaxWidth.module.css";

// eslint-disable-next-line react/prop-types
const MaxWidth = ({ maxWidth, children }) => {
  return (
    <div style={{ maxWidth: maxWidth }} className={styled["max-width"]}>
      {children}
    </div>
  );
};

export default MaxWidth;
