import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.bgcolor};
  align-items: center;
  justify-content: center;
`;

const Header = styled.div``;

const Coins = styled.ul`
  width: 50vw;
`;

const Coin = styled.li`
  margin-top: 10px;
  background-color: white;
  color: ${(props) => props.theme.accentColor};
  padding: 20px 20px;
  border-radius: 20px;
  text-align: center;
  font-size: 48px;
  transition: color 0.2s ease-in;
  &:hover {
    color: lightsalmon;
  }
`;

export default function Home() {
  const coins = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "hex-hex",
      name: "HEX",
      symbol: "HEX",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];

  return (
    <Box>
      <Header></Header>
      <Coins>
        {coins.map((item) => (
          <Link to={`/${item.id}`}>
            <Coin key={item.id}>{item.symbol}</Coin>
          </Link>
        ))}
      </Coins>
    </Box>
  );
}
