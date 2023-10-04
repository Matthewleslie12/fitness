// Function to calculate the start date (Sunday) of the current week
export const getStartDate = (date) => {
  const day = date.getDay();
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day);
};

// Function to generate an array of dates for multiple weeks
export const generateWeekDates = (startDate, numWeeks = 1) => {
  const allDates = [];
  for (let week = 0; week < numWeeks; week++) {
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i + 7 * week);
      weekDates.push(currentDate);
    }
    allDates.push(weekDates);
  }
  return allDates;
};

// Function to navigate to the previous week
export const goToPreviousWeek = (currentDate) => {
  const previousWeek = new Date(currentDate);
  previousWeek.setDate(currentDate.getDate() - 7);
  return previousWeek;
};

// Function to navigate to the next week
export const goToNextWeek = (currentDate) => {
  const nextWeek = new Date(currentDate);
  nextWeek.setDate(currentDate.getDate() + 7);
  return nextWeek;
};
