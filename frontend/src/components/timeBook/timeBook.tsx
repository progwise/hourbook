import { TimeBookHeadline } from "./timeBookHeadline";
import { TimeBookTable } from "./timeBookTable";

export interface ITimeBookProps {
    startDay: Date
}

export const TimeBook = (props: ITimeBookProps) => {
    return (
        <>
            <TimeBookHeadline startDay={props.startDay}></TimeBookHeadline>
            <TimeBookTable></TimeBookTable>
        </>
    )
}