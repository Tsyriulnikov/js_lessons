export let promise = new Promise((resolve, reject)=> {
        setTimeout(() => resolve("done"), 1000);
    }
)
promise.then(
    result=>alert(result),
    error=>alert(error)
);

