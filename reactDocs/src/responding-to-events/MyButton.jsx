import { useState } from "react"

export default function MyButton() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>나는 너가 {count}번 클릭했다는 걸 알고 있다</button>
  )
}
