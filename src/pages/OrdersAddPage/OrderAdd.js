import SuccessSend from "./../../components/SuccessSend/Successend";
import "./style.css";
import { useEffect, useState, useRef} from 'react';


const OrderAdd = () => {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState('');
    const handleButtonClick = () => {
        inputRef.current.click();
    };

    const [category, setCategory] = useState('---');
    const [size, setSize] = useState('4x4');
    const [material, setMaterial] = useState('фанера');
    const [quantity, setQuantity] = useState(1);
    const [cost, setCost] = useState(0);
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [bracing, setBracing] = useState('---');
    const [photo, setPhoto] = useState();
    const [isSending, setIsSending] = useState(false);
    const [telNum, setTelNum] = useState ('');
    const [showSuccess, setShowSuccess] = useState(false);

    //конверсия png потому что отправляется только jpg
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file.name);

        if (!file) return;
        
        if (file.type === 'image/png') {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

           
            canvas.toBlob(
                (blob) => {
                    const jpgFile = new File([blob], file.name.replace(/\.[^/.]+$/, ".jpg"), { type: 'image/jpeg' });
                    setPhoto(jpgFile);
                },
                'image/jpeg',
                0.92 
            );
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
        } else {
            setPhoto(file);
        }
    };


    useEffect(() => {
    let basePrice = 0;
   
    switch (category) {
      case 'значок':
        basePrice = 110;
        break;
      case 'визитка':
        basePrice = 50;
        break;
      case 'карта':
        basePrice = 150;
        break;
      case 'брелок':
        basePrice = 110;
        break;
      case 'магнит':
        basePrice = 150;
        break;
      case 'тетрадь':
        basePrice = 500;
        break;
      case 'пресс':
        basePrice = 1000;   
        break;
      default:
        basePrice = 0;
    }
    if(category === 'значок' || category === 'брелок' || category === 'магнит') {
        if (size === '5x5') basePrice *= 1.2;
        else if (size === '6x6') basePrice *= 1.5;
            else if (size === '7x7' && category === 'магнит') basePrice *=1.6;
    }
    
    if(category === 'визитка' || category === "карта") {setSize('---'); setMaterial('металл');}
    if(size === '---' && category !== 'визитка' && category !== "карта") {setSize('4x4')}

    if(category !== 'значок') setBracing('---');
    else if(bracing !== 'Пин') setBracing('Булавка');

    if(category === 'тетрадь') {
        setSize('21x29см');
    }
    if((category !== 'тетрадь' && size ==='21x29см') || (category !== 'пресс' && size === '30x40см') || (category !== 'магнит' && size === '7x7')) {
        setSize('4x4');
    }
    if(category === 'пресс') {
        setMaterial('фанера');
        setSize('30x40см');
    }


    //Исключение не подходящих материалов, егор я твой рот ебала делай таблицы понятнее
    if((category === 'магнит' && material === 'орг.стекло') || ((category === 'магнит' || category ==='тетрадь' || category ==='значок') && material === 'металл')) {
        setMaterial('фанера');
    }

    if (material === 'орг.стекло' && category !=='магнит' && category !=='тетрадь' && category !=='пресс') basePrice += 50;
    else if (material === 'пластик' && category !=='тетрадь' && category !=='пресс') basePrice += 100;
        else if (material === 'металл' && category === 'брелок' ) basePrice += 50;

    if (category === 'значок' && bracing === 'Пин') basePrice += 20;

    //цена за тетрадь
    if (category === 'тетрадь' && material ==='орг.стекло') basePrice = 700;
    else if (category === 'тетрадь' && material ==='пластик') basePrice = 1000;

    // Итоговая цена за заказ
    const totalPrice = Math.round(basePrice * quantity);


    setCost(totalPrice);
    }, [category, size, material, bracing, quantity]);


    const handleSubmit = async  (e) => {
        e.preventDefault();

        const formData = new FormData();
            formData.append('category', category);
            formData.append('size', size);
            formData.append('material', material);
            formData.append('quantity', quantity);
            formData.append('cost', cost);
            formData.append('additionalInfo', additionalInfo);
            formData.append('telNum', telNum);

        if (photo) {
            formData.append('photo', photo);
        }
        
        //в реальной эксплуатируемой версии сайта используется fetch с обращением к php на сервере 
        const fakeResponse = new Response(JSON.stringify({ status: 'success', message: 'Сообщение успешно отправлено' }), {
        headers: { 'Content-Type': 'application/json' }
        });

        setIsSending(true);
        try {
        
            const response = await Promise.resolve(fakeResponse);
            const result = await response.json();
            if (result.status === 'success') {
    
                setShowSuccess(true); 
                setCategory('---');
                setSize('4x4');
                setMaterial('фанера');
                setQuantity(1);
                setCost(0);
                setAdditionalInfo('');
                setBracing('---');
                setPhoto(null);
                setTelNum('');
            } else {
                alert('Ошибка при отправке заказа');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        } finally { 
            setIsSending(false);
        }

        
        const orderData = { id: Date.now(), date:(new Date()).toISOString().split('T')[0], category, size, material, quantity, totalCost: cost, additionalInfo, telNum };
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        existingOrders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(existingOrders));
    };

    const handleCloseSuccess = () => {
            setShowSuccess(false);
        };
    if (showSuccess) {
        return <SuccessSend onClose={handleCloseSuccess} />;
    }

    return (
        <div className="all"> 
        <div className="ramka">
            <div className="head">
                <h1>
                    {isSending ? 'Отправка...' : 'ЗАПОЛНИТЕ ФОРМУ'}
                </h1>
                <span className="span">
                    После отправки формы, я свяжусь с вами в течении дня для подтверждения заказа, выбора способа доставки и оплаты.
                    Если в категориях самого популярного желаемого изделия не нашлось, вы можете описать что хотите в разделе "дополнительно".
                </span>
            </div>
                <form className="order" id="form" onSubmit={handleSubmit} method="POST">
                <div className="forminf">
                    <div className="cht chtup">
                    <div className="details cont">
                        < div className="listlab">
                        <label>
                            Изделие:  
                           <select className="type" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="undef" >требует уточнения</option>
                                <option value="значок" >Значок</option>
                                <option value="брелок">Брелок</option>
                                <option value="карта">Карта-стенд</option>
                                <option value="магнит">Магнит</option>
                                <option value="тетрадь">Тетрадь на кольцах</option>
                                <option value="пресс">Пресс для гербария</option>
                                <option value="визитка">Металлическая визитка</option>
                            </select>
                        </label>
                        <label className="font-bold">
                            Размер:
                           <select value={size} onChange={(e) => setSize(e.target.value)}>
                                <option value="4x4">4x4см</option>
                                <option value="5x5">5x5см</option>
                                <option value="6x6">6x6см</option>
                                <option value="7x7">7x7см</option>
                                <option value="21x29см">21x29см</option>
                                <option value="30x40см">30x40см</option>
                                <option value="---">---</option>
                            </select>
                        </label>
                        <label>
                            Материал:
                            <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                                <option value="фанера">фанера</option>
                                <option value="орг.стекло">орг.стекло</option>
                                <option value="пластик">пластик</option>
                                <option value="металл">металл</option>
                            </select>
                        </label>
                        {category === 'значок' && (
                            <label>
                            Крепление:
                            <select value={bracing} onChange={(e) => setBracing(e.target.value)}>
                                <option value="Булавка">Булавка</option>
                                <option value="Пин">Пин</option>
                                <option value="---">---</option>
                            </select>
                            </label>
                        )}
                        <label >
                            Количество:
                            <input className="quan" type="number" name="num" min={1} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required></input>
                        </label>
                        </div>
                    </div>
                        <button className="load" id="load" type="button" onClick={handleButtonClick}>
                            Загрузить фотографию
                            {fileName && (
                            <p style={{ marginTop: '10px' }}>Выбран файл: {fileName}</p>
                        )}
                        </button>
                        <input ref={inputRef} type="file" accept="image/jpeg, image/png" style={{ display: 'none' }} onChange={handleFileChange}/>
                        
                    </div>
                    <div className="cht">
                    <div className="details cont cont2"> 
                        <label className="contact">
                            Ваш телефон или никнейм:
                            <input type="TelNum" name="TelNum" id="TelNum" placeholder="" required onChange={(e) => setTelNum(e.target.value)} />
                        </label>

                        <span className="sum">(Способ и стоимость доставки уточняется при подтверждении)</span>
                        <p className="cost">Ориентировочная стоимость:  {cost}  ₽</p> 
                        
                    </div>
                     <textarea className="vvod" id="discription" name="dis" onChange={(e) => setAdditionalInfo(e.target.value)}
                        rows={4}
                        cols={50}
                        placeholder="Здесь введите дополнительное описание идеи, рекомендуется так же прикрепить фото или чертёж для гравировки, а так же указать удобный для вас мессенджер.">  
                    </textarea>
                    </div>
                </div>
                    <button type="submit" id="button" className="addbtn">Заказать</button>
                </form>
        </div>
        </div>
    );
}
 
export default OrderAdd;