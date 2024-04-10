import React from 'react'
import { CurrencyForm } from "./CurrencyForm"
import { CurrencyResult} from "./CurrencyResult"

export const CurrencyWrapper = () => {

    return(
        <div className="wrapper">
            <h1 className="title">Currency Converter</h1>
            <CurrencyForm/>
            <CurrencyResult />
        </div>
    );
}