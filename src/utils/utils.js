let formatting = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const dolarString = (n) => formatting.format(n)