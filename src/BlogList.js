const BlogList = ({blogs, title, handleDelete}) => {
    // blogs, title from child component<bloglist /> from home.js
    // const blogs = props.blogs;
    // console.log(props, blogs);
    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
            {/* blog.something in div is the blog inside .map() */}
            {/* blogs from usestate variable, .map is a js function. call back function.
                blog(each item) is defined by the user can be any name. key should be unique  */}
        </div>
     );
}
 
export default BlogList;