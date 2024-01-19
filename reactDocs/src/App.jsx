/* eslint-disable react/prop-types */

function Item({ name, isPacked}) {
  return (
    <li className="item">{name} {isPacked && '✅'}</li>
  )
}
export default function PackingList() {
  return (
    <section>
      <h1>여행 짐싸기</h1>
      <ul>
        <Item name='칫솔 & 치약' isPacked={true}/>
        <Item name='폼클렌저' isPacked={true}/>
        <Item name='수딩크림' isPacked={false}/>
      </ul>
    </section>
  );
}
