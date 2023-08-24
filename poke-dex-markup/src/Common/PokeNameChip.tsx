import styled from '@emotion/styled';

interface PokeNameChipProps {
  name: string;
  id: number;
}

const PokeNameChip = (props: PokeNameChipProps) => {
  // NOTE: 숫자가 넘어왔을 때, 세자리수로 맞춰서 넘겨주도록 변경
  const renderNumber = (id: number) => {
    // 1. 전체단위가 3자리
    const digits = 3;
    // 2. 자릿수 계산을 위해 스트링으로 변경
    const numberString = id.toString();

    if (numberString.length >= digits) {
      // 3. 세자리수 보다 크면 그냥 리턴
      return numberString;
    }
    // 4. 아닐 때는, for문 돌면서 0 추가해주기
    let result = ''
    for(let i = 0; i < digits - numberString.length; i++) {
      // 0을 채워준다
      result += '0'
    }
    return `${result}${numberString}`
  };
  return (
    <Chip>
      <NumberText>
        <Number>{renderNumber(props.id)}</Number>
      </NumberText>
      <Title>{props.name}</Title>
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

const Number = styled.div`
  padding: 4px 6px;
  background-color: ${(props) => props.color};
  opacity: 0.8;
  border-radius: 16px;
`;

const NumberText = styled.label`
  opacity: 1;
`;

const Title = styled.h4`
  margin: 0 8px 0 6px;
`;

export default PokeNameChip;
