import { useRef, useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };
  return (
    <>
      <div>
        <input
          name='name'
          type='text'
          onChange={onChange}
          value={inputs.name}
          placeholder='이름'
          ref={nameInput}
        />
        <input
          name='nickname'
          type='text'
          onChange={onChange}
          value={inputs.nickname}
          placeholder='닉네임'
        />
        <button onClick={onReset}>초기화</button>
      </div>
      <div>
        <b>값: </b>
        {inputs.name} ({inputs.nickname})
      </div>
    </>
  );
}

export default InputSample;
