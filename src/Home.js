import { useState } from "react";

const Home = () => {
    // let name = 'nayeon';
    const [name, setName] = useState('nayeon');
        // assigning usestate to const while array destructuring, usestate is reactive
        // first param is the value of usestate, use the second to update the value aka set***

    const handleClick = () => {
        setName('momo');
    }

    // const handleClickAgain = (name) => {
    //     console.log('hello' + ' ' + name);
    // }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
                <p>{name}</p>
            <button onClick={handleClick}>Click here</button>
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