import styled, { css, keyframes, ThemeProps } from 'styled-components';
import { windowLargerThan500px } from '../../styles/breakpoints';
import { ITheme } from '../../themes/dto/ITheme';

const appearFromBottom = keyframes`
  from {
      opacity: 0;
      transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const Container = styled.div<{ theme: ThemeProps<ITheme> }>`
  width: 100vw;
  background: ${props => props.theme.colors.popupBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  box-shadow: 0px 20px 25px #0000001a;
  padding: 20px;
  margin-top: auto;
  animation: ${appearFromBottom} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }
  button {
    margin-top: 16px;
    margin-left: 4px;
  }
  ${windowLargerThan500px(css`
    margin: 0 auto;
    width: 100%;
    button {
      margin-left: 29px;
    }
  `)}
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const ModalMessage = styled.p`
  width: 100%;
  text-align: left;
  word-wrap: break-word;
`;
export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  width: 100%;
`;
