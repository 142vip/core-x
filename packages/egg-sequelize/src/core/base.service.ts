import {Sequelize} from 'sequelize'

export class BaseService{

  private readonly entity:Sequelize
  constructor(entity:Sequelize) {
    this.entity=entity
  }

  public async  insertData(){
    this.entity.
  }

}
