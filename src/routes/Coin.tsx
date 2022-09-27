import { useParams } from "react-router-dom";

export default function Coin() {
  const { coinId, idid } = useParams<{ coinId: string; idid: string }>();
  console.log(coinId);
  console.log(idid);
  return (
    <div>
      <h1>Coin</h1>
    </div>
  );
}
