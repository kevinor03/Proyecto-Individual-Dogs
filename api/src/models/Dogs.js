const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

   sequelize.define('dogs', {
      ID: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         unique: true,
      },
      Imagen: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      Nombre: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      Altura: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      Peso: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      Años: {
         type: DataTypes.INTEGER,
         allowNull: false,
      }
   }, { timestamps: false });
};
