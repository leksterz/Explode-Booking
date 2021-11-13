import React, { Component } from "react";

import moment from "moment";
import TimeRange from "react-time-range";

export default class TimeComponent extends Component {
  
  state = {
    startTime: moment().startOf("hour").add(0, "hour"),
    endTime: moment().startOf("hour").add(0, "hour"),
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

        //start and end times responsive to user action
        onStartTimeChange={this.returnFunctionStart}
        onEndTimeChange={this.returnFunctionEnd}

        //Displayed start and end times
        startMoment={this.state.startTime}
        endMoment={this.state.endTime}
        
        
        minuteIncrement={60}
      />

    );
  }
}
  