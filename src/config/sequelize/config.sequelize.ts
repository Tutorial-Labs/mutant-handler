import {environment} from "../../environments/environment";
import {Sequelize} from "sequelize";
import {InitModel} from "./init.model";

export class ConfigSequelize {

  private static _instance: ConfigSequelize = null;
  public sequelize: Sequelize = null;

  constructor() {
    if (!ConfigSequelize._instance) {
      ConfigSequelize._instance = this;
    } else {
      return ConfigSequelize._instance
    }
  }

  public static getInstance() {
    return ConfigSequelize._instance;
  }

  public async setupConnection() {
    if (this.sequelize) {
      return;
    }
    await this.setupAwsConnection();
    InitModel(this.sequelize);
  }

  private async setupAwsConnection() {
    try {
      this.sequelize = new Sequelize(environment.rds.database, environment.rds.username, environment.rds.password, {
        host: environment.rds.hostname,
        dialect: 'mariadb'
      });
    } catch (e) {
      console.error(e);
      throw e
    }
  }

}
