import database from 'db.json';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const simulateAsync = accessKey =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            if (database.accessKeys.includes(accessKey)) {
                resolve(accessKey);
            } else {
                reject('Whoops, access key is wrong');
            }
        }, getRandomInt(500, 2000))
    );

export default simulateAsync;
