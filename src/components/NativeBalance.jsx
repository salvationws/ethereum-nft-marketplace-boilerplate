import { useNativeBalance } from "react-moralis";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { wallet, isAuthenticated } = useMoralisDapp();

  if (!wallet || !isAuthenticated) return null;

  return <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>{balance.formatted}</div>;
}

export default NativeBalance;
