import React from "react";

export default function BookingForm() {
  //availability data model
  const availability = [{ gianni: { 0: 1 } }, { jc: { 0: 1 } }];

  //request data model

  return (
    <div className="container">
      <div className="title">
        <h1>Explode Booking</h1>
        <h4>select the engineer and desired time</h4>
      </div>
      <form className="selection">
        <label> engineer</label>
        <select name="engineer" id="engineer"></select>
        <br />
        <label> date</label>
        <input type="date" name="date" id="date"></input>
        <br />
        <label> start time</label>
        <input type="time" name="start" id="start"></input>
        <br />
        <label> number of hours</label>
        <select name="hours" id="hours"></select>
        <br />
        <br />
        <button>submit your request</button>
      </form>
    </div>
  );
}
