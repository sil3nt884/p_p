import React, { FormEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  comment: string;
  setComment: (comment: string) => void;
  submittedComment: string;
  isEditMode: boolean;
  onClose: () => void;
  onSubmit: (newComment: string) => void;
  onEdit: () => void;
}

const Modal: React.FC<ModalProps> = ({
                                       isOpen,
                                       comment,
                                       setComment,
                                       submittedComment,
                                       isEditMode,
                                       onClose,
                                       onSubmit,
                                       onEdit
                                     }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(comment);
    setComment('');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      {isEditMode && (
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 text-gray-700 border rounded-md focus:outline-none focus:shadow-outline"
            rows={3}
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-4 py-2 bg-blue-500 text-white text-lg font-medium rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}

      {!isEditMode && submittedComment && (
        <div className="mt-4 p-4 border-t">
          <p className="text-gray-600">Submitted Comment:</p>
          <p className="text-gray-800">{submittedComment}</p>
          <button
            onClick={onEdit}
            className="mt-3 px-4 py-2 bg-green-500 text-white text-lg font-medium rounded hover:bg-green-700"
          >
            Edit
          </button>
        </div>
      )}

      <button
        onClick={onClose}
        className="absolute top-0 right-0 mt-2 mr-2 text-lg font-bold text-gray-700"
      >
        ×
      </button>
    </div>
  );
};

export default Modal;
