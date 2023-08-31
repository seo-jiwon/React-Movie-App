import React from 'react';
import { Oval } from "react-loader-spinner";

function Loading() {
    return (
        <div className='loading-div'>
            <Oval
                color="#000"
                secondaryColor="fff"
                height={100}
                width={100}
            />
            <h2>LOADING</h2>
        </div>
    )
}

export default Loading;