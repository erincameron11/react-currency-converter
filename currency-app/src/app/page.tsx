"use client"
import { CurrencyWrapper } from "./components/CurrencyWrapper"
// import Appy from "./components/Appy";

export default function Home() {
  // // Constructor to set the state and bind the search function
  // constructor(props) {
  //   super(props);
  //   this.state = { countryFirst: null };
  //   this.search = this.search.bind(this);
  // }

  // Function for searching the API
  // const search = (country, countrySecond) => {
  //   // Define the url value
    // let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country}.json`;
    
  //   // Fetch the url
  //   fetch(url)
  //     .then (response => response.json())
  //     // Get countries searched for and set it as the state of countryFirst and countrySecond
  //     .then (countryFirst => this.setState({countryFirst: countryFirst}))
  //     .then (countrySecond => this.setState({countrySecond: countrySecond}));
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CurrencyWrapper />
        {/* <Appy /> */}
    </main>
  );
}
