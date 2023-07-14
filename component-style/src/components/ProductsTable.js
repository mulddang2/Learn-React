import React from "react";
import styled from "styled-components"
// import * as Style from "./ProductsTable.style"

export default function ProductsTable(props) {
  const { category, items, inStockOnly } = props;
  const filteredItems = inStockOnly
    ? items.filter((item) => item.stocked)
    : items;

  return (
    <>
      <tr>
        <Category>{category}</Category>
      </tr>
      {filteredItems.map((item, idx) => (
        <tr key={idx}>
          <ProductName stocked={item.stocked}>{item.name}</ProductName>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}

const Category = styled.td`
font-weight: bold;
`;

const ProductName = styled.td`
color: ${props => props.stocked ? "black" : "red"}`