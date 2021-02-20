import styled from 'styled-components';

const scalePercentage = 0.7;

export const Wrapper = styled.div`
  display: flex;
`;
export const SwitchBox = styled.div`
  display: flex;
  flex: 1;

  label {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;
export const SwitchCheckbox = styled.input`
  appearance: none;
  width: 3.5rem;
  height: 1.5rem;
  background: ${props => props.theme.colors.switch.base.background};
  border-radius: 3rem;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: scale(${scalePercentage});
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
