"use client"
import React from 'react'
import { CurrencyForm } from "./CurrencyForm"
import { CurrencyResult} from "./CurrencyResult"
import logo from '../../../public/logo.png';

export const CurrencyWrapper = () => {
    
    // Test
    // const addCountryFirst = country => {
    //     // Define the url value
    //     let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country}.json`;
        
    //     // Fetch the url
    //     fetch(url)
    //     .then (response => response.json())
    //     // Get countries searched for and set it as the state of countryFirst and countrySecond
    //     .then (countryFirst => this.setState({countryFirst: countryFirst}))
    //     .then (countrySecond => this.setState({countrySecond: countrySecond}));
    // }




    return(
        <div className="wrapper">
            <h1 className="title">Currency Converter</h1>
            <div className="logoBackground">
                <div className="logoImage" />
            </div>
            {/* <CurrencyForm addCountryFirst={addCountryFirst} /> */}
            <CurrencyForm />
            {/* <CurrencyResult /> */}
        </div>
    );
}

// export default CurrencyWrapper;