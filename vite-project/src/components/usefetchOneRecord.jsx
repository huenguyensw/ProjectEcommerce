import React, {useState,useEffect}from 'react'

const usefetchOneRecord = ({URL}) => {
    const [data, setData] = useState({})
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = () =>{
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
        })
        .catch((error)=> {
            setIsError(error.message);
             console.log(error)})
    }

    useEffect(()=>{
        fetchData();
    },[URL])

  return {data,isLoading,isError}
}

export default usefetchOneRecord
