export function addDays(date: Date, days: number){
    const ldate = new Date().setDate(date.getDate() + days);
    return ldate;
}