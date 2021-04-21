import {TimeBookHeadline} from "./timeBookHeadline"
import {TimeBookTable} from "./timeBookTable"

export const TimeBook = () => {

    const startDay = new Date()

    return (
        <>
            <TimeBookHeadline startDay={startDay}></TimeBookHeadline>
            <TimeBookTable></TimeBookTable>
        </>
    )
}