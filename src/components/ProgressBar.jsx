export default function ProgressBar({ raised, goal }) {
    const percent = Math.min((raised / goal) * 100, 100);
  
    return (
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${percent}%` }}></div>
      </div>
    );
  }
  