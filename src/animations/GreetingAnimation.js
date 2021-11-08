import React, { useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components"

const animation = keyframes`
  0% {opacity: 0; transform: translateY(-80px) skewY(-15deg) rotateZ(-10deg); filter: blur(10px);}
  25% {opacity: 1; transform: translateY(-0px) skewY(0deg) rotateZ(0deg); filter: blur(0px);}
  75% {opacity: 1; transform: translateY(-0px) skewY(0deg) rotateZ(0deg); filter: blur(0px);}
  100% {opacity: 0; transform: translateY(-80px) skewY(-15deg) rotateZ(-10deg); filter: blur(10px);}
`;

/*
0% {opacity: 0; transform: translateY(-50px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
  25% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
  75% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
  100% {opacity: 0; transform: translateY(-50px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
  */

const Wrapper = styled.span`  
  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  span:nth-child(1) {
    animation-delay: 0.1s
  }
  span:nth-child(2) {
    animation-delay: 0.2s
  }
  span:nth-child(3) {
    animation-delay: 0.3s
  }
  span:nth-child(4) {
    animation-delay: 0.4s
  }
  span:nth-child(5) {
    animation-delay: 0.5s
  }
`;

const GreetingAnimation = () => {
  const helloArray = "Hello".split("");
  const salutArray = "Salut".split("");

  const [currentArr, setArr] = useState(helloArray)

  useEffect (() => {
    const timer = () => {
      setTimeout(() => {
        if (currentArr[0] === "H") {
          setArr(salutArray);
        }
        else {
          setArr(helloArray);
        }
      }, 6000)
      
    }
    timer();
    clearTimeout(timer)
  }, [currentArr]);

  return <Wrapper>{currentArr.map((letter, index) => (
    <span key={index}>{letter}</span>
  ))}</Wrapper>
}

export default GreetingAnimation;