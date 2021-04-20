export interface IPropsTimeBookHeadline {
    startDay: Date
}

export const TimeBookHeadline = (props: IPropsTimeBookHeadline) => {
    const addDays = (date: Date, numDays: number) => {
        const result = new Date(date)
        result.setDate(result.getDate() + 6)
        return result
    }

    const endDay = addDays(props.startDay, 6);
    return <h2>From {props.startDay.toDateString()} until {endDay.toDateString()}</h2>
}