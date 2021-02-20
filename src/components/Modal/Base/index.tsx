/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { CustomModal } from './styles';

interface IModalProps {
  isOpen: boolean;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen }) => {
  return (
    <CustomModal
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1',
          zIndex: 10,
          padding: '8px',
        },
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1',
          zIndex: 10,
          padding: '8px',
        },
      }}
    >
      {children}
    </CustomModal>
  );
};

export default Modal;
