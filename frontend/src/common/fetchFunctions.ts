

export const fetchWithTimeout = (request: RequestInfo, timeout = 1000): Promise<any> => {

    return Promise.race([
        fetch(request),
        new Promise( (_, reject) => {
            console.log(timeout)
            setTimeout(() => reject({request, timeout, reason:'timed out'}), timeout)
        } )
    ])
}
