export function debug(...parameter) {
    if (parameter.length === 0) {
        console.log('-> Debugging');
    }
    if (typeof parameter === 'string' && process.env.ENVIRONMENT === 'Development') {
        console.log('->', parameter);
    }
    if (typeof parameter === 'object' && process.env.ENVIRONMENT === 'Development') {
        for (const key in parameter) {
            console.log(`-> ${key}: ${parameter[key]}`);
        }
    }
    if (typeof parameter === 'array' && process.env.ENVIRONMENT === 'Development') {
        for (const key in parameter) {
            console.log(`-> ${key}: ${parameter[key]}`);
        }
    }

    if (typeof parameter === 'function' && process.env.ENVIRONMENT === 'Development') {
        parameter();
    }
}

