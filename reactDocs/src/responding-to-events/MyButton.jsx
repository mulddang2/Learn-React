
// eslint-disable-next-line react/prop-types
export default function MyButton({count, onClick}) {

  

  return (
    <button onClick={onClick}>나는 너가 {count}번 클릭했다는 걸 알고 있다</button>
  )
}
