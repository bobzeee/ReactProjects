const todos = [
  {
    id: 1,
    name: "Work on Dashboard UI",
    description: "Complete Dashboard UI for Todo Application",
    date: { day: 19, month: "October", year: "2020" },
    startTime: "12:34",
    endTime: "14:44",
    duration: "45 mins",
    agendas: [
      {
        id: 1,
        name: "Complete left Navigation Component",
        duration: 5,
      },
      {
        id: 2,
        name: "Complete Table Component",
        duration: 10,
      },
    ],
  },
  {
    id: 2,
    name: "Work on Mosh's Video",
    description: "Finish chapter 7 of Mosh's React Video",
    date: { day: 23, month: "Feburary", year: "2019" },
    startTime: "11:54",
    endTime: "15:44",
    duration: "2 hrs",
    agendas: [
      {
        id: 3,
        name: "Watch and Chapter 6 & 7 ",
        duration: 15,
      },
      {
        id: 4,
        name: "Practice chapter 6 and 7",
        duration: 20,
      },
    ],
  },
  {
    id: 3,
    name: "Learn Redux",
    description: "Watch and practice Mosh's Course in React Redux",
    date: { day: 12, month: "May", year: "2020" },
    startTime: "00:25",
    endTime: "02:44",
    duration: "1hr 30 mins",
    agendas: [
      {
        id: 5,
        name: "Complete chapter 2&3 of mosh's video",
        duration: 35,
      },
      {
        id: 6,
        name: "Complete chapter 4&5 of mosh's video",
        duration: 60,
      },
      {
        id: 7,
        name: "Complete chapter 6&7 of mosh's video",
        duration: 140,
      },
    ],
  },
];

export default todos;
