function parseUrl(string){ 
    if(!typeof string === 'string'){
        console.log('Pass a string value as function parameter');
    }
    const objectUrl = new URL(string); 
    return objectUrl; 
}

let obj = parseUrl('https://ffagency.com/do/any.php?a=1#foo');

console.log( obj.hash ); // #foo
console.log( obj.hostname ); // "agency.com"
console.log( obj.pathname ); // "/do/any.php"

console.log( obj.protocol ); // "https:"