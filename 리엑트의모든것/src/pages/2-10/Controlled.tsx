import { useState } from 'react';

function Controlled(): React.ReactElement {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState('');
  const [flavor, setFlavor] = useState('');
  const flavorOption = [
    { key: 0, value: 'grapefruit' },
    { key: 1, value: 'lime' },
    { key: 2, value: 'coconut' },
    { key: 3, value: 'mango' },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(`name: ${name} / essay: ${essay} / flavor: ${flavor}`);
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent) => {
    // NOTE: 타입으로 다중제어 하기
    if (event.target instanceof HTMLInputElement) {
      setName(event.target.value);
    } else if (event.target instanceof HTMLTextAreaElement) {
      setEssay(event.target.value);
    } else if (event.target instanceof HTMLSelectElement) {
      setFlavor(event.target.value);
    }
  };

  // const handleChangeEssay = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setEssay(event.target.value);
  // };

  // const handleChangeFlavor = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFlavor(event.target.value);
  // };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <label>
        Essay:
        <textarea value={essay} onChange={handleChange} />
      </label>
      <label>
        Pick your favorite flavor:
        <select value={flavor} onChange={handleChange}>
          {flavorOption.map((option) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default Controlled;
