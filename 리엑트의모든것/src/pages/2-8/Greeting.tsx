interface Types {
  name?: string;
  count?: number;
}

function UserGreeting(props: Types) {
  console.log(props.count);
  return (
    <h1>
      {props.name && props.name + ','} Welcome{' '}
      {!!props.count && `It's ${props.count} times`}
    </h1>
  );
}

function GuestGreeting(props: Types) {
  return <h1>Please Sign Up.</h1>;
}

function Greeting(): React.ReactElement {
  const isLoggedIn = true;

  return <>{isLoggedIn ? <UserGreeting name={''} count={2} /> : null}</>;
}

export default Greeting;
