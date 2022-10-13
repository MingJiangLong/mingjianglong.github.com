
const monthMap = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
}
/**
 * 格式化时间
 * @param {number} num 
 */
function formatTime(num) {
    const date = new Date(num);
    return `${monthMap[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}