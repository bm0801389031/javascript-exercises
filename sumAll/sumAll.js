const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return 'ERROR'
    }
    else if (start <= end){ 

    let array = [];
    for (let i = start; i <= end; i++){
        array.push(i)
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}

    else { 
        if (end <= start){ 

            let array2 = [];
            for (let i = end; i <= start; i++){
                array2.push(i)
            }
            const reducer2 = (accumulator, currentValue) => accumulator + currentValue;
            return array2.reduce(reducer2);
    }
}
}

module.exports = sumAll;
