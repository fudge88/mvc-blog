const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("Do MMM, YYYY HH:mm");
};

const helpers = {
  formatDate,
};

module.exports = {
  getPayloadWithValidFieldsOnly,
  helpers,
};
