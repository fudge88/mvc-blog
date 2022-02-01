const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("Do MMM, YYYY HH:mm");
};

const helpers = {
  formatDate,
};

module.exports = {
  formatDate,
};
