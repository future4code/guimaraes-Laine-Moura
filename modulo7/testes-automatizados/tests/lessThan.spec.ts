import { performPurchase, User } from "../src"

describe("greather than", ()=> {
    test("Testing balance smaller than value", () => {
        const user: User = {
            name: "Laíne",
            balance: 10
        }
    
        const result = performPurchase(user, 30)
        
        expect(result).not.toBeDefined()
    })
})
