function lowerCaseWords(arr) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(arr)) {
            reject("Input is not an array");
        } else {
            let result = Array.from(arr).filter(function(item) {
                return typeof item === 'string';
            }).map(function(word) {
                return word.toLowerCase();
            });
            resolve(result);
        }
    });
}
const mixedArray = ['INDIA', 10, true, 25, false, 'CANADA'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.error(error));