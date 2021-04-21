import { useEffect, useState } from "react"
import { ICountry } from "../common/definitions";

export const CountryList = () => {

    // https://restcountries.eu/rest/v2/all

    console.log('CountryList was called from React')

    const [countries, setCountries] = useState<ICountry[]>([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // todo: work with the fetched data
                console.log(data);
                setCountries(data as ICountry[])
            })
    }, []);

    return <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>region</th>
            </tr>
        </thead>
        <tbody>
            {
                countries.map((country, index) => (
                    <tr key={index}>
                        <td>{ country.alpha3Code }</td>
                        <td>{ country.name }</td>
                        <td>{ country.region }</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
}