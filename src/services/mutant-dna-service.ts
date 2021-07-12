import {MutantDnaModel} from "../model/MutantDnaModel";

export interface MutantDnaService {
  executeUpsert(dna: MutantDnaModel): Promise<any>;
}