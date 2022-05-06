import {makeCounter, sum} from "./lesson2";

test ("issue 1",()=>{

    const result=sum(3)(6)

    expect(result).toBe(9)

})

test ("issue 2.1",()=>{

     const result=makeCounter()

    // expect(makeCounter1()).toBe(1)
    expect(result).toBe(1)

})