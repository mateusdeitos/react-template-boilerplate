/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import Popup, { ConfirmationOptions } from '../components/ConfirmationPopup';

type PromiseType = {
  resolve: () => void;
  reject: () => void;
};

type ConfirmationContextType = (options: ConfirmationOptions) => Promise<void>;

const ConfirmationServiceContext = React.createContext<ConfirmationContextType>(
  Promise.reject,
);

export const useConfirmation = () =>
  React.useContext(ConfirmationServiceContext);

export const ConfirmationServiceProvider: React.FC = ({ children }) => {
  const [confirmationState, setConfirmationState] = React.useState<
    ConfirmationOptions
  >({} as ConfirmationOptions);

  const [open, setOpen] = React.useState<boolean>(false);

  const awaitingPromiseRef = React.useRef<PromiseType>();

  const openConfirmation = ({
    catchOnCancel = true,
    delaySubmit = 0,
    title,
    description,
    confirmationButtonMessage,
  }: ConfirmationOptions) => {
    setConfirmationState({
      catchOnCancel,
      delaySubmit,
      title,
      description,
      confirmationButtonMessage,
    });
    setOpen(true);
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (confirmationState.catchOnCancel && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }

    setOpen(false);
  };

  const handleClosed = () => {
    setConfirmationState({} as ConfirmationOptions);
  };

  return (
    <>
      <ConfirmationServiceContext.Provider
        value={openConfirmation}
        children={children}
      />

      <Popup
        open={open}
        delaySubmit={confirmationState.delaySubmit}
        onSubmit={handleSubmit}
        onClose={handleClose}
        onClosed={handleClosed}
        {...confirmationState}
      />
    </>
  );
};
