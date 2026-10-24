// problem - 3 : Time Conversion

var timeConversion = function (s) {
  const period = s.slice(-2);
  const rest = s.slice(2, -2);
  let hour = parseInt(s.slice(0, 2), 10);

  if (period === "AM") {
    if (hour === 12) hour = 0;
  } else {
    if (hour !== 12) hour += 12;
  }

  return String(hour).padStart(2, "0") + rest;
};
