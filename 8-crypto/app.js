function crypto(isPassword) {
    let res = isPassword.split('');
    res.reverse();
    [res[0], res[res.length - 2], res[res.length - 1]] = [res[res.length - 1], res[0], res[res.length - 2]];
    if (res.length < 3) {
        console.log('Error');
    }
    isPassword1 = res.join('');
    return isPassword1;
}

crypto('branch');

function check(isPassword1, twoPassword) {
    res1 = isPassword1.split('');
    [res1[res1.length - 1], res1[0], res1[res1.length - 2]] = [res1[0], res1[res1.length - 2], res1[res1.length - 1]];
    res1.reverse();
    isPassword2 = res1.join('');
    if (isPassword2 === twoPassword) {
        return console.log('true');
    }
    return console.log('false');
}

check('bcnahr', 'branch');