import React from "react";
import PropTypes from "prop-types";

export const icons = {
    certification: "certification"
};

const sizes = {
  normal: "20px",
};

const StreamerNameIcon = (props) => {
  const { color, icon } = props;

  return (
    <>
      {icon === "certification" && (
        <svg
          fill={color}
          icon={icon}
          height={sizes.normal}
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.00004 0.333359C3.32004 0.333359 0.333374 3.32003 0.333374 7.00002C0.333374 10.68 3.32004 13.6667 7.00004 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00002C13.6667 3.32003 10.68 0.333359 7.00004 0.333359ZM5.66671 10.3334L2.33337 7.00002L3.27337 6.06003L5.66671 8.44669L10.7267 3.38669L11.6667 4.33336L5.66671 10.3334Z"/>
        </svg>
      )}
    </>
  );
};

StreamerNameIcon.propTypes = {
  icon: PropTypes.string,
};

StreamerNameIcon.defaultProps = {
  color: "#9146FF",
  icon: "certification",
};

export default StreamerNameIcon;
