"use client"
import React from 'react'
import { CurrencyForm } from "./CurrencyForm"
import logo from '../../../public/logo.png';

export const CurrencyWrapper = () => {
    
    return(
        <div className="wrapper">
            <h1 className="title">Currency Converter</h1>
            <div className="logoBackground">
                <div className="logoImage" />
            </div>
            <CurrencyForm />
        </div>
    );
}