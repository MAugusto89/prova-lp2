import { Vegetais } from '../models/Vegetais';
import { vegetaisDao } from './VegetaisDao';

export class VegetaisCsvDao extends vegetaisDao{
  constructor(){
    super ('vegetais.csv')

    const arr = this._strContent.split('\n').slice(1,30)
    arr.forEach((v) => {
      const values =v.split (',')
      const vegetal: Vegetais ={
        id: values [0],
        name: values [1],
        imageURL:values [2],
        benefits:values[3],
      }     
      this._vegetais.push(vegetal) 
    })

  }
}