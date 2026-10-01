export const formatPrice = (price) => {
  return `£${price.toFixed(2)}`;
};

export const formatCurrency = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format(price);
};
