function formatUSD(value: number) {
  const floatValue = Math.floor(value / 100);

  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(floatValue);
}

export default formatUSD;
