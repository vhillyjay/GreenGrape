import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null); //[blogs, setBlogs] changed to [data, setData]
    const [isLoading, setIsLoading] = useState(true); //for loading message
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortControl = new AbortController(); //to abort fetch when switched to a different component

        fetch(url, {signal: abortControl.signal}) //json file made locally with path (data/db.json) //'http://localhost:8000/blogs'
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
                // console.log(err.message);
                if (err.name === "AbortError") {
                    // console.log(err.name);
                    console.log('Fetch aborted.')
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }     
            })
        // console.log('useEffect running');
        return () => abortControl.abort();
    }, [url]); //will only run in the first render because of second param which is []

return { data, isLoading, error };
}
 
export default useFetch;
//custom hook