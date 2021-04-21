export interface IProject {
    id: number,
    name: string,
    start?: Date,
    end?: Date
}

export interface ICountry {
    alpha3Code: string,
    name: string,
    region: string
}