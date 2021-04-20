import { TimeBookHeadline } from "./timeBookHeadline";
import { TimeBookTable } from "./timeBookTable";

export interface ITimeBookProps {
}

export const TimeBook = (props: ITimeBookProps) => {

    const startDay = new Date();
    
    return (
        <>
            <TimeBookHeadline startDay={startDay}></TimeBookHeadline>
            <TimeBookTable></TimeBookTable>
        </>
    )
}