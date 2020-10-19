const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const useAsyncSimulate = accessKey =>
    new Promise(
        (resolve, reject) =>
            setTimeout(
                () => (getRandomInt(1, 5) > 2 ? resolve(accessKey) : reject('Whoops, something went wrong')),
                getRandomInt(500, 2000)
            )
        // setTimeout(() => resolve(accessKey), getRandomInt(500, 2000))
    );

export default useAsyncSimulate;
