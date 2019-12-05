import React from "react";

export default function Checkboxes() {
  return (
    <div className="input-group">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="filter-status"
          name="status"
          value="VALIDATED"
        />
        <label className="form-check-label" htmlFor="status">
          Validated
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="filter-status"
          name="status"
          value="IN DELIVERY"
        />
        <label className="form-check-label" htmlFor="status">
          In delivery
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="filter-status"
          name="status"
          value="DELIVERED"
        />
        <label className="form-check-label" htmlFor="status">
          Delivered
        </label>
      </div>
    </div>
  );
}