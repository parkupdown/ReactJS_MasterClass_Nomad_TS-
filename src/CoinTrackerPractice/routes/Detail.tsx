import { useParams } from "react-router-dom";

export default function Detail() {
  const { coinId } = useParams<{ coinId: string }>();
  console.log(coinId);
  return (
    <div>
      <h1>{coinId}</h1>
    </div>
  );
}
