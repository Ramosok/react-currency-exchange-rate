// libraries
import React, { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
// api
import { getPosts } from 'api/posts';
// styles
import './list.css';

const List = () => {
    const [items, setItems] = useState([]);
    const [isSending, setIsSending] = useState(false);


    const fetchPosts = useCallback(
        async () => {
            try {
                const data = await getPosts() || [];

                setItems(data);
            } catch (e) {
                console.log(e);
            }
        },
        [isSending],
    );

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts, isSending]);

    const removeItem = Cur_ID => {
        setItems(items.filter(item => item.Cur_ID !== Cur_ID));
    };

    return (
        <div>
            <button type="button" onClick={() => setIsSending(!isSending)}>Update the list</button>
            <ol>
                {items.filter(item => item.Cur_Scale === 1).map(item => (
                    <li key={item.Cur_ID}>
                        <div><span>{[...item.Date].slice(0, 10)}</span> <span>{item.Cur_Abbreviation}</span>
                            <span>{item.Cur_OfficialRate}</span>
                        </div>
                        <CopyToClipboard
                            text={[[...item.Date].slice(0, 10).join(''), item.Cur_Abbreviation, item.Cur_OfficialRate].join(' ')}
                        >
                            <button type="button">Copy</button>
                        </CopyToClipboard>
                        {/* <button type="button" onClick={() => removeItem(item.Cur_ID)}>Del</button>*/}
                    </li>
                ))}
            </ol>
            <Link to={"/edit"}>
                <button type="button">EDIT</button>
            </Link>
        </div>
    );
};


export default List;
