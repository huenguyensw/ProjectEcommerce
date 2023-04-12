import React, {useState,useEffect} from 'react'

const usefetchAllRecords = (URL) => {
    const [data, setData] = useState([])
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = () =>{
        console.log(URL)
        fetch(URL)
        .then((response)=>{
            if(response.ok == false){
                throw new Error ('HTTP Error' + response.status)
            }
            return response.json();
        })
        .then((data)=>{
            setIsLoading(false)
            setData(data);
            setIsError(null);
        })
        .catch((error)=> {
            setIsError(error.message);
            setIsLoading(false);
            console.log(error)})
    }

    useEffect(()=>{
        fetchData();
    },[URL])

  return {data,isLoading,isError}
}

export default usefetchAllRecords
