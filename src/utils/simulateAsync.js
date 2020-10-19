import key from 'accessKey.json';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const simulateAsync = accessKey =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            if (key.accessKey.includes(accessKey)) {
                resolve(accessKey);
            } else {
                reject('Whoops, code is wrong');
            }
        }, getRandomInt(500, 2000))
    );

export default simulateAsync;
