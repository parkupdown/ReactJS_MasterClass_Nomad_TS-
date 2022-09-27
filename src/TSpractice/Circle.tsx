import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgCC: string;
  borderColor: string;
}
interface CircleProps {
  bgc: string;
  borderColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgCC};
  border-radius: 100px;
  border: 5px solid ${(props) => props.borderColor};
`;

export default function Circle({ bgc, borderColor }: CircleProps) {
  const [counter, setCounter] = useState<number | string>(1); //초기값에따라 TS는 변수의 타입을 결정함
  setCounter("hello"); //이를 방지하기 위해 <number|string>이라고 선언해줄수있다.
  return (
    <div>
      <Container borderColor={borderColor ?? bgc} bgCC={bgc} />
    </div>
  );
}
// App에서 넘어온 props를 다시 Container props에 저장하고 이를 Circle에서 사용한다.
