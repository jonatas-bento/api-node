const UserService = require("./users.service");

class UserController {
    static async findAll(req, res) {
        try {
            const users = await UserService.findAll()

            res.json(users)
        }
        catch (err) {
            console.log(err.message)
        }
    }
    static async findById(req, res) {
        try {
            const { id } = req.params;

            const userById = await UserService.findById(id);
            res.json(userById)
        }
        catch (e) {
            console.log(e.message)
        }
    }
    static async create(req, res) {
     try{   const newUser = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            status: req.body.status
        }

        const userSaved = await UserService.create(newUser);


        res.json(userSaved)
    }
    catch(e){
        console.log(e.message)
    }
    }
    static async update(req, res) {
        let { id } = req.params;

        const userData = [
            {
                nome: req.body.nome,
                email: req.body.email,
                telefone: req.body.telefone,
            }
        ]

        const userUpdated = await UserService.update(id, userData)
        res.json({ userUpdated })
    }

    static async remove(req, res) {
        const { id } = req.params

        const result = await UserService.remove(id)

        res.json({status: 'deletado'})
    }

}

module.exports = UserController;