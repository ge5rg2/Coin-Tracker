import { useParams, useLocation } from "react-router";
import { useState } from "react";
import { Title, Loader, Container, Header } from "../styles/CoinsStyle";
import { RouteParms, RouteState } from "../interface/coinInterface";

function Coin() {
  const { state } = useLocation() as RouteState;
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
