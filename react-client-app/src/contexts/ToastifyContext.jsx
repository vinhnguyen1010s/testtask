import { createContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const ToastifyContext = createContext();

export const ToastifyProvider = ({ children }) => {
  const messageNotify = (type, message) => {
    const time = { autoClose: 2000 };
    const position = { position: toast.POSITION.BOTTOM_RIGHT };

    switch (type) {
      case 'success':
        return toast.success(message, position, time);

      case 'error':
        return toast.error(message, position, time);

      case 'info':
        return toast.info(message, position, time);

      case 'warning':
        return toast.warning(message, position, time);

      default:
        return;
    }
  };

  const messageNotifyData = { messageNotify };
  return <ToastifyContext.Provider value={messageNotifyData}>{children}</ToastifyContext.Provider>;
};
