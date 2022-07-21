import axios from "axios";
import { toast } from "react-toastify";
import notify from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(Response => {
            toast.info("Mensagem enviada com sucesso. Confira sua caixa de SMS!");
        });
};

function NotificationButton({ saleId }: Props) {


    return (
        <div className="red-btn" onClick={() => handleClick(saleId)}>
            <img src={notify} alt="Notificar" />
        </div>

    )
}

export default NotificationButton;
