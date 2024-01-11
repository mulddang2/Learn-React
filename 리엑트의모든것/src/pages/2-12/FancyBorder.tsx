interface ICompositeProps {
  children: React.ReactNode;
  color: string;
}

function FancyBorder(props: ICompositeProps): React.ReactElement {
  return (
    <header className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </header>
  );
}

export default FancyBorder;
