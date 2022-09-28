import { stat } from "fs";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;
interface RouteState {
  name: string;
}
interface ITag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

interface infoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: ITag[];
  team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface priceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };
}

export default function Coin() {
  const { coinId } = useParams<{ coinId: string }>(); //원래는 coinId를 이용하여 api를 한번더 부름!
  const [load, setLoad] = useState(true);
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<infoData>();
  const [priceInfo, setPriceInfo] = useState<priceData>();

  const InfoData = async () => {
    const reponseInfo = await (
      await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    ).json();
    setInfo(reponseInfo);

    setLoad(false);
  };
  const PriceData = async () => {
    const reponsePrice = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    ).json();
    setPriceInfo(reponsePrice);

    setLoad(false);
  };

  useEffect(() => {
    InfoData();
    PriceData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state.name}</Title>
      </Header>
      {load ? <Loader>로딩중...</Loader> : <h2>{priceInfo?.quotes.price}</h2>}
    </Container>
  );
}
