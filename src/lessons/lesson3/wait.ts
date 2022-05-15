export const wait = (ms: number) => {
return new Promise((res)=>{
    setTimeout(()=>{res()},ms)
})
}

const run = async () => {
    await wait(1000)
    console.log(1)
    await wait(2000)
    console.log(2)
    await wait(3000)
    console.log(3)
}