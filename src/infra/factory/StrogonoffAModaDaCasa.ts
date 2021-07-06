import Strogonoff from 'domain/cozinha/pratos/Strogonoff';
import ModaDaCasa from 'domain/cozinha/tecnicas/ModaDaCasa';
import ArrozBranco from 'providers/ingredientes/arroz/ArrozBranco';
import BatataPalha from 'providers/ingredientes/batata/BatataPalha';
import FileMignon from 'providers/ingredientes/carne/FileMignon';
import Sugo from 'providers/ingredientes/molho/Sugo';

export default class StrogonoffAModaDaCasa extends Strogonoff {
  constructor() {
    super(
      {
        arroz: new ArrozBranco(),
        batata: new BatataPalha(),
        carne: new FileMignon(),
        molho: new Sugo(),
      },
      new ModaDaCasa(),
    );
  }
}
