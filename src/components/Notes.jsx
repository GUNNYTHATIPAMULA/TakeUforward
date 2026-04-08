import { useState, useEffect } from "react";
import Modal from "./Modal";

const Notes = ({ selectedDate }) => {
  const [note, setNote] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const key = `note-${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`;
  useEffect(() => {
    const saved = localStorage.getItem(key);
    setNote(saved || "");
  }, [selectedDate, key]);
  const saveNote = () => {
    localStorage.setItem(key, note);
    setIsOpen(false);
    setIsEditing(false);
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsEditing(false);
    if (!localStorage.getItem(key)) {
      setNote("");
    }
  };
  const openEditModal = () => {
    setIsEditing(true);
    setIsOpen(true);
  };

  const openCreateModal = () => {
    setIsEditing(true);
    setNote("");
    setIsOpen(true);
  };

  const hasNote = note && note.trim() !== "";
  return (
    <div className="w-full md:w-1/3">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xs text-gray-500 font-medium">
          Notes for {selectedDate.toDateString()}
        </p>
        {hasNote && (
          <button
            onClick={openEditModal}
            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
          >
            Edit
          </button>
        )}
      </div>

      {hasNote ? (
        <div
          onClick={openEditModal}
          className="border border-gray-200 rounded-lg p-3 min-h-[120px] cursor-pointer 
                     bg-white hover:shadow-sm transition-all duration-200 overflow-y-auto"
        >
          <p className="text-gray-700 text-sm whitespace-pre-wrap">{note}</p>
        </div>
      ) : (
        <div
          onClick={openCreateModal}
          className="border-2 border-dashed border-gray-300 rounded-lg p-3 h-[120px] cursor-pointer 
                     text-sm bg-gray-50 hover:bg-gray-100 hover:border-gray-400 
                     transition-all duration-200 flex items-center justify-center"
        >
          <p className="text-gray-400 text-center">
            Click to add a note for {selectedDate.toDateString()}
          </p>
        </div>
      )}

      <Modal 
        isOpen={isOpen} 
        onClose={handleClose}
        title={hasNote ? `Edit Note for ${selectedDate.toDateString()}` : `Add Note for ${selectedDate.toDateString()}`}
        size="md"
      >
        <div className="space-y-4">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your note here..."
            className="w-full border border-gray-300 rounded-lg p-3 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent resize-none"
            rows="6"
            autoFocus
          />
          
          <div className="flex gap-3 justify-end">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg 
                         hover:bg-gray-200 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={saveNote}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                         hover:bg-blue-700 transition-all duration-200
                         focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {hasNote ? "Update Note" : "Save Note"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Notes;