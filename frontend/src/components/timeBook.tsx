export const TimeBook = () => {

    const hourData = {
        'M': 4.5,
        'T': 3.0,
    };

    return <table>
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
}