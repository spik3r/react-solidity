import React from 'react';
import PropTypes from 'prop-types';
import '../../css/progress-bar-step.scss';

const ProgressBarStep = ({
  assetsPath, stepNumber, stepState, stepText, stepUrl, stepName,
}) => {
  const StateEnum = {
    CURRENT: 'checkout-progress-current',
    COMPLETED: 'checkout-progress-completed',
    UNCOMPLETED: 'checkout-progress-uncompleted',
  };

  function stepClassName() {
    return `checkout-progress-step ${StateEnum[stepState]}`;
  }

  function stepTextClassName() {
    return `checkout-progress-bar-step-text ${StateEnum[stepState]}`;
  }

  function getStepUrl() {
    if (stepState !== 'COMPLETED') {
      return '#';
    }
    return stepUrl;
  }

  function getContent() {
    if (stepState === 'COMPLETED') {
      return (
        <a href={getStepUrl()} className={`checkout-progress-content checkout-qa-step-${stepName}`}>
          <img alt="&#10004;" className="checkout-progress-bar-checkmark" src={`${assetsPath}/header/img/tick.svg`} />
        </a>
      );
    }
    return (
      <span className="checkout-progress-content">
        {stepNumber}
      </span>
    );
  }

  return (
    <div className="checkout-progress-bar-step-container">
      <div className={stepClassName()}>
        {getContent()}
      </div>
      <span className={stepTextClassName()}>
        {stepText}
      </span>
    </div>
  );
};

ProgressBarStep.propTypes = {
  assetsPath: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired,
  stepState: PropTypes.string.isRequired,
  stepText: PropTypes.string.isRequired,
  stepUrl: PropTypes.string.isRequired,
  stepName: PropTypes.string.isRequired,
};
export default ProgressBarStep;
