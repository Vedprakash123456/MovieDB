import { useEffect,useState } from "react";

import { api } from "../api";

export function useCrud(joinpath) {
    const[apivalue,setApi] = useState([]);

    var apiPath = `${api}${joinpath}`;
    
    useEffect(()=>{

        (async()=>{
            // console.log(apiPath);
            var res = await fetch(apiPath);
            // console.log(res);
            var ans_api_value = await res.json();
            // console.log(ans_api_value);
            setApi(ans_api_value);

        })();

    } , [apiPath]);

    return apivalue;
}

