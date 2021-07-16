// libraries 
import React, { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// api 
import { getCurrency } from 'api/currency';
// styles 
import './list.scss';

const mappedCurrency = {
    USD: 'USD',
    EUR: 'EUR'
};

const List = () => {
    const path = useLocation();
    const isEditPage = path.pathname === '/edit';
    const [items, setItems] = useState([]);
    const [isSending, setIsSending] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const sliceDateStart = 0;
    const sliceDateEnd = 10;

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
        localStorage.getItem('inputValue', mappedCurrency);
        console.log(mappedCurrency);
        fetchCurrency();
    }, [fetchCurrency, isSending, mappedCurrency]);

    const removeItem = Cur_ID => {
        setItems(items.filter(item => item.Cur_ID !== Cur_ID));
    };

    return (
        <div className="currencyWrapper">
            <button type="button" className="butUpdate" onClick={() => setIsSending(!isSending)}>Update the list</button>
            <ol>
                {items.filter(elem => elem.Cur_Abbreviation === mappedCurrency[elem.Cur_Abbreviation])
                    .map(elem => (
                        <li key={elem.Cur_ID}>
                            <div className="currencyConteiner">
                                <span className="dataStyle">{[...elem.Date].slice(sliceDateStart, sliceDateEnd)}</span>
                                <span className="abbreviationStyle">{elem.Cur_Abbreviation}</span>
                                <span className="officialRateStyle">{elem.Cur_OfficialRate}</span>
                            </div>
                            <CopyToClipboard
                                text={[[...elem.Date].slice(sliceDateStart, sliceDateEnd).join(''), elem.Cur_Abbreviation, elem.Cur_OfficialRate].join(' ')}
                            >
                                <button type="button" className="butCopy itemButtonStyle">Copy</button>
                            </CopyToClipboard>
                            {isEditPage && <button type="button" className="butDel itemButtonStyle" onClick={() => removeItem(elem.Cur_ID)}>X</button>}
                        </li>
                    ))}
                {isEditPage && (<input
                    list="browsers"
                    name="browser"
                    id="browser"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                                />)}
                <datalist id="browsers" >
                    {items.map(elem => (
                        <option
                            key={elem.Cur_ID}
                            value={elem.Cur_Abbreviation}
                        >
                        </option>
                    ))};
                </datalist>
                {isEditPage && <button type="button" className="butUpdate" onClick={() => mappedCurrency[inputValue] = inputValue}>Add currency</button>}
            </ol>
            <Link to="/edit">
                {!isEditPage && <button className="butUpdate" type="button">EDIT</button>}
            </Link>
            <Link to="/">
                {isEditPage &&(<button
                    className="butUpdate"
                    type="button"
                    onClick={() => localStorage.setItem('inputValue', mappedCurrency)}
                >Save and exit
                </button>)}
            </Link>
        </div>
    );
};


export default List;