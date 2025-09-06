function formatDate(input: string): string {
  const date = new Date(input);

  const year = date.getFullYear().toString().slice(-2); // "25"
  const month = String(date.getMonth() + 1).padStart(2, "0"); // "09"
  const day = String(date.getDate()).padStart(2, "0"); // "06"

  const hours = String(date.getHours()).padStart(2, "0"); // "16"
  const minutes = String(date.getMinutes()).padStart(2, "0"); // "08"

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}

export { formatDate };
