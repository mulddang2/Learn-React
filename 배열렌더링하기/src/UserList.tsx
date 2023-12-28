// map을 돌릴 때는 key 값이 있어야 한다. 매개변수로 받아야한다.

// NOTE: map 돌릴 때 key 값이 필요한 이유? 
// key 값이 없다면, 배열에서 값을 추가하고 삭제할 때, 수정이 필요없는 것들이 변하는데, key값이 있으면, 수정이 필요없는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제한다.

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'sujebi',
      email: 'js4072751@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
