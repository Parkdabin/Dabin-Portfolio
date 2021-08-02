import axios from 'axios';
import { useEffect, useState } from 'react';

function useGet(url){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(url).then(res =>{
            setData(res.data);
        }).catch(e => {
            console.log(e);
        })
    },[url]);
    return data; 
}
export default useGet;