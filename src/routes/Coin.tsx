import { useParams } from "react-router-dom";

export default function Coin() {
  const { coinId } = useParams<{ coinId: string }>(); //원래는 coinId를 이용하여 api를 한번더 부름!
  console.log(coinId);
  return (
    <div>
      <h1>Coin : {coinId}</h1>
    </div>
  );
}
