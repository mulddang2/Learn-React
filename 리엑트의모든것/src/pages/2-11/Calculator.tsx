import { useEffect, useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

function Calculator(): React.ReactElement {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [temp, setTemp] = useState({ temperature: 0, scale: '' });

  const toCelsius = (fahrenheit: number) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const toFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
  };

  // 온도를 변환
  const tryConvert = (temp: number) => {
    const rounded = Math.round(temp * 1000) / 1000;
    return rounded;
  };

  // 값이 바뀔 때 마다
  const handleChangeTemp = (scale: string, temp: number) => {
    setTemp({ temperature: temp, scale: scale });
  };

  // temp 변할 때마다
  useEffect(() => {
    if (temp.scale === 'c') {
      setCelsius(temp.temperature);
      setFahrenheit(toFahrenheit(tryConvert(temp.temperature)));
    } else {
      setFahrenheit(temp.temperature);
      setCelsius(toCelsius(tryConvert(temp.temperature)));
    }
  }, [temp]);
  return (
    <div>
      <TemperatureInput
        scale='c'
        temperature={celsius}
        onTemperatureChange={handleChangeTemp}
      />
      <TemperatureInput
        scale='f'
        temperature={fahrenheit}
        onTemperatureChange={handleChangeTemp}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
}

export default Calculator;
