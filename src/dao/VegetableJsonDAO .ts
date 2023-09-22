import { Vegetais } from '../models/Vegetais';
import { vegetaisDao } from './VegetaisDao';

export class VegetaisJsonDao extends vegetaisDao{
   constructor(){
    super('vegetais.json')
    const objs : Vegetais [] = JSON.parse(this._strContent)
    this._vegetais= objs
   }
}