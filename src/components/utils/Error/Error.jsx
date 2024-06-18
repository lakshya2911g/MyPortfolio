import styled from "./Error.module.css";

// eslint-disable-next-line react/prop-types
const Error = ({ message }) => {
  return (
    <div className={styled["error-container"]}>
      {message ? <p>{message}</p> : <p>Something went wrong!</p>}
    </div>
  );
};

export default Error;
