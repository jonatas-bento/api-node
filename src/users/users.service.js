const { Users } = require('./../database/models')

class UserService {
    static findAll(){
        return Users.findAll()
    }
    static findById(userId){
        return Users.findById(userId);
    }
    static create(userToSave) {
        return Users.create(userToSave)
    }

    static update(userId, userData){
        return Users.update(userId, userData)
    }

    static remove(userId){
        return Users.destroy(({ where: { id: userId}}))
    }

    static restore (userId){
        return Users.restore(userId)
    }
    }


module.exports = UserService;