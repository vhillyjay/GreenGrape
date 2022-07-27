import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // const handleClickAgain = (name) => {
    //     console.log('hello' + ' ' + name);
    // }

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    const [blogs, setBlogs] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blogsContent) => blogsContent.id !== id);
    //     setBlogs(newBlogs);
    // };

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((response) => {
                return response.json();
            })
            .then((dataContent) => { //dataContent is the then response from fetch('http://localhost:8000/blogs')
                console.log(dataContent);
                setBlogs(dataContent);
            })
        console.log('useEffect running');
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
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