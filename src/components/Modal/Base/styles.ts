import ReactModal from 'react-modal';
import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from {
      opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const CustomModal = styled(ReactModal)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: ${opacity} 1s ease forwards;
  max-width: 100vw;
`;
