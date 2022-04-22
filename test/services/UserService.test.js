const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () =>{
    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1, "gabrielsamano", "gabriel")
        expect(user.username).toBe("gabrielsamano")
        expect(user.name).toBe("gabriel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    }) 
})