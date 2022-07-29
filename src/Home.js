// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const handleClickAgain = (name) => {
    //     console.log('hello' + ' ' + name);
    // }

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blogsContent) => blogsContent.id !== id);
    //     setBlogs(newBlogs);
    // };

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading</div> }
            { blogs && <BlogList blogs={ blogs } title="All Blogs"/> }
            {/* prop temporarily removed == handleDelete={handleDelete} */}
            {/* first blogs(can be any name you want), second blogs is the value we are passing *const[blogs]* */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios Blogs"/> */}

            {/* <button onClick={() => {
                handleClickAgain('nayeonnn');
            }}>Click again</button> */}
                {/* anonymous function. fires when button is clicked */}
        </div>
     );
}
 
export default Home;