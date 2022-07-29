import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    // blogs, title from child component<bloglist /> from home.js
    return ( 
        <div className="blog-list">
            <h2 className="head-title"> {title} </h2>
            {blogs.map((blogsContent) => (
                <div className="blog-preview" key={blogsContent.id}>
                    <Link to={`/blogs/${blogsContent.id}`}>
                        <h2>{blogsContent.title}</h2>
                        <p>written by {blogsContent.author}</p>
                    </Link>
                    
                    {/* <button onClick={() => handleDelete(blogsContent.id)}>Delete Blog</button> */}
                </div>
            ))}
            {/* blog.something in div is the blog inside .map() */}
            {/* blogs from usestate variable, .map is a js function. call back function.
                blog(each item) is defined by the user can be any name. key should be unique  */}
        </div>
     );
}
 
export default BlogList;