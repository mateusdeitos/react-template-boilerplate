import { SimpleInterpolation, css } from 'styled-components';

export const windowLargerThan500px = (
  style: SimpleInterpolation,
): SimpleInterpolation =>
  css`
    @media (min-width: 500px) and (min-height: 500px) {
      ${style}
    }
  `;
