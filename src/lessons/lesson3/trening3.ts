export let promise = new Promise((resolve, reject)=> {
        setTimeout(() => resolve("done"), 1000);
    }
)
promise.then(
    result=>alert(result),
    error=>alert(error)
);

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject(new Error("vse propalo")),1000)
});

promise2.then(
    result=>alert(result),
    error=>alert(error)
)