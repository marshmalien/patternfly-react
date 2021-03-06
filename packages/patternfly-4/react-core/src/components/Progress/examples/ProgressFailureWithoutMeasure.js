import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class ProgressFailureWithoutMeasure extends React.Component {
  static title = 'Progress Failure Without Measure';

  render() {
    return (
      <Progress
        value={33}
        title="Descriptive text here"
        measureLocation={ProgressMeasureLocation.none}
        variant={ProgressVariant.danger}
      />
    );
  }
}

export default ProgressFailureWithoutMeasure;
