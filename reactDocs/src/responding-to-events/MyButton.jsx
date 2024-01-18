export default function MyButton() {
  const handleClick = () => {
    alert('너가 클릭했지!!')
  }

  return (
    <button onClick={handleClick}>click me</button>
  )
}
