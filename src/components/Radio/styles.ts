/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

export const SwitchBox = styled.div`
  display: flex;

  label {
    display: flex;
  }
  span {
    margin-left: 1rem;
    cursor: pointer;
  }
`;
export const SwitchRadio = styled.input`
  appearance: none;
  width: 3.5rem;
  height: 1.5rem;
  background: ${props => props.theme.colors.switch.base.background};
  border-radius: 3rem;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:checked {
    background: ${props => props.theme.colors.switch.active.background};
    border-color: ${props => props.theme.colors.switch.active.color};
  }

  &:after {
    position: absolute;
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${props => props.theme.colors.switch.base.color};
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.3);
    transform: scale(0.7);
    left: 0;
    transition: all 0.2s ease-in-out;
  }

  &:checked:after {
    left: calc(100% - 1.5rem);
    background: ${props => props.theme.colors.switch.active.color};
  }
`;

export const Wrapper = styled.div<{ orientation: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: column;
  ${SwitchBox} {
    flex: 1;
    :not(:first-child) {
      margin-top: 0.4rem;
    }
  }
  ${({ orientation }) => {
    if (orientation === 'horizontal') {
      return css`
        flex-direction: row;
        align-items: baseline;
        ${SwitchBox} {
          flex: unset;
          :not(:first-child) {
            margin-left: 0.8rem;
          }
        }
      `;
    }
  }};
`;
