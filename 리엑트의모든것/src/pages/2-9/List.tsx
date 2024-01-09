interface IItemType {
  id: number;
  text: string;
}

function List(): React.ReactElement {
  // const numbers = [1, 2, 3, 4, 5];

  const List = [
    { id: 0, text: 'Hello world' },
    { id: 1, text: 'Hello react' },
    { id: 2, text: 'Hello JS' },
  ];

  const ListItem = (props: IItemType) => {
    return (
      <li>
        {props.id} {props.text}
      </li>
    );
  };
  return (
    <>
      {List.map((item: IItemType) => (
        <ListItem key={item.id} {...item} />
      ))}
    </>
  );
}

export default List;
