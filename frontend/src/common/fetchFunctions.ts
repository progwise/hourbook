

export const fetchWithTimeout = (input: RequestInfo, timeout = 1000): Promise<any> => {

    return Promise.race([
        fetch(input),
        new Promise( (_, reject) => {
            setTimeout(() => reject('timed out'), timeout)
        } )
    ])
}