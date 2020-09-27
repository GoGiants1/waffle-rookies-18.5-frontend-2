import React, {useState} from 'react';

const Counter = () =>{
    const [num, setNum] = useState(0);

    const clickPlus = () =>{
        setNum(num + 1);
    }


    return(
        <div>
            <p>{num}</p>
            <button onClick={clickPlus}>+</button>
        </div>
    )
}

export default Counter;