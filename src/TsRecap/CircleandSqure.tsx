import styled from "styled-components";

interface AppProps {
  backcolor: string;
  borderR?: string;
}

interface CircleandSqureProps {
  backcolor: string;
  borderR: string;
}

const Box = styled.div<CircleandSqureProps>`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backcolor};
  font-size: 20px;
  color: red;
  margin-bottom: 15px;
  border-radius: ${(props) => props.borderR};
`;

export default function CircleandSqure({ backcolor, borderR }: AppProps) {
  return (
    <div>
      <Box borderR={borderR ?? "0px"} backcolor={backcolor}>
        123
      </Box>
    </div>
  );
}
