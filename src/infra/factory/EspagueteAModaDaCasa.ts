import Espaguete from 'domain/cozinha/pratos/Espaguete';
import ModaDaCasa from 'domain/cozinha/tecnicas/ModaDaCasa';
import Capelete from 'providers/ingredientes/massa/Capelete';
import Bolonhesa from 'providers/ingredientes/molho/Bolanhesa';

export default class EspagueteAModaDaCasa extends Espaguete {
  constructor() {
    super(
      {
        massa: new Capelete(),
        molho: new Bolonhesa(),
      },
      new ModaDaCasa(),
    );
  }
}
