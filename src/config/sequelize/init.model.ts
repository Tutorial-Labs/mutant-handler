import {MutantDnaModel} from "../../model/MutantDnaModel";

const {DataTypes } = require('sequelize');

export function InitModel(sequelize){
  MutantDnaModel.init({
        id: {
            type: DataTypes.TEXT,
            primaryKey: true
        },
        ismutant: DataTypes.BOOLEAN,
    }, {
        tableName: 'mutant-dna',
        createdAt: false,
        updatedAt: false,
        sequelize,
    })

}