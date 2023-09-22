import { join } from 'path';
import { Vegetais } from '../models/Vegetais';
import { readFileSync } from 'fs';

export class vegetaisDao{
  protected _vegetais: Vegetais []
  protected _strContent: string

  constructor (filename:string){
    const fileName= join (__dirname, '..', 'data', filename)
    this._strContent= readFileSync(fileName, 'utf-8')
    this._vegetais= []
  }

  findVegetaisById(id:string): Vegetais|undefined{
    const vegetal = this._vegetais.find((v) => v.id === id);
    return vegetal;
  }

  findVegetaisByInitialLetter(letter: string): Vegetais[] {
  const vegetais = this._vegetais.filter((v) => {
    if (typeof v.name === 'string' && v.name.toLowerCase().startsWith(letter.toLowerCase())) {
      return true;
    }
    return false;
  });
  return vegetais;
}

findVegetaisByBenefits(benefits: string): Vegetais[] {
  const vegetais = this._vegetais.filter((v) => {
    if (typeof v.benefits === 'string' && v.benefits.toLowerCase().includes(benefits.toLowerCase())) {
      return true;
    }
    return false;
  });
  return vegetais;
}

}