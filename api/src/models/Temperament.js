const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

   sequelize.define('temperament', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      temperament: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
      },
   }, { timestamps: false });
}