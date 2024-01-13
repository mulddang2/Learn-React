import { IProduct } from './ProductTable';

interface IProductRow {
  product: IProduct;
  key: number;
}
function ProductRow(props: IProductRow): React.ReactElement {
  const name = props.product.stocked ? (
    props.product.name
  ) : (
    <span style={{ color: 'red' }}>{props.product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

export default ProductRow;
