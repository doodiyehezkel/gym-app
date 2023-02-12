const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'min length for email is 3'],
        validate: [
            {
                validator: (value)=>{ return value.includes('@') },
                message: 'email must contains @ symbol'
            }
        ]
    },
    password: {
        type: String,
        required: true,
    }

})

userSchema.statics.signup = async function(email ,password) {
    const exists = await this.findOne({email})
    if(exists) throw Error(`user with the email ${email} already exists`)
    //need to check for password here because using minlength validation wont work after hash empty or less then 5 chars
    if(!password || password.length < 5 ) throw Error(`password length must be more than 5`)
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    return await this.create({email ,password: hash})
}

userSchema.statics.signin = async function(email ,password) {
    const exists = await this.findOne({email})

    if(!exists) throw Error(`user with the email ${email} is not exists`)

    const match = await bcrypt.compare(password ,exists.password)

    if(!match) throw Error(`incorrect password`)

    return exists
}

module.exports = mongoose.model('User', userSchema)