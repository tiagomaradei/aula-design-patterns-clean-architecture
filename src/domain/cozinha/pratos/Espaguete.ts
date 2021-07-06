import Massa from '../ingredientes/Massa';
import Molho from '../ingredientes/Molho';
import ITecnica from '../tecnicas/ITecnica';
import IPrato from './IPrato';

export default abstract class Espaguete implements IPrato {
  constructor(
    private ingredientes: {
      massa: Massa;
      molho: Molho;
    },

    private tecnicaCozimento: ITecnica,
  ) {}

  public execute(): void {
    console.log('Iniciando Espaguete...');
    console.log('Preparando massa:', this.ingredientes.massa.getDescription());
    console.log('Preparando molho:', this.ingredientes.molho.getDescription());
    console.log(this.tecnicaCozimento.executarTecnica());
    console.log('Espaguete finalizado!');
  }
}
