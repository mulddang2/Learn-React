import styled from '@emotion/styled';

interface PokeNameChipProps {
  name: string;
  id: number;
}

const PokeNameChip = (props: PokeNameChipProps) => {
  const renderNumber = (id:number) => {
    //NOTE: 세자리수까지 처리
    const digits = 3;
    //NOTE: id를 문자열로 담고, 
    const numberString = id.toString();

    //NOTE: 3자리보다 길면 그냥 리턴
    if(numberString.length >= digits) {
      return numberString;
    }

    let result = '';

    //NOTE: 만약에 id가 한자리면, length가 1이니까,, 3-1해서, for문 2번 돌며 0 붙여준다.
    for(let i = 0; i < digits - numberString.length; i++) {
      result += '0';
    }
    return `${result}${numberString}`
  }

  return (
    <Chip>
      <NumberChip>
        <Number>{renderNumber(props.id)}</Number>
      </NumberChip>
      <Text>{props.name}</Text>
    </Chip>
  );
};

const Chip = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #c0c0c0;
  border-radius: 16px;

  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;

const NumberChip = styled.div`
  padding: 4px 6px;
  background-color: green;
  border-radius: 16px;
  opacity: 0.8;
`;

const Number = styled.label`
  opacity: 1;
`;

const Text = styled.label`
  margin: 0 8px 0 5px;
`;

export default PokeNameChip;
