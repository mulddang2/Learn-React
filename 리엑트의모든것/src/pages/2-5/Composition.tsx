interface Types {
  name: string
}

function Composition (props: Types): React.ReactElement {
  return (
    <>
      Hello, {props.name}<br />
    </>
  )
}

export default Composition