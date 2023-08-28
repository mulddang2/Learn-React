import './App.css';
import { useEffect, useState } from 'react';


// NOTE: hook 주의점 1. hook은 최상위에서 호출되어야한다.
// NOTE: hook 주의점 2. 오직 React 함수에서만 hook을 호출해야한다.

// NOTE: useEffect : 생명주기와 관련된 훅
/**
 * mount (= 리엑트 컴포넌트가 그려질 때, 렌더될 때)
 * unmount (= 리엑트 컴포넌트가 사라질 때, 지워질 때 ) 
 * update (= 특정 값이 변해서 리엑트 컴포넌트가 다시 그려질 때 )
 * 
 * 
 *
 * */
function App() {
  const [count, setCount] = useState(0)
  // update 되는 상황에서 훅을 업데이트

  // NOTE: 특정 시점에 무언가 다른 행위를 하고 싶으면 useEffect 훅을 쓸 수 있다.
  useEffect(() => {
    if(count === 5){
      console.log("이건 5 예요")
    } //두번째 인자로 count를 넣었다는 의미는, count가 변화될 때마다 이 함수를 체크 해주세요
  }, [count])
  
  return (
    <div className='App'>
      <span>{count}</span>
      <button onClick={()=> setCount(count + 1)}>+</button>      
    </div>
  );
}

export default App;
