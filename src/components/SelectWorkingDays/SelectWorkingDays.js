import { useState, useRef, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Span, MD, SM } from "@zendeskgarden/react-typography";
import { createNewBusinessHours } from "../../redux/features/businessHours";
import initialBusinessHours from "./initialBusinessHours";

import "./SelectWorkingDays.scss";

const daysToMap = [
  { short: "Sun", full: "Sunday", active: false, id: 0 },
  { short: "Mon", full: "Monday", active: false, id: 1 },
  { short: "Tue", full: "Tuesday", active: false, id: 2 },
  { short: "Wed", full: "Wednesday", active: false, id: 3 },
  { short: "Thu", full: "Thursday", active: false, id: 4 },
  { short: "Fri", full: "Friday", active: false, id: 5 },
  { short: "Sat", full: "Saturday", active: false, id: 6 },
];

const SelectWorkingDays = () => {
  const idsOfActiveDays = useMemo(
    () => initialBusinessHours.workingTime.map(({ weekday }) => weekday),
    [initialBusinessHours.workingTime]
  );

  const rebuildDaysToMap = useMemo(() => {
    return daysToMap.map((el) => {
      const elementIsActive = idsOfActiveDays.some(
        (number) => number === el.id
      );

      return { ...el, active: elementIsActive };
    });
  }, [initialBusinessHours.workingTime]);

  const [days, setDays] = useState(rebuildDaysToMap);

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
      <button>create</button>
    </div>
  );
};

export default SelectWorkingDays;
