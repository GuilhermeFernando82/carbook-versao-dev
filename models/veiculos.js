'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Veiculos.belongsTo(models.User);
      Veiculos.hasMany(models.Manutencoes);
    }
  };
  Veiculos.init({
    foto: DataTypes.STRING,
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    cor: DataTypes.STRING,
    portas: DataTypes.STRING,
    combustivel: DataTypes.STRING,
    cambio: DataTypes.STRING,
    code: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};