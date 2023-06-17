import { useParams, Navigate } from "react-router-dom";
import style from "./Admin.module.scss";

export default function Admin() {
	const params = useParams();
	if (params.user !== "aluroni") {
		return <Navigate to="/" />;
	}
	return (
		<div className={style.container}>
			<h1 className={style.title}>!!ADMIN PAGE!!</h1>
		</div>
	);
}
