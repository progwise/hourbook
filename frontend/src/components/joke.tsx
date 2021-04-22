import { useEffect, useState } from "react"
import { fetchWithTimeout } from "../common/fetchFunctions"

export const Joke = () => {

    const [joke, setJoke] = useState('')

    const fetchJoke = async () => {
        let response = await fetchWithTimeout('https://v2.jokeapi.dev/joke/Any?type=single')
        let data = await response.json()
        setJoke(data.joke)
    }

    useEffect(() => {
            fetchJoke()
        },[])

    return <div>
        <h3>Witz:</h3>
        <span>{joke}</span>
    </div>
}