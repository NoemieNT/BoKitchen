import React from "react";
import moment from "moment";

const formatDate = ({ date, rule = "HH:mm" }) => (
  <span className="date">
    {moment(date)
      .add(30, "minutes")
      .format(rule)}
  </span>
);
export default formatDate;
