import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs";

export const useFecthGifs = (category) =>{

    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{

        getGifts(category).then(imgs =>{
            setstate({
                data: imgs,
                loading:false
            });
        });

    },[category]);

    return state; //{data:[], loading: true};
}