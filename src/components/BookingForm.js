import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

export default function BookingForm() {
  //availability data model
  const availability = [{ gianni: { 0: 1 } }, { jc: { 0: 1 } }];

  //request data model

  // pass engineers into the dropdown
  // first regular data, then with props

  // date declared with useState and
  // DatePicker is npm installed. Specify params:
  // min-date, max date and onChange = setDate from state
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container">
      <div className="title">
        <h1>Explode Bookings</h1>
        <h3>fill out the form and we will be in touch</h3>
        <p>start by select the engineer and the date</p>
        <p>if no start hour is unavailable, choose another day</p>
      </div>
      <form className="selection">
        <label> engineer</label>
        <select name="engineer" id="engineer">
          <option value="pricey">pricey</option>
          <option value="gianni">gianni</option>
        </select>
        <br />
        <DatePicker
          selected={startDate}
          minDate={new Date()}
          maxDate={addDays(new Date(), 10)}
          onChange={(date) => setStartDate(date)}
        />

        <br />
        <label> start time statttt</label>
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
