const from = "08:00";
const to = "05:00";

const getDedaultWorkingDays = [1, 2, 3, 4, 5].map((number) => ({
  weekday: number,
  from,
  to,
}));

export default {
  id: null,
  name: "",
  timeZone: "",
  workingTime: getDedaultWorkingDays,
  holidays: [
    {
      id: 1,
      name: "Independence Day",
      from: "2021-07-04 00:00",
      to: "2021-07-05 00:00",
    },
    {
      id: 2,
      name: "Another Holiday Day",
      from: "2021-07-06 00:00",
      to: "2021-07-07 00:00",
    },
  ],
};
