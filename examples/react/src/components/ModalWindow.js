import styled from 'styled-components';
import React, { useState } from 'react';

const StyledModalWindow = styled.div`
  ${({ isClose, isShow }) =>
    isClose
      ? `visibility: hidden;`
      : isShow
      ? `visibility: visible;`
      : `visibility: hidden;`}
  z-index: 1000;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: -100vh;
  left: -100vw;
  bottom: -100vh;
  right: -100vw;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  background-color: white;
  box-sizing: border-box;
  border-radius: 8vmin;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vmin;
  text-align: center;
  position: fixed;
  top: ${({ topichi }) => topichi};
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 90vmin;
  z-index: 2;
  > button {
    position: absolute;
    top: 4vmin;
    right: 4vmin;
  }
`;

const Content = styled.div`
  max-height: 80vmin;
  padding: 4vmin;
`;

const Title = styled.h1`
  font-size: 4vmin;
  margin: 3vmin auto 0;
`;

const Text = styled.p`
  color: #777;
  font-size: 2vmin;
  margin: 4vmin 0 0;
`;

const ModalWindow = ({
  className,
  title,
  text,
  topichi,
  isShow,
  isShowCloseButton,
  children,
}) => {
  const [isClose, setIsClose] = useState(false);
  return (
    <StyledModalWindow className={className} isShow={isShow} isClose={isClose}>
      <Overlay />
      <ContentWrapper topichi={topichi}>
        {isShowCloseButton && (
          <Button bgColor="transparent" onClick={() => setIsClose(true)}>
            ✖
          </Button>
        )}
        <Content>
          <Title>{title}</Title>
          <Text>{text}</Text>
          {children}
        </Content>
      </ContentWrapper>
    </StyledModalWindow>
  );
};

export default ModalWindow;
