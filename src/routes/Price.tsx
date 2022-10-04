import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import styled, { keyframes } from "styled-components";
interface CoinId {
  coinId: string;
}
interface HistoricalData {
  close: number;
  high: number;
  low: number;
  market_cap: number;
  open: number;
  time_close: number;
  time_open: number;
}
const CoinList = styled.ul``;

const Coin = styled.li`
  font-size: 12px;
  margin-top: 20px;
  font-weight: 300;
`;

const animation2 = keyframes`
  0%{
opacity: 0;
  }
  50%{
opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Red = styled.span`
  animation: ${animation2} 1s ease-in-out infinite;
  color: yellowgreen;
`;

const Blue = styled.span`
  animation: ${animation2} 1s ease-in-out infinite;
  color: yellow;
`;

function Price({ coinId }: CoinId) {
  const { isLoading, data } = useQuery<HistoricalData[]>("CoinId", () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      {isLoading ? (
        "loading.."
      ) : (
        <CoinList>
          {data?.map((item) => (
            <Coin key={item.open}>
              Day : {new Date(item.time_open * 1000).toUTCString()}
              최고가 : <Red>{item.high} $</Red> 최저가:{" "}
              <Blue>{item.low} $</Blue>
            </Coin>
          ))}
        </CoinList>
      )}
    </div>
  );
}

export default Price;
