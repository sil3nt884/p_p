import React, { useState } from "react";
import Modal from './Modal'; // Import your Modal component

interface LiStateProps {
  className: string;
  text: string;
  index: number;
}

export const LiState: React.FC<LiStateProps> = ({ className, text, index }) => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [comment, setComment] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');
  const [isEditMode, setIsEditMode] = useState(true);

  const toggleModal = () => {
    setModelOpen(!modelOpen);
  };

  const handleSubmitComment = (newComment: string) => {
    setSubmittedComment(newComment);
    setIsEditMode(false);
  };

  const handleEditComment = () => {
    setIsEditMode(true);
  };

  const modalHeight = 200; // Replace with the actual height of your modal
  const modalTopOffset = 50; // Offset between modals
  const modalTopPosition = index * (modalHeight + modalTopOffset);

  // Update class name based on whether a comment has been submitted
  const liClassName = submittedComment ? "bg-[#F07F08] hover:underline" : `${className} hover:underline`;

  return (
    <>
      <li onClick={toggleModal} className={liClassName}>
        {text}
      </li>
      {modelOpen && (
        <div style={{ position: 'absolute', top: `${modalTopPosition}px`, right: 0, zIndex: 1000 }}>
          <Modal
            isOpen={modelOpen}
            comment={comment}
            setComment={setComment}
            submittedComment={submittedComment}
            isEditMode={isEditMode}
            onClose={toggleModal}
            onSubmit={handleSubmitComment}
            onEdit={handleEditComment}
          />
        </div>
      )}
    </>
  );
};

export default LiState;
