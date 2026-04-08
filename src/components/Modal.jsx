import { useEffect } from 'react';

const Modal = ({ 
  children, 
  isOpen, 
  onClose, 
  title,
  size = 'md',
  showCloseButton = true,
  closeOnBackdrop = true,
}) => {
  
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose?.();
    }
  };
  if (!isOpen) return null;
  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className={` relative bg-white rounded-2xl shadow-xl w-[90%] ${sizes[size]} max-h-[85vh] overflow-y-auto
      animate-in zoom-in-95 duration-300
      `}>
        {showCloseButton && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full 
                       text-gray-400 hover:text-gray-600 
                       hover:bg-gray-100 active:bg-gray-200
                       transition-all duration-200 z-10"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}

        {title && (
          <div className="border-b border-gray-100 px-6 pt-6 pb-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
        )}

        <div className={title ? 'p-6' : 'p-6'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;