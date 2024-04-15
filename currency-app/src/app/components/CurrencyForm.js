"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const CurrencyForm = () => {
    // Add state to the component
    const [currencyOne, setCurrencyOne] = useState();
    const [currencyTwo, setCurrencyTwo] = useState();
    const [countryOne, setCountryOne] = useState("");
    const [countryTwo, setCountryTwo] = useState("");
    const [output, setOutput] = useState("");

    // Define variables
    var rate = 0;
    var total = 0;

    // Function to handle submitting the currency form
    const handleConvert = e => {
        // Prevent the page from reloading
        e.preventDefault();

        // Define the API url
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${countryOne}.json`;
        
        // Fetch the url data
        return fetch(url)
        .then (response => response.json())
        .then ((data) => {
            // Locate the rate for conversion
            rate = data[countryOne][countryTwo];
            // Calculate the total
            total = (currencyOne * rate).toFixed(2);
            // Set the output, if total is a number value
            if(!isNaN(total)) {
                // Set the second currency
                setCurrencyTwo(total);
                // Set the output
                setOutput(currencyOne + " " + countryOne.toUpperCase() + " equals " + total + " " + countryTwo.toUpperCase());
            } else {
                // Set an error output
                setOutput("*** Please enter a valid country ==> \'" + countryTwo + "\' is not in the database ***");
            }
        })
        .catch (error => {
            console.log("URL Error ==> Please enter a valid country\n" + error);
            setOutput("*** Please enter a valid country ==> \'" + countryOne + "\' is not in the database ***");
        });    
    }

    // Function to handle the first Currency entered text
    const handleCurrencyOne = e => {
        // Set the currency state
        setCurrencyOne(e.target.value);
        // Clear the placeholder on currencyTwo
        document.getElementById("currTwo").placeholder = "";
    }

    // Function to handle the first Currency entered text
    const handleCountryOne = e => {
        // Set the first country state
        setCountryOne(e.target.value.toLowerCase());
    }

    // Function to handle the second Currency entered text
    const handleCountryTwo = e => {
        // Set the second country state
        setCountryTwo(e.target.value.toLowerCase());
    }

    return (
        <div>
        <form onSubmit={handleConvert}>
            <input className="currency" placeholder="1.00" pattern="\d{1,9}\.?\d{2}?" onChange={handleCurrencyOne} value={currencyOne} required/>
            <input className="currencyCountry" placeholder="eg. CAD" onChange={handleCountryOne} value={countryOne} required/>
            
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
            
            <input className="currency" id="currTwo" placeholder="0.73" value={currencyTwo} readOnly />
            <input className="currencyCountry" placeholder="eg. USD" onChange={handleCountryTwo} value={countryTwo} required/>
            <button type="submit">Convert</button>
        </form>
        <p className="output">{output}</p>
        </div>
    );
};