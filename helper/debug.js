let black = '\x1b[30m%s\x1b[0m';
let red = '\x1b[31m%s\x1b[0m';
let green = '\x1b[32m%s\x1b[0m';
let yellow = '\x1b[33m%s\x1b[0m';
let blue = '\x1b[34m%s\x1b[0m';
let magenta = '\x1b[35m%s\x1b[0m';
let cyan = '\x1b[36m%s\x1b[0m';
let white = '\x1b[37m%s\x1b[0m';
let reset = '\x1b[0m';
let bold = '\x1b[1m';
let dim = '\x1b[2m';
let italic = '\x1b[3m';
let underline = '\x1b[4m';

// red -> string
// cyan 

export function debug(...parameter) {
    if (parameter.length === 0) {
        console.log(red, '-> Debugging');
    }
    if (typeof parameter === 'string' && process.env.ENVIRONMENT === 'Development') {
        console.log(red, '->', parameter);
    }
    if (typeof parameter === 'object' && process.env.ENVIRONMENT === 'Development') {
        for (const key in parameter) {
            console.log(cyan, `-> ${key}: ${parameter[key]}`);
        }
    }
    if (typeof parameter === 'array' && process.env.ENVIRONMENT === 'Development') {
        for (const key in parameter) {
            console.log(yellow, `-> ${key}: ${parameter[key]}`);
        }
    }

    if (typeof parameter === 'function' && process.env.ENVIRONMENT === 'Development') {
        parameter();
    }
}

