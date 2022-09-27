import CircleandSqure from "./CircleandSqure";
import StateRecap from "./StateRecap";

export default function AppRecap() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <CircleandSqure borderR="100px" backcolor="green" />
        <CircleandSqure backcolor="yellow" />
        <CircleandSqure borderR="50px" backcolor="blue" />
      </div>
      <div>
        <StateRecap />
      </div>
    </div>
  );
}
