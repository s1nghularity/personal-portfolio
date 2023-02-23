import React, { useEffect, useRef } from 'react';

export const ProgressBar = ({ skillName, startValue, endValue }) => {

  const circularProgressRef = useRef(null);
  const progressValueRef = useRef(null);

  useEffect(() => {
    const circularProgress = circularProgressRef.current;
    const progressValue = progressValueRef.current;

    let progressStartValue = startValue;
    const speed = 10;

    const progress = setInterval(() => {
      progressStartValue++;
      progressValue.textContent = `${progressStartValue}%`;
      
      circularProgress.style.background = `conic-gradient(#ff781d ${progressStartValue * 3.6}deg,  #ea5253 1.8deg, #c6c7ce 0deg)`;

      if (progressStartValue === endValue) {
        clearInterval(progress);
      }
    }, speed);

    return () => clearInterval(progress);
  }, [startValue, endValue]);

  return (
    <div className="progress-container">
      
      <div className="circular-progress" ref={circularProgressRef}>
        <span className="progress-value" ref={progressValueRef}>{startValue}%</span>
      </div>
      
      <span className="text">{skillName}</span>
    
    </div>
  );
};
