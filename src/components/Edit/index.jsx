// libraries
import React, { useCallback, useEffect, useState } from 'react';


// api
import { getPosts } from 'api/posts';
// styles


const Edit = () => {
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
            <button type="button">Add Currency</button>
            <ol>
                {items.filter(item => item.Cur_Scale === 1).map(item => (
                    <li key={item.Cur_ID}>
                        <div><span>{[...item.Date].slice(0, 10)}</span> <span>{item.Cur_Abbreviation}</span>
                            <span>{item.Cur_OfficialRate}</span>
                        </div>

                        <button type="button" onClick={() => removeItem(item.Cur_ID)}>Del</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};


export default Edit;
