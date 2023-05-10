// code your solution here
saturdayFun();
function saturdayFun(fun = 'roller-skate') {
    return(`This Saturday, I want to ${fun}!`)
}

function mondayWork (work = 'go to the office') {
    return(`This Monday, I will ${work}.`)
}

function wrapAdjective(str='*') {
    return function(name = 'special') {
        return `You are ${str}${name}${str}!`
    }
}