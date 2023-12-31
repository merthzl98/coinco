const numberWithCommas = (price: number) => {
  return price
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const UtilsService = { numberWithCommas };

export default UtilsService;
