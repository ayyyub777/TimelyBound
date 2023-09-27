export function formatDateAgo(date) {
  const currentDate = new Date();
  const timeDifference = currentDate - date;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  if (daysDifference > 0) {
    return `Created ${daysDifference} day${
      daysDifference === 1 ? "" : "s"
    } ago`;
  } else if (hoursDifference > 0) {
    return `Created ${hoursDifference} hour${
      hoursDifference === 1 ? "" : "s"
    } ago`;
  } else if (minutesDifference > 0) {
    return `Created ${minutesDifference} minute${
      minutesDifference === 1 ? "" : "s"
    } ago`;
  } else {
    return `Created ${secondsDifference} second${
      secondsDifference === 1 ? "" : "s"
    } ago`;
  }
}
