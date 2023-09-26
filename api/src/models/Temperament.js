const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

   sequelize.define('temperament', {
      ID: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         unique: true,
      },
      Nombre: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   }, { timestamps: false });
}