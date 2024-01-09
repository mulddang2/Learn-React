import Extraction from './pages/2-5/Extraction';

function BasePage() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  };
  return (
    <>
      <Extraction
        avatarUrl={comment.author.avatarUrl}
        name={comment.author.name}
        date={comment.date}
        text={comment.text}
      />
    </>
  );
}

export default BasePage;
