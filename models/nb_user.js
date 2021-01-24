"use strict";
const { Model } = require("sequelize");
require("dotenv").config();
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

module.exports = (sequelize, DataTypes) => {
  const nb_user = sequelize.define(
    "nb_user",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      first_name: { type: DataTypes.STRING(60), allowNull: false },
      last_name: { type: DataTypes.STRING(60), allowNull: false },
      username: { type: DataTypes.STRING(255), allowNull: false },
      email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(128), allowNull: false },
      refresh_token: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      tableName: "nb_user",
      modelName: "nb_user",
      underscored: true,
      timestamps: false,
      scopes: {
        withoutPassword: {
          attributes: {
            exclude: ["password"],
          },
        },
      },
    }
  );
  nb_user.prototype.getFullName = function () {
    return (
      this.getDataValue("first_name") + " " + this.getDataValue("last_name")
    );
  };

  nb_user.beforeCreate(function (attrs) {
    return new Promise((resolve, reject) => {
      hash(attrs.password, 12, (err, encrypted) => {
        if (err) return reject(err);
        attrs.password = encrypted;
        resolve(attrs);
      });
    });
  });

  nb_user.validateAndGet = async function (username, password) {
    try {
      const user = await nb_user.findOne({
        where: { username },
        raw: true,
      });
      if (!user) throw new Error("Account not exists!");
      if (user) {
        const match = await compare(password, user.password);
        if (match) {
          const { id, first_name, last_name, username, email } = user;
          const profile = { id, first_name, last_name, username, email };

          const access_token = sign(profile, process.env.ACCESSTOKEN_SECRETE, {
            expiresIn: "1m",
          });
          const refresh_token = sign({ id }, process.env.REFRESHTOKEN_SECRETE, {
            expiresIn: "1d",
          });
          const tokensaved = await nb_user.update(
            { refresh_token },
            {
              where: { id: user.id },
            }
          );
          if (tokensaved) {
            return {
              profile,
              accessToken: { access_token, refresh_token },
            };
          }
        } else {
          throw new Error("Wrong password!");
        }
      }
      return null;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  return nb_user;
};
