"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Button from "../../../../packages/components/Button"
import Modal from "../../../../packages/components/Modal"
import AuthForm from "../../../../packages/components/AuthForm"

interface BodyFrameProps {
  className?: string;
}

const BodyFrame: React.FC<BodyFrameProps> = ({ className }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const openModal = (type: string) => {
    setSelectedType(type);
    setShow(true);
  };

  return (
    <div className={`bg-gray-800 text-white p-4 ${className ?? ''}`}>
      <div className="text-4xl font-bold text-center my-20">
        <p className="text-red-500">React Frontend</p>
        <br /><br /><br />
        <p>BodyFrame</p>
        <p>BodyFrame</p>
        <p>BodyFrame</p>
        <p>BodyFrame</p>
        <Button
          title='Open Modal'
          mainClassName='bg-[#7c2923] hover:bg-[#d5453a]'
          titleClassName='text-3xl text-white font-bold uppercase'
          onClick={() => { openModal("planet"); setShow(true); }}
        />
        
      {/* Modal */}
      {show && selectedType &&(
        <Modal onClose={() => setShow(false)} maxWidth="max-w-3xl">
            <AuthForm onSuccess={() => setShow(false)}/>
        </Modal>
      )}
      </div>
    </div>
  );
};

export default BodyFrame;
