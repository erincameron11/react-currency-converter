'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const CurrencyForm = () => {
    // Add state to the component
    const [currency, setCurrency] = useState(1.00);
    const [secondCurrency, setSecondCurrency] = useState(0.73);
    const [countryFirst, setFirstCountry] = useState("");
    const [countrySecond, setSecondCountry] = useState("");

    // Function to handle submitting the currency form
    const handleConvert = e => {
        // Prevent the page from reloading
        e.preventDefault();

        
    }

    // Function to handle the To-Currency entered text
    const handleFirstCurrency = e => {
        // Set the currency state
        setCurrency(e.target.value)
    }

    // Function to handle the To-Currency entered text
    const handleFirstCountry = e => {
        // Set the first country state
        setFirstCountry(e.target.value)
    }

    // Function to handle the From-Currency entered text
    const handleSecondCurrency = e => {
        // Info should auto-populate from API
        // calculate
        var rate = 0.73
        var total = currency * rate
        setSecondCurrency(total)
        console.log(total)
    }

    // Function to handle the From-Currency entered text
    const handleSecondCountry = e => {
        // Set the second country state
        setSecondCountry(e.target.value)
    }


    return(
        <form onSubmit={handleConvert}>
            <input className="currency" pattern="\d{1,9}\.?\d{2}?" onChange={handleFirstCurrency} value={currency} required/>
            <input className="currencyCountry" placeholder="eg. CAD" onChange={handleFirstCountry} value={countryFirst} required/>
            
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
            
            <input className="currency" onChange={handleFirstCurrency} value={secondCurrency} readOnly />
            <input className="currencyCountry" placeholder="eg. USD" onChange={handleSecondCountry} value={countrySecond} required/>
            <button type="submit" onClick={handleSecondCurrency}>Convert</button>
        </form>
    );
}