const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina',
    'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
    'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
    'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina'
]


const employment = [
    55.70000076, 51.40000153, 50.5, 75.69999695,
    58.40000153, 40.09999847, 61.5, 57.09999847,
    60.90000153, 66.59999847, 60.40000153, 68.09999847,
    66.90000153, 53.40000153, 48.59999847, 56.79999924,
    71.59999847, 58.40000153, 70.40000153, 41.20000076
]

function join(num, alp) {
    let data = {}
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < alp.length; j++) {
            data[num[i]] = alp[j]
        }
    }

    return data;
}

// function join(num, alp){
//     let data = {};
//     for (let i = )
// }

console.log(join(employment, countries))