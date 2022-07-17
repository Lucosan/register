import notify from "../../assets/img/notification-icon.svg";
import "./styles.css";

function NotificationButton() {

    return (
        <div className="red-btn">
            <img src={notify} alt="Notificar" />
        </div>

    )
}

export default NotificationButton;
