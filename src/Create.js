import { useState } from "react";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ uploading, setUploading ] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents form from refreshing
        const blogInput = { title, body, author}; //collects the current state value
        // console.log(blogInput);
        setUploading(true); //after form is submitted
        fetch('http://localhost:8000/blogs', { //same endpoint on home.js
            method: 'POST', //to post on api endpoint indicated in fetch
            headers: { "Content-Type": "application/json" }, //to indentify content type being sent
            body: JSON.stringify(blogInput) //actual data being sent/automatic id
        }).then(() => {
            console.log('new blog added')
            setUploading(false); //form is already submitted/added
        });
    }
    
    return ( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                        //default value is empty as per useState
                    onChange={(e) => setTitle(e.target.value)}
                        //value will change / targets the input and current value(which is empty)
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input 
                    type="text" 
                    required 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {/* <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select> */}
                
                { !uploading && <button>Add Blog</button> }
                { uploading && <button disabled>Add Blog</button> }
            </form>
            {/* <p>{title} - {body} - {author}</p> */}
        </div>
     );
}
 
export default Create;