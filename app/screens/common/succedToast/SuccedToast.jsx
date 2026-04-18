import './SuccedToast.css';

export const SuccedToast = ({ mensaje, onHandleHideToast }) => {

  return (
      <div className="error-bar">
        <span>{mensaje}</span>
        <button onClick={onHandleHideToast}>✕</button>
      </div>
  );
};