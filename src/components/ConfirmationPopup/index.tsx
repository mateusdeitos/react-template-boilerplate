/* eslint-disable no-unused-expressions */
import React, { useCallback, useState } from 'react';
import Button from '../Button';
import Modal from '../Modal/Base';
import { Container, ModalTitle, ModalMessage, ModalFooter } from './styles';

export interface ConfirmationOptions {
  catchOnCancel?: boolean;
  title: string;
  description: string;
  confirmationButtonMessage: string;
  delaySubmit?: number;
}
interface ConfirmationDialogProps extends ConfirmationOptions {
  open: boolean;
  delaySubmit?: number;
  onSubmit: () => void;
  onClose: () => void;
  onClosed: () => void;
}

const ConfirmationModal: React.FC<ConfirmationDialogProps> = ({
  open,
  title,
  description,
  delaySubmit = 0,
  onSubmit,
  onClose,
  onClosed,
  confirmationButtonMessage,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const submit = useCallback(() => {
    if (delaySubmit > 0) setIsLoading(true);
    setTimeout(() => {
      onSubmit();
      setIsLoading(false);
    }, delaySubmit);
  }, [delaySubmit, onSubmit]);
  return (
    <Modal isOpen={open}>
      <Container>
        <ModalTitle>
          <h3>{title}</h3>
        </ModalTitle>
        <ModalMessage>{description}</ModalMessage>

        <ModalFooter>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              onClosed();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={submit}
            isLoading={isLoading}
          >
            {confirmationButtonMessage}
          </Button>
        </ModalFooter>
      </Container>
    </Modal>
  );
};

export default ConfirmationModal;
