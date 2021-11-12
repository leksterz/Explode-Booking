import React from "react";

export default function BookingForm() {
  //availability data model
  const availability = [{ gianni: { 0: 1 } }, { jc: { 0: 1 } }];

  //request data model

  return (
    <div className="container">
      <div className="title">
        <h1>Explode Bookings</h1>
        <h3>fill out the form and we will be in touch</h3>
        <h4>start by select the engineer and the date</h4>
        <h4>if no start hour is unavailable, choose another day</h4>
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
