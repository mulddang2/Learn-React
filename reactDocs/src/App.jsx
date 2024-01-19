// 이렇게 만들면 안순수하다. 변수의 값이 예측불가 하기 때문에,,
/* 이렇게 하면 안된다..
let guest = 0;

function Cup() {
  // 전역에 냅둔 기존 변수를 변경합니다.
  guest += 1;
  return <h2>손님이 시킨 음료 갯수: #{guest}</h2>
}

export default function CupSet() {
  console.log(guest)
  return (
    <>
      <Cup />{console.log(guest)}
      <Cup />{console.log(guest)}
      <Cup />{console.log(guest)}
      <Cup />{console.log(guest)}
      <Cup />{console.log(guest)}
    </>
  )
}
*/

function Cup({guest}) {
  return <h2>손님이 시킨 음료 갯수: #{guest}</h2>
}

export default function CupSet() {
  return (
    <>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
    </>
  )
}