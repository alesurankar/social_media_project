"use client";

import { ReactNode } from "react";


type BaseModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title?: string;
  onConfirm?: () => void;
  closeText?: string;
  confirmText?: string;
  children?: ReactNode;
};

const BaseModal = ({
    modalVisible,
    setModalVisible,
    title = "Default Modal",
    onConfirm,
    closeText = "Close",
    confirmText = "Confirm",
    children,
}: BaseModalProps) => {
  if (!modalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md relative">
        <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
        
        {/* dynamic content */}
        <div className="mb-4">{children}</div>

        <div className="flex justify-between">
          <button
            className="flex-1 mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={() => setModalVisible(false)}
          >{closeText}
          </button>

          {onConfirm && (
            <button
              className="flex-1 ml-2 px-4 py-2 text-white rounded hover:bg-gray-700"
              onClick={onConfirm}
            >{confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BaseModal;