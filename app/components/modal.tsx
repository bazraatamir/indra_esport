import {FC} from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className='fixed inset-0 bg-black bg-opacity-50 z-50'
        onClick={onClose}
      />
      <div className='fixed inset-0 flex justify-center items-center z-50'>
        <div className='bg-white rounded-lg shadow-lg p-6 max-w-sm w-full'>
          <button
            className='absolute top-2 right-2 text-[#fff] font-[24px]'
            onClick={onClose}>
            &times;
          </button>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
