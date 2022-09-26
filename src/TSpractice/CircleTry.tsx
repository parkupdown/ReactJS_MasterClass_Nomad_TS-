import styled, { keyframes } from "styled-components";

interface AppProps {
  Back: string;
  borderR?: string;
  text?: string;
  AniSec?: string;
}
interface CircleProps {
  backgroundcolor: string;
  borderR: string;
  text: string;
  AniSec: string;
}
const ani = keyframes`
0%{
transform: rotate(0deg);
}
50%{
transform: rotate(360deg);
}
100%{
    transform: rotate(0deg);
}
`;
const ani2 = keyframes`
0%{
background-color: white;
}
50%{
background-color: black
}
100%{
    background-color: white;
}
`;

const TryBox = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 5px;
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.borderR};
`;
const TryBox2 = styled(TryBox)<CircleProps>``;

export default function CircleTry({ Back, borderR, text, AniSec }: AppProps) {
  return (
    <div>
      <TryBox
        AniSec={AniSec ?? "0s"}
        text={text ?? ""}
        borderR={borderR ?? "0px"}
        backgroundcolor={Back}
      >
        {text}
      </TryBox>
      <TryBox2
        AniSec={AniSec ?? "0s"}
        text={text ?? ""}
        borderR={borderR ?? "0px"}
        backgroundcolor={Back}
      >
        {text}
      </TryBox2>
    </div>
  );
}

/*
interface Appshape {
  backcolor: string;
  bordercolor?: string;
  text?: string;
}
interface Circleshape {
  Back: string;
  borderColor: string;
  text: string;
}

const Circle = styled.div<Circleshape>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${(props) => props.Back};
  border: 10px solid ${(props) => props.borderColor};
`;

export default function CircleTry({ backcolor, bordercolor, text }: Appshape) {
  return (
    <div>
      <Circle
        text={text ?? ""}
        borderColor={bordercolor ?? backcolor}
        Back={backcolor}
      >
        {text}
      </Circle>
    </div>
  );
}*/
