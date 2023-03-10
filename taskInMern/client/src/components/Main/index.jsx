import styles from "./styles.module.css";
import Index from "../Display/index.jsx";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Eunimart!</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Index/>
		</div>
	);
};

export default Main;