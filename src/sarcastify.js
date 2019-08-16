export function sarcastify(str){
    let chars = [...str];
    let pattern = /^[A-Za-z]$/;
    for(var i in chars){
        if(pattern.test(chars[i])){
            chars[i] = i % 2 !== 0 ? chars[i].toUpperCase() : chars[i].toLowerCase();
        }
    }
    return chars.join('');
}