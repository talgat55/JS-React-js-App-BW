'use strict';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('users', {
            password: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {});
    User.associate = function (models) {
        // associations can be defined here
    };
    User.prototype.isValidPassword = function (password) {
        return bcrypt.compare(password, this.password);
    };
    User.prototype.getPassword = function (password) {
        return bcrypt.hash(password, 10);
    };

    User.prototype.generateJWT = function () {

        return jwt.sign({
            email: this.email,
        }, 'key');
    };

    User.prototype.toAuthJSON = function () {
        return {
            email: this.email,
            token: this.generateJWT()
        };
    };


    return User;
};
