import { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('user 값이 설정됨')
    return () => {
      console.log('user 바뀌기 전')
      // NOTE: useEffect 안에서 사용하는 상태, props 가 있다면 deps에 넣어주는 것이 규칙이다. 최신 상태를 유지하기 위해
      console.log(user)

    }
    // NOTE: 두번째 파라미터를 생략하면, 컴포넌트가 리렌더링 될 때마다 호출됨
  })


  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default UserList;
