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
 const runAwait = async () => {
    let vsePropalo = await promise
    console.log("vsePropalo")
     }

  runAwait()


let blackHole = new Promise((resolve,reject)=>{
    for (let i = 0; i <10; i++) {
         console.log(i)
    }
resolve("the end")
})
blackHole.then(console.log)

// const delay=(ms:number)=>{
//     return (
//         new Promise((resolve,reject) => {
//             setTimeout(()=>resolve(),ms)
//         })
//     )
// }
// delay(3000)
//     .then(()=>alert("Complited in 3 sec"))

function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000)
    .then(() => alert('выполнилось через 3 секунды'));

export function getNumber(){
    const promise =Promise.resolve(Math.random())
    return promise
}
getNumber().then(n=>console.log(n))