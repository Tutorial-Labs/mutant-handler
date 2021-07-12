const { Model } = require('sequelize');

export class MutantDnaModel extends Model{
    id: string;
    isMutant: number;
}