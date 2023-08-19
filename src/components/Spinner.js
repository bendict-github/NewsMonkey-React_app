import React from 'react'
import loading from './loading.gif';

const Spinner = () => {

    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="loading" height='180px' width='200px' />
        </div>
    )

}

export default Spinner