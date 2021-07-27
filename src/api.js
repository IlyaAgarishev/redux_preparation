export default [
  {
    id: 1,
    name: "London office",
    timeZone: "London",
    workingTime: [
      {
        weekday: 1,
        from: "08:00",
        to: "12:00",
      },
      {
        weekday: 2,
        from: "12:00",
        to: "10:00",
      },
      {
        weekday: 3,
        from: "09:00",
        to: "09:00",
      },
      {
        weekday: 4,
        from: "09:00",
        to: "09:00",
      },
      {
        weekday: 5,
        from: "09:00",
        to: "09:00",
      },
    ],
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
        from: "2021-07-04 00:00",
        to: "2021-07-05 00:00",
      },
    ],
  },
];
