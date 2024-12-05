export const formatingHourDate = (date: string | number | Date) => {
  const createdDate = new Date(date);
  const hours = createdDate.getHours();
  const minutes = createdDate.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const formatingDate = (date: string | number | Date) => {
  const createdDate = new Date(date);
  const today = new Date();

  const isToday =
    createdDate.getDate() === today.getDate() &&
    createdDate.getMonth() === today.getMonth() &&
    createdDate.getFullYear() === today.getFullYear();

  const hourFormated = formatingHourDate(date);

  if (isToday) {
    return `Hoje às ${hourFormated}`;
  } else {
    return `${createdDate.getDate()}/${
      createdDate.getMonth() + 1
    }/${createdDate.getFullYear()} 
      `;
  }
};
