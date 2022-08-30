import { performPurchase, User } from "../src"

describe("greather than", ()=> {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Laíne",
            balance: 25
        }
    
        const result = performPurchase(user, 30)
        
        expect(result).not.toBeDefined()
    })
})
