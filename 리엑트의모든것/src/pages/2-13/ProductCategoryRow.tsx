export interface IProductCategoryRowProps {
  category: string;
  key: number;
}
function ProductCategoryRow(
  props: IProductCategoryRowProps
): React.ReactElement {
  return (
    <>
      <tr>
        <th colSpan={2}>
          <td key={props.key}>{props.category}</td>
        </th>
      </tr>
    </>
  );
}

export default ProductCategoryRow;
