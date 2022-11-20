import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>McDonald's</h1>
				<HeaderCardButton />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt="A table full of delicious meals!" />
			</div>
		</Fragment>
	);
};

export default Header;
