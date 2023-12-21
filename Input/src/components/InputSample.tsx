import { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs; // 객체 구조분해로 값 추출

  const onChange = (e) => {
    const { name, value } = e.target; // e,target에서 name, nickname 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 후, --> 복사하는 이유? 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 이에 따라 필요한 리렌더링 진행하려고

      [name]: value, // name 키를 가진 값을 target value로 변경
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input name='name' placeholder='이름' onChange={onChange} value={name} />
      <input
        name='nickname'
        placeholder='닉네임'
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>

      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
