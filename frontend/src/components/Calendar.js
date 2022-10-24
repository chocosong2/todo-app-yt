import Year from "react-live-clock";
import Month from "react-live-clock";

import React, {
    Component,
    useState,
    useEffect,
    useMemo,
    useCallback,
  } from "react";
  
  const Calendar = () => {
    return   <div className="Year-Month">
    <p style={{textAlign:'center'}}>
      <span className="Year">
        <Year
          id="Year"
          format={"YYYY"}
          ticking={false}
          timezone={"KR/Pacific"}
        />
      </span>
      &nbsp;&nbsp;
      <span className="Month">
        <Month format={"MMM"} ticking={false} timezone={"KR/Pacific"}/>
      </span>
    </p>
  </div>
  };
  
  export default Calendar;