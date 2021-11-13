import React, { Component } from "react";

import moment from "moment";
import TimeRange from "react-time-range";

console.log(TimeRange);

export default class TimeComponent extends Component {
  state = {
    startTime: moment().startOf("hour").add(14, "hour"),
    endTime: moment().startOf("hour").add(15, "hour"),
  };

  returnFunctionStart = (event) => {
    this.setState({ startTime: event.startTime });
  };

  returnFunctionEnd = (event) => {
    this.setState({ endTime: event.endTime });
  };

  render() {
    return (
      <TimeRange
        onStartTimeChange={this.returnFunctionStart}
        onEndTimeChange={this.returnFunctionEnd}
        startMoment={this.state.startTime}
        endMoment={this.state.endTime}
        minuteIncrement={60}
      />
    );
  }
}
