import React from 'react';
import styled from 'styled-components';

const BtnOutline = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .btn {
    color: #2AA8FF;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #2AA8FF;
    padding: 10px 20px;
    font-size: 0.8rem;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 1s;
    overflow: hidden;
    border-radius: 100px;
  }

  .btn:hover {
    color: white;
  }

  .btn::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background-color: #2AA8FF;
    z-index: -1;
    transition: all 1s;
  }

  .btn:hover::before {
    width: 160%;
  }`;

export default BtnOutline;