import { Skeleton } from "antd";
import Blockies from "react-blockies";
import { useMoralisDapp } from "../providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

function Blockie(props) {
  const { walletAddress } = useMoralisDapp();
  const { isAuthenticated } = useMoralis();
  if (!props.address && (!walletAddress || !isAuthenticated)) return <Skeleton.Avatar active size={40} />;

  return (
    <Blockies seed={props.currentWallet ? walletAddress.toLowerCase() : props.address.toLowerCase()} className="identicon" {...props} />
  );
}

export default Blockie;
