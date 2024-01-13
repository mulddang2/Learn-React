import FilterableProductTable from './pages/2-13/FilterableProductTable';

function BasePage() {
  /* 
  NOTE: 2-5 예제 데이터
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  };
  */
  return (
    <>
      <FilterableProductTable />
    </>
  );
}

export default BasePage;
