import IPrato from 'domain/cozinha/pratos/IPrato';
import EspagueteAModaDaCasa from 'infra/factory/EspagueteAModaDaCasa';
import StrogonoffAModaDaCasa from 'infra/factory/StrogonoffAModaDaCasa';
import StrogonoffAModaDoChefe from 'infra/factory/StrogonoffAModaDoChefe';

export default class Cardapio {
  private prato: IPrato;

  constructor(prato: string) {
    switch (prato) {
      case 'espagueteAModaDaCasa':
        this.prato = new EspagueteAModaDaCasa();
        break;
      case 'strogonoffAModaCasa':
        this.prato = new StrogonoffAModaDaCasa();
        break;
      case 'strogonoffAModaChefe':
        this.prato = new StrogonoffAModaDoChefe();
        break;
      default:
        this.prato = new EspagueteAModaDaCasa();
        break;
    }
  }

  public execute(): void {
    this.prato.execute();
  }
}
