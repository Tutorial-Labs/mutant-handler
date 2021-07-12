import {MutantDnaService} from "./mutant-dna-service";
import {MutantDnaModel} from "../model/MutantDnaModel";

export class MutantDnaServiceImpl implements MutantDnaService {

  executeUpsert(dna: MutantDnaModel): Promise<any> {
    return MutantDnaModel
      .findByPk(dna.id)
      .then(function (obj) {
        if (obj)
          return MutantDnaModel.update({
            id: dna.id,
            ismutant: dna.isMutant,
          }, {
            where: {
              id: dna.id
            }
          }).then(response => {
            return Promise.resolve(response);
          }).catch(error => {
            return Promise.reject(error)
          });
        return MutantDnaModel.create({
          id: dna.id,
          ismutant: dna.isMutant,
        }).then(response => {
          return Promise.resolve(response);
        }).catch(error => {
          return Promise.reject(error)
        });
        ;
      });
  }

}