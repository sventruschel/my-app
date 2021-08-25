import "./Modal.css";

type modalProps = {
  title: string;
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
};

const Modal = ({ onClose, children, title, show }: modalProps) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button className="button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
