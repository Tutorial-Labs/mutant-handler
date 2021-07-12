import {ConfigSequelize} from "../config/sequelize/config.sequelize";
import {MutantDnaModel} from "../model/MutantDnaModel";
import {MutantDnaServiceImpl} from "../services/mutant-dna-service-impl";

export class MutantHandlerController {

  public saveMessages(dna: string, isMutant: number) {
    const config = new ConfigSequelize();
    config.setupConnection()
      .then(() => {
        const mutantDnaModel = new MutantDnaModel();
        mutantDnaModel.isMutant = isMutant;
        mutantDnaModel.id = dna;
        const mutantDnaServiceImpl = new MutantDnaServiceImpl();
        mutantDnaServiceImpl.executeUpsert(mutantDnaModel);
      })
      .catch(error => {
        console.log("SetupConnection Error ", error);
      });

  }

}