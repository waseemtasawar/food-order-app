const currencyFormater = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default currencyFormater;
