import React, { useEffect, useState } from 'react';

export default function Card() {
    const [dataa, setData] = useState({});
    const [dataShow, setDataShow] = useState(null);

    useEffect(() => {
        fetchJoke();
    }, []);

    function fetchJoke() {
        fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
            .then((result) => result.json())
            .then((data) => {
                setData(data);
                const newJoke = (
                    <div>
                        <h3>{data.category}</h3>
                        <p>{data.type === 'twopart' ? `${data.setup} ${data.delivery}` : data.joke}</p>
                    </div>
                );
                setDataShow(newJoke);
            })

    }
    return (
        <div className="joke">
            <img src={require('../image/img.jpeg')} alt="" />
            {dataShow}
            <button onClick={fetchJoke}>New Joke</button>
        </div>
    );
}
