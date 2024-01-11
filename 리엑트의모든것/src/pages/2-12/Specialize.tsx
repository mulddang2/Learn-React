import FancyBorder from "./FancyBorder";

interface ISpecializeProps {
  title: string;
  message: string;
}

function Dialog(props: ISpecializeProps) {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>{props.title}</h1>
      <p className='Dialog-message'>{props.message}</p>
    </FancyBorder>
  );
}

function Specialize(): React.ReactElement {
  return (
    <Dialog title='Welcome' message='Thank you for visiting our spacecraft!' />
  );
}

export default Specialize;
