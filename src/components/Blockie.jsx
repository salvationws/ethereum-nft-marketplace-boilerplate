import { Skeleton } from "antd";
import Blockies from "react-blockies";
import { useMoralisDapp } from "../providers/MoralisDappProvider/MoralisDappProvider";

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

function Blockie(props) {
  const { walletAddress, isAuthenticated } = useMoralisDapp();
  if (!props.address && !account) return <Skeleton.Avatar active size={40} />;

  return (
    <Blockies seed={props.currentWallet ? account.toLowerCase() : props.address.toLowerCase()} className="identicon" {...props} />
  );
}

export default Blockie;
