import "./style.css";
import { useState } from 'react'; 

const SuccessSend = ({ onClose }) => {
    const [visible, setVisible] = useState(true);  

    const removeElement = () => {  
        setVisible(false);
        if (onClose) {
            onClose();
        }
    };

    return ( 
        <div className="suc">
            <div className="message">
                <h1>Заказ успешно отправлен!</h1>
                {visible && (  
                    <button className="close" onClick={removeElement}>X</button>  
                )}
            </div>
        </div>

     );
}
 
export default SuccessSend;