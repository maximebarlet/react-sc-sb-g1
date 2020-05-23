import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import Verified from '../../img/Circled.png';

export const colors = {
    purple: "purple",
    grey: "grey"
};


const Img = styled.img`
    width:30px;
`;

const BadgeWrapper = styled.span`
  background: ${props => (props.color === colors.purple ? Colors.brand_primary : Colors.neutral_grey)};
  margin-right: 8px;
  padding: 4px 8px;
  border-radius: 22px;
  color: white;
  font-family: sans-serif;
  font-size: 12px;
  cursor: pointer;
`;

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height:100vh;
`;


const Badge = props => {
    const { text, color } = props;
    const [isShow, setIsShow] = useState(false);
    return (
        <Container>
            <BadgeWrapper onClick={() => setIsShow(!isShow)} color={color}>{text}</BadgeWrapper>
            {isShow && <Img src={Verified}/>}
        </Container>
    );
};

Badge.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
    text: PropTypes.string
};

Badge.defaultProps = {
    color: colors.grey
};

export default Badge;
