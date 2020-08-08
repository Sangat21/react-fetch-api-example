import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://programming-quotes-api.herokuapp.com/quotes')
            .then((res, rej) => {
                return res.json();
            }).then((jsonData) => {
                setData(jsonData);
                setLoaded(true);
            });
    });

if(loaded){
    return (
        <div className="App">
            <ol>
                {data.map((item) => (
                    <li key={item.id}> Joke: {item.en} <br/><b>Written By:</b> <em>{item.author}</em> </li>
                ))}
            </ol>
        </div>
    );
} else {
    return (
        <div>Please Wait!!!</div>
    )
}

}

export default App;
