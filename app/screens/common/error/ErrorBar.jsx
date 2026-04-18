import './ErrorBar.css';

export const ErrorBar = ({}) => {
  if (!false) return null;

  return (
      <div className="error-bar">
        <span>Message Error</span>
        <button onClick={() => {}}>✕</button>
      </div>
  );
};