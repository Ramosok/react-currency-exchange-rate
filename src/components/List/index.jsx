// libraries
import React, { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// api
import { getCurrency } from 'api/currency';
// styles
import './list.scss';

const List = () => {
    const path = useLocation();
    const isEditPage = path.pathname === '/edit';
    const [items, setItems] = useState([]);
    const [isSending, setIsSending] = useState(false);
    const sliceDateStart = 0;
    const sliceDateEnd = 10;
    const currency = ['USD','EUR'];

    currency.map(elem => elem);
    //const CurAbbreviation = ;

    const fetchCurrency = useCallback(
        async () => {
            try {
                const data = await getCurrency() || [];

                setItems(data);
            } catch (e) {
                console.log(e);
            }
        },
        [isSending],
    );

    useEffect(() => {
        fetchCurrency();
    }, [fetchCurrency, isSending]);

    const removeItem = Cur_ID => {
        setItems(items.filter(item => item.Cur_ID !== Cur_ID));
    };

    return (
        <div className="currencyWrapper">
            <button type="button" onClick={() => setIsSending(!isSending)}>Update the list</button>
            <ol>
                {items.filter(elem =>  elem).map(elem => (
                    <li key={elem.Cur_ID}>
                        <div className="currencyConteiner"><span>{[...elem.Date].slice(sliceDateStart, sliceDateEnd)}</span> <span>{elem.Cur_Abbreviation}</span>
                            <span>{elem.Cur_OfficialRate}</span>
                        </div>
                        <CopyToClipboard
                            text={[[...elem.Date].slice(sliceDateStart, sliceDateEnd).join(''), elem.Cur_Abbreviation, elem.Cur_OfficialRate].join(' ')}
                        >
                            <button type="button">Copy</button>
                        </CopyToClipboard>
                        {isEditPage && <button type="button" onClick={() => removeItem(elem.Cur_ID)}>X</button>}
                    </li>
                ))}
                {isEditPage && <button type="button">Add currency</button>}
            </ol>
            <Link to="/edit">
                {!isEditPage && <button type="button">EDIT</button>}
            </Link>
            <Link to="/">
                {isEditPage &&<button type="button">Save and exit</button>}
            </Link>
        </div>
    );
};


export default List;
