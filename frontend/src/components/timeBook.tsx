export interface ITimeBookProps {
    startDay: Date
}

export const TimeBook = (props: ITimeBookProps) => {

    const hourData = {
        'M': 4.5,
        'T': 3.0,
    };

    const addDays = (date: Date, numDays: number) => {
        const result = new Date(date);
        result.setDate(result.getDate() + 6);
        return result;
    }

    const endDay = addDays(props.startDay, 6);

    return (
        <>
        <h2>From {props.startDay.toDateString()} until {endDay.toDateString()}</h2>
        <table>
        <thead>
            <tr>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>Th</th>
                <th>F</th>
                <th>S</th>
                <th>Su</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{hourData['M']}</td>
                <td>{hourData['T']}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    </>
    )
}