"use client";
import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({ children }) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  button {
    padding: 10px 28px;
    border: 0;
    border-radius: 100px;
    background-color: #2ba8fb;
    color: #ffffff;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    cursor: pointer;
  }

  button:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
  }

  button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
  }`;

export default PrimaryButton;
