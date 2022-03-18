import { Menu } from "antd";
import { useLocation, NavLink } from "react-router-dom";

function MenuItems() {
	const { pathname } = useLocation();

	return (
		<Menu
			theme="light"
			mode="horizontal"
			style={{
				display: "flex",
				fontSize: "17px",
				fontWeight: "500",
				width: "100%",
				justifyContent: "center",
			}}
			defaultSelectedKeys={[pathname]}>
			<Menu.Item key="/home">
				<NavLink to="/home">🚀 Home</NavLink>
			</Menu.Item>
			<Menu.Item key="/nftMarket">
				<NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
			</Menu.Item>
			<Menu.Item key="/nft">
				<NavLink to="/nftBalance">🖼 NFTs</NavLink>
			</Menu.Item>
			<Menu.Item key="/erc20balance">
				<NavLink to="/erc20balance">💰 Balances</NavLink>
			</Menu.Item>
			<Menu.Item key="/erc20transfers">
				<NavLink to="/erc20transfers">💸 Transfers</NavLink>
			</Menu.Item>
			<Menu.Item key="/transactions">
				<NavLink to="/transactions">📑 Your Transactions</NavLink>
			</Menu.Item>
		</Menu>
	);
}

export default MenuItems;