import { useMemo, useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function counterActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');

  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'dodo1',
      email: 'dodo1@gamil.com',
      active: true,
    },
    {
      id: 2,
      username: 'dodo2',
      email: 'dodo2@gamil.com',
      active: false,
    },
    {
      id: 3,
      username: 'dodo3',
      email: 'dodo3@gamil.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id == id ? { ...user, active: !user.active } : user
      )
    );
  };

  /*
  NOTE: 
  1. useMemo 왜 사용? ==> 필요한 값 이외 input의 내용을 바꿀 때도 리렌더링 되어, 성능최적화 하려고 사용함 
  2. useMemo(함수 , [렌더링 필요한 배열])
  : 렌더링 필요한 배열 안에 내용이 바뀌면, 함수를 호출해서 값을 연산해주고, 내용이 바뀌지 않았다면, 이전에 연산한 값을 사용한다
  */
  const count = useMemo(()=>counterActiveUsers(users), [users])

  return (
    <>
      <CreateUser username={username} email={email} onCreate={onCreate} onChange={onChange} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default App;
