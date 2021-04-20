export interface ITimeBookProps {
    startDay: Date
}

function addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const TimeBook = (props: ITimeBookProps) => {
    const hourData = {
        'M': 4.5,
        'T': 3.0,
    };
    const endDay = addDays(props.startDay, 6);
    return (
        <>
            <h1>Start day {props.startDay.toDateString()}</h1>
            <h1>End day {endDay.toDateString()}</h1>
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