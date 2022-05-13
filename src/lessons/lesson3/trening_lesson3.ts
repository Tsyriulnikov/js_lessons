import axios from "axios";

export const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;
export function wringOut(count:number){
    return new Promise((resolve, reject) => {
        if(count > 100){
            reject(new Error("Слишком много отжиманий"));
        }
        setTimeout(() => {
            resolve();
        }, count * WRING_OUT_TIME);
    });
}

export function squatting(count:number){
    return new Promise((resolve, reject) => {
        if(count > 1000){
            reject(new Error("Слишком много приседаний"));
        }
        setTimeout(() => {
            resolve();
        }, count * SQUATTING_TIME);
    })
}

// Example 4
async function myTraining() {
    try {
        console.log("Начать сложную тренировку");
        await wringOut(10);
        console.log("Отжался 10 раз");
        await squatting(10);
        console.log("Присел 20 раз!");
        return true;
    } catch(err) {
        console.log(err.toString());
        return false;
    };
}

myTraining().then((result) => {
    console.log(result);
})

const promise1 = axios.get('http://www.omdbapi.com')
promise1.then((data) => {console.log(data)}

)