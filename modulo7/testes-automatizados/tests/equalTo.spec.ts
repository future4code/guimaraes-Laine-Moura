import { performPurchase, User } from "../src"

describe("equal to", ()=>{
    test("Testing balance equal to value", ()=>{
        const user:User = {
            name: "Laíne",
            balance: 100
        }
    
        const result = performPurchase(user,100)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

})