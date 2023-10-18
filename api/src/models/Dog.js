const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

   sequelize.define('dog', {
      id: {
         type: DataTypes.UUID,
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
      },
      weight: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      height: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      life_span: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
      },
   }, { timestamps: false });
};
