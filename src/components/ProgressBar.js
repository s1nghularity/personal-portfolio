import React, { useEffect, useRef } from 'react';

export const ProgressBar = ({ startAnimation, skillName, startValue, endValue }) => {

  const circularProgressRef = useRef(null);
  const progressValueRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) {
      return;
    }
    const circularProgress = circularProgressRef.current;
    const progressValue = progressValueRef.current;

    let progressStartValue = startValue;
    const speed = 1;

    const progress = setInterval(() => {
      progressStartValue++;
      progressValue.textContent = `${progressStartValue}%`;
      
      circularProgress.style.background = `conic-gradient(#246a45 ${progressStartValue * 3.6}deg, #a7ffc4 0deg)`;

      if (progressStartValue === endValue) {
        clearInterval(progress);
      }
    }, speed);
    console.log('progress: ', progress)
    

    return () => clearInterval(progress);
  }, [startAnimation, startValue, endValue]);

  return (

    <div className="progress-container">
      
      <div className="circular-progress" ref={circularProgressRef}>
        <span className="progress-value" ref={progressValueRef}>{startValue}%</span>
      </div>
      
      <div className="text">{skillName}</div>
    
    </div>
  );
};
