class User{
    constructor(id, username, name, bio){
        this.id = id,
        this.username = username,
        this.name = name,
        this.bio = bio,
        this.datecreated = new Date(),
        this.lastupdate = new Date()

    }
    get getUsername(){
        return this.username
    }

    get getBio(){
        return this.bio
    }

    get getDatecreated(){
        return this.datecreated
    }

    get getLastupdate(){
        return this.lastupdate
    }

    set setUsername(newUsername){
        this.username = newUsername
    }

    set setBio(newBio){
        this.bio = newBio
    }
}


module.exports = User