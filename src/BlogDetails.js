import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
        //imported useFetch with parameter of resource
    const history = useHistory();
    const handleDeleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    };
    return ( 
        <div className="blog-details">
            {/* <h2>blog details - { id }</h2> */}
            { isLoading && <div>Loading</div> }
            { error && <div>{error}</div> }
            { blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>Written by: { blogs.author }</p>
                    <div>{ blogs.body }</div>
                    <button onClick={handleDeleteBlog}>Delete</button>
                </article>
            ) }
        </div>
        //info that will be shown once you click a blog(per blog)
     );
}
 
export default BlogDetails;