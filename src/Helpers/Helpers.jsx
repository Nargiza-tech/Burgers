export const getCurrentDay = () => {
    //год-мес-день час-минут
    const date = new Date();
    const currentData = date.getFullYear() + ' - ' + ' 0 ' + date.getMonth()  + ' - ' +  ' 0 ' +  date.getDate()

    const currentTime = date.getHours()  + ':' + date.getMinutes()
    return currentData + '  ' +   '  ' + currentTime
}