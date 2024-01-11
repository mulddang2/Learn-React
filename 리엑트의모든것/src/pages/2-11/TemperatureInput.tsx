interface Props {
  scale: string;
  temperature: number;
  onTemperatureChange: (arg1: string, arg2: number) => void;
}
function TemperatureInput(props: Props): React.ReactElement {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onTemperatureChange(props.scale, Number(e.target.value));
  };
  return (
    <fieldset>
      <legend>
        Enter temperature in {props.scale === 'c' ? 'Celsius' : 'Fahrenheit'}:
      </legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
