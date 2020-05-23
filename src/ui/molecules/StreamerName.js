import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Certified from "../../assets/img/certifiedIcon.png";


const StreamerNameWrapper = styled.h1`
    font-family: Roobert TRIAL;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
    padding: 5px 5px 0px 0px;
`;

const CertifiedIcon= styled.img`
    padding-left: 10px;
`;

const StreamerName = props => {
    const { text, certified } = props;
    return <StreamerNameWrapper certified={certified}>{text} 
        {
            (certified) ? <CertifiedIcon src={Certified} /> : ''
        }
    </StreamerNameWrapper>;
};

StreamerName.propTypes = {
    text: PropTypes.string,
    certified: PropTypes.bool,
};

StreamerName.defaultProps = {
    text: '',
    certified: false,
};

export default StreamerName;
