import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null); //[blogs, setBlogs] changed to [data, setData]
    const [isLoading, setIsLoading] = useState(true); //for loading message
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url) //json file made locally with path (data/db.json) //'http://localhost:8000/blogs'
            .then((response) => {
                if(!response.ok) {
                    throw Error('Could not fetch data'); //throw this error message to .catch
                }
                return response.json();
            })
            .then((dataContent) => { //dataContent is the then response from fetch('http://localhost:8000/blogs')
                // console.log(dataContent); //json file logged to console
                setData(dataContent);
                setIsLoading(false);
                setError(null);
            })
            .catch((err) => {
                console.log(err.message);
                setIsLoading(false);
                setError(err.message);
                
            })
        console.log('useEffect running');
    }, [url]); //will only run in the first render because of second param which is []

return { data, isLoading, error };
}
 
export default useFetch;
//custom hook