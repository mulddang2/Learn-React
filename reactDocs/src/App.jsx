import './App.css';
const person = {
  name: '스펀지Bob',
  theme: {
    backgroundColor: 'skyblue',
    color: 'magenta'
  }

}
function TodoList() {
  return (
    <section style={person.theme}>
      {/* NOTE: 홀따옴표(&apos;)를  엔티티로 안하면 오류가 난다. */}
      <h1>{person.name}&apos;s Todos</h1>
      <img src='https://mblogthumb-phinf.pstatic.net/MjAyMDA3MDdfMTcx/MDAxNTk0MDc1MjA4MTk2.Aekb3OsqyiALI0sM19gUybs0yezPZjNU1hqCGN50oXUg.JW3mTukm7Yn5MBXIUJMXvMMjfmu0iGjQqDeHXwEkGCUg.GIF.car5464/IMG_0226.GIF?type=w800' alt='스펀지밥' className="photo"/>
      <ul>
        <li>끝내주게 숨쉬기</li>
        <li>간지나게 자기</li>
        <li>작살나게 밥먹기</li>
      </ul>
    </section>
  );
}

export default TodoList;
