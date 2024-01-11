import Composite from './pages/2-12/Composite';
import Specialize from './pages/2-12/Specialize';

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
      <Composite />
      <Specialize />
    </>
  );
}

export default BasePage;
