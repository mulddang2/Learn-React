interface ISearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (arg1: string) => void;
  onInStockChange: (arg1: boolean) => void;
}

function SearchBar(props: ISearchBarProps): React.ReactElement {
  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onInStockChange(Boolean(e.target.value));
  };
  return (
    <form>
      <input
        type='text'
        placeholder='Search...'
        value={props.filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type='checkbox'
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
