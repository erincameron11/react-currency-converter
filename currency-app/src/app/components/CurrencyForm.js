import React from 'react'

export const CurrencyForm = () => {
    // Function to handle submitting the currency form
    const handleConvert = e => {
        // Do something
    }

    // Function to handle the From-Currency entered text
    const handleFromEntered = e => {
        // Do something
    }

    // Function to handle the To-Currency entered text
    const handleToEntered = e => {
        // Do something
    }

    return(
        // <form onSubmit={handleConvert}>
        <form>
            {/* <input placeholder="eg. CAD" onChange={handleFromEntered}/>
            <input placeholder="eg. USD" onChange={handleToEntered}/> */}
            <input placeholder="eg. CAD"/>
            <input placeholder="eg. USD"/>
            <button type="submit">Convert</button>
        </form>
    );
}