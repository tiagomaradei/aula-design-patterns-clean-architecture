import Strogonoff from 'domain/cozinha/pratos/Strogonoff';
import ModaDoChefe from 'domain/cozinha/tecnicas/ModaDoChefe';
import ArrozBranco from 'providers/ingredientes/arroz/ArrozBranco';
import BatataPalha from 'providers/ingredientes/batata/BatataPalha';
import FileMignon from 'providers/ingredientes/carne/FileMignon';
import Bolonhesa from 'providers/ingredientes/molho/Bolanhesa';

export default class StrogonoffAModaDoChefe extends Strogonoff {
  constructor() {
    super(
      {
        arroz: new ArrozBranco(),
        batata: new BatataPalha(),
        carne: new FileMignon(),
        molho: new Bolonhesa(),
      },
      new ModaDoChefe(),
    );
  }
}
