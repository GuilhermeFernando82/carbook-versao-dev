'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manutencoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Manutencoes.belongsTo(models.Veiculos);
    }
  };
  Manutencoes.init({
    relatorio: DataTypes.STRING,
    data: DataTypes.STRING,
    veiculoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Manutencoes',
  });
  return Manutencoes;
};