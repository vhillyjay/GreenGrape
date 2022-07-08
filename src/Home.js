import { useState } from "react";

const Home = () => {
    // let name = 'nayeon';
    // const [name, setName] = useState('nayeon');
        // assigning usestate to const while array destructuring, usestate is reactive
        // first param is the value of usestate, use the second to update the value aka set***

    // const handleClick = () => {
    //     setName('momo');
    // }

    // const handleClickAgain = (name) => {
    //     console.log('hello' + ' ' + name);
    // }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
            {/* blogs from usestate variable, .map is a js function. call back function.
                blog(each item) is defined by the user can be any name. key should be unique  */}

            {/* <h2>Home Page</h2>
                <p>{name}</p>
            <button onClick={handleClick}>Click here</button> */}
            {/* <button onClick={() => {
                handleClickAgain('nayeonnn');
            }}>Click again</button> */}
                {/* anonymous function. fires when button is clicked */}
            {/* <button onClick={() => handleClickAgain('nayeon')}>Click again</button> */}
                {/* anonymous function. fires when button is clicked. same as the code above */}
        </div>
     );
}
 
export default Home;