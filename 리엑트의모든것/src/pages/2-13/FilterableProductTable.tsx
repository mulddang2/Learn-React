import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function FilterableProductTable(): React.ReactElement {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (filterText: string) => {
    setFilterText(filterText);
  };
  const handleInStockChange = (inStockOnly: boolean) => {
    setInStockOnly(!inStockOnly);
  };
  const PRODUCTS = [
    {
      category: 'Sporting Goods',
      price: '$49.99',
      stocked: true,
      name: 'Football',
    },
    {
      category: 'Sporting Goods',
      price: '$9.99',
      stocked: true,
      name: 'Baseball',
    },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball',
    },
    {
      category: 'Electronics',
      price: '$99.99',
      stocked: true,
      name: 'iPod Touch',
    },
    {
      category: 'Electronics',
      price: '$399.99',
      stocked: false,
      name: 'iPhone 5',
    },
    {
      category: 'Electronics',
      price: '$199.99',
      stocked: true,
      name: 'Nexus 7',
    },
  ];
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={PRODUCTS}
      />
    </>
  );
}

export default FilterableProductTable;
