const User = require('./../../app/models/User')

describe("Unit Test for User class", () => {
    test('Create a User object', () => {
      const user = new User(1, "gabrielsamano", "gabriel", "bio")
      expect(user.id).toBe(1);
      expect(user.username).toBe("gabrielsamano");
      expect(user.name).toBe("gabriel");
      expect(user.bio).toBe("bio");
      expect(user.datecreated).not.toBeUndefined()
      expect(user.lastupdate).not.toBeUndefined()

    });
    test('Add Getters', () =>{
        const user = new User(1, "gabrielsamano", "gabriel", "bio")
        expect(user.getUsername).toBe("gabrielsamano")
        expect(user.getBio).toBe("bio")
        expect(user.getDatecreated).not.toBeUndefined()
        expect(user.getLastupdate).not.toBeUndefined()
    });
    test('Add Setters', () =>{
        const user = new User(1, "gabrielsamano", "gabriel", "bio")
        user.setUsername = "Samano"
        expect(user.username).toBe("Samano")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")

    });
  })