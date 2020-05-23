import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import Icon from "../atoms/Icon";
import '../../assets/fonts/font.css';

export const type = {
  noCertified: "noCertified",
  Certified: "Certified"
};

export const icons = {
  default: "",
  certification: "certification"
};

export const colors = {
  brand_purple: Colors.brand_purple,
  neutral_black: Colors.neutral_black,
  white: Colors.white,
};

const StreamerNameWrapper = styled.p`
    font-family: Roobert TRIAL;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    background-color: ${Colors.neutral_black};
    color: ${ Colors.white };
    display: flex;
`

const StreamerName = (props) => {
  const {
    text,
    type,
    iconRight,
  } = props;

  return (
    <StreamerNameWrapper
      type={type}
    >
      {text && <p>{text}</p>}
      {iconRight && (
        <Icon
          icon={iconRight}
          big={!text}
          color={
            props.color === Colors.white || props.color === Colors.light_green
              ? Colors.black
              : Colors.white
          }
        ></Icon>
      )}
    </StreamerNameWrapper>
  );
};

StreamerName.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  iconRight: PropTypes.string,
};

StreamerName.defaultProps = {
  type: type.primary,
  text: "",
  iconRight: "",
};

export default StreamerName;
