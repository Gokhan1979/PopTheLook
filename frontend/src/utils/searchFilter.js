// Reusable filter for your search pill
export const filterProducts = (products, query) => {
  if (!query) return products;
  const q = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q)
  );
};

export const filterByCategory = (products, cat) => {
  if (cat === 'All') return products;
  return products.filter(p => p.cat === cat);
};
