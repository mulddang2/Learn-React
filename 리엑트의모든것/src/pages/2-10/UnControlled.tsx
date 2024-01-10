import { useRef } from 'react';
// NOTE: useRef로 생성한 데이터는 리렌더링 여부와 상관없이 같은 값이 유지된다.
function UnControlled(): React.ReactElement {
  const fileInputRef = useRef(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    alert(`selected file: ${fileInputRef.current.files[0].name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type='file' ref={fileInputRef} />
      </label>
      <br />
    </form>
  );
}

export default UnControlled;
