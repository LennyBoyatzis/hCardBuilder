const CHANGE = 'CHANGE';

const change = (field, val) => {
  return {
    type: CHANGE,
    payload: {
      field,
      val,
    }
  };
};

module.exports = {
  change: change,
  CHANGE: CHANGE,
};
