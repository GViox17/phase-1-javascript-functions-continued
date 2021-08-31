// Your code here
function saturdayFun(activity){
    return `This Saturday, I want to ${activity || 'roller-skate'}!`
}
function mondayWork(activity){
    return `This Monday, I will ${activity || 'go to the office'}.`
}
function wrapAdjective(result){
    return (adjective) => `You are ${result || '*'}${adjective}${result || '*'}!`
}
