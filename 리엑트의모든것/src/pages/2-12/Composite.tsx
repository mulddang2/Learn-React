interface ICompositeProps {
  children: React.ReactNode;
  color: string;
}

function FancyBorder(props: ICompositeProps) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Composite(): React.ReactElement {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>Welcome!</h1>
      <p className='Dialog-message'>Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

export default Composite;
