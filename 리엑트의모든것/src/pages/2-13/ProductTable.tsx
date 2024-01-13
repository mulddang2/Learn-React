import { ReactElement, useEffect, useState } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export interface IProduct {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface IProductTableProps {
  filterText: string;
  inStockOnly: boolean;
  products: Array<IProduct>;
}

function ProductTable(props: IProductTableProps) {
  const [rows, setRows] = useState<ReactElement[]>([]);
  const { products, filterText, inStockOnly } = props;

  const getCategory = () => {
    let lastCategory: string | null = null;
    let index = 0
    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={index++}
          />
        );
      }
      rows.push(<ProductRow product={product} key={index++} />);
      lastCategory = product.category;
    });
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

export default ProductTable;
