import CircleTry from "./CircleTry";

export default function Apptry() {
  return (
    <div>
      <CircleTry AniSec="2s" text="One" Back="teal" />
      <CircleTry AniSec="1s" text="Two" borderR="50px" Back="tomato" />
      <CircleTry text="Three" borderR="15px" Back="brown" />
    </div>
  );
}

/*export default function Apptry() {
  return (
    <div>
      <CircleTry text="Hello" backcolor="green" />
      <CircleTry text="Wow!" backcolor="yellow" />
      <CircleTry text="Yes!" bordercolor="red" backcolor="blue" />
    </div>
  );
}*/
