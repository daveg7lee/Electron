/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    0% {
        opacity: 0
    }
    50% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
`;

const Loader = styled.div`
  animation: ${Animation} 1.5s linear infinite;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 600;
`;

export default () => (
  <Loader>
    <h1>Loading...</h1>
  </Loader>
);
