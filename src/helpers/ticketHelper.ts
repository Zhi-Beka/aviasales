export const getTime = (dateTime: string, minTime: number): string => {
  const hour = new Date(dateTime).getHours();
  const min = new Date(dateTime).getMinutes();
  const arriveHour = new Date(new Date(dateTime).getHours() + Math.floor(minTime / 60)).getHours();
  const arriveMin = new Date(new Date(dateTime).setMinutes(new Date(dateTime).getMinutes() + minTime)).getMinutes();

  const time = hour < 10 ? `0${hour}` : hour;
  const minute = min < 10 ? `0${min}` : min;
  const timeArr = arriveHour < 10 ? `0${arriveHour}` : arriveHour;
  const minuteArr = arriveMin < 10 ? `0${arriveMin}` : arriveMin;

  return `${time}:${minute} - ${timeArr}:${minuteArr}`;
};

export const showTransfers = (len: number): string => {
  if (len < 1) {
    return 'без пересадок';
  } else if (len === 1) {
    return `${len}пересадка`;
  } else {
    return `${len} пересадки`;
  }
};

export const showTime = (duration: number): string => {
  const hour = Math.trunc(duration / 60);
  const min = Math.trunc(duration % 60);
  return `${hour}ч ${min}м`;
};
