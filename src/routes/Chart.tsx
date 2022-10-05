import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
interface ChartProps {
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
  isDark: boolean;
}

function Chart({ coinId }: ChartProps) {
  //원래는 props하고받지만 {이렇게 받으면 직접사용}
  //props로 받아옴 coinId를 ! 그리고 coinId에 대한 설명을 써줌
  console.log(coinId);

  const { isLoading, data } = useQuery<HistoricalData[]>("ohlcv", () =>
    fetchCoinHistory(coinId)
  );
  //{}이걸넣으면 API받아오지못한다.
  console.log(data);

  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            { name: "hello", data: data?.map((item) => item.close) ?? [] },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
