const getAPRAndIRR = jsonData => {
  const apr = getAPR(jsonData);
  const irr = getIRR(jsonData);

  return { apr, irr };
};

/**
 * @param jsonData
 * Calculate APR
 */
const getAPR = data => {
  const {
          schedule,
          principal,
          upfrontFee: { value }
        } = data;

  const sumOfInstallment = getTotalInstallmentFee(schedule);

  return ((value + sumOfInstallment) / principal) * 100;
};

/**
 * @param jsonData
 * Calculate IRR
 */
const getIRR = data => {
  const {
    schedule,
    principal,
    upfrontFee: { value }
  } = data;

  const sumOfInstallment = getTotalInstallmentFee(schedule);

  return sumOfInstallment / (principal + value);
};

/**
 * @param data
 * Calculate all installation fee paid
 */
const getTotalInstallmentFee = data => {
  let sumOfInstallment = 0;

  data.forEach(
    item =>
      (sumOfInstallment = sumOfInstallment + item.interestFee)
  );

  return sumOfInstallment;
};

module.exports = {
  getAPRAndIRR
};
