import { useState, useRef, useMemo } from "react";
import { Span, MD, SM } from "@zendeskgarden/react-typography";

import "./SelectWorkingDays.scss";

const initialState = [
  { short: "Sun", full: "Sunday", active: false, id: 0 },
  { short: "Mon", full: "Monday", active: true, id: 1 },
  { short: "Tue", full: "Tuesday", active: true, id: 2 },
  { short: "Wed", full: "Wednesday", active: true, id: 3 },
  { short: "Thu", full: "Thursday", active: true, id: 4 },
  { short: "Fri", full: "Friday", active: true, id: 5 },
  { short: "Sat", full: "Saturday", active: false, id: 6 },
];

const SelectWorkingDays = () => {
  const [days, setDays] = useState(initialState);

  const activeDaysCount = useMemo(() => {
    let count = 0;
    days.forEach(({ active }) => active && count++);

    return count;
  }, [days]);

  return (
    <div className="select-working-days">
      <Span isBold>Select the working days</Span>
      <div className="select-working-days_list">
        {days.map(({ short, full, active }, index) => {
          return (
            <div
              className={`select-working-days_day ${
                active ? "select-working-days_day__active" : ""
              }`}
              key={short}
              onClick={() => {
                const newArr = days;
                newArr[index] = { short, full, active: !active };
                setDays([...newArr]);
              }}
            >
              <MD> {short}</MD>
            </div>
          );
        })}
        <div className="select-working-days_count">
          <SM color="grey">
            <Span hue="grey">({activeDaysCount} days selected)</Span>
          </SM>
        </div>
      </div>
    </div>
  );
};

export default SelectWorkingDays;
