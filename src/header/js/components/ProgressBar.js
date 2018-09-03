import React from 'react';
import PropTypes from 'prop-types';
import '../../css/progress-bar.scss';
import ProgressBarStep from './ProgressBarStep';
import messages from '../../properties/messages.json';

const ProgressBar = ({ assetsPath, steps }) => {
  function getMarkup() {
    return steps.map((step, index) => {
      const lineClass = `checkout-progress-bar-line checkout-progress-${step.state.toLowerCase()
      } checkout-qa-progress-line`;
      const bar = (index > 0) ? <div className={lineClass} /> : null;
      return (
        <React.Fragment>
          {bar}
          <ProgressBarStep
            assetsPath={assetsPath}
            stepNumber={index + 1}
            stepState={step.state}
            stepText={messages[step.labelKey]}
            stepUrl={step.linkUrl}
            stepName={step.labelKey}
          />
        </React.Fragment>
      );
    });
  }

  return (
    <div className="checkout-progress-bar">
      {getMarkup()}
    </div>
  );
};

ProgressBar.propTypes = {
  assetsPath: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default ProgressBar;
