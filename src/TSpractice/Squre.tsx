import styled from "styled-components";

interface SqureProps {
  bgc: string;
}
//이렇게 props에 대한 설명을하면 required (필수)가 된다.
interface TestProps {
  backColor: string;
}

const Box = styled.div<SqureProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgc};
  border-radius: 30px;
`;
export default function Squre({ backColor }: TestProps) {
  return (
    <div>
      <Box bgc={backColor} />
      <h1 style={{ color: backColor }}>하하하</h1>
    </div>
  );
}
