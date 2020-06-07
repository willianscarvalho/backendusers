function formatDate(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + minutes + ':' + seconds
  }

  const DATE = formatDate(new Date())

  module.exports = DATE
  