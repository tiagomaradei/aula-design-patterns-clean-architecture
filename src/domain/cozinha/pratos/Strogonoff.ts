import Arroz from '../ingredientes/Arroz';
import Batata from '../ingredientes/Batata';
import Carne from '../ingredientes/Carne';
import Molho from '../ingredientes/Molho';
import ITecnica from '../tecnicas/ITecnica';
import IPrato from './IPrato';

export default abstract class Strogonoff implements IPrato {
  constructor(
    private ingredientes: {
      molho: Molho;
      carne: Carne;
      batata: Batata;
      arroz: Arroz;
    },

    private tecnicaCozimento: ITecnica,
  ) {}

  public execute(): void {
    console.log('Iniciando Strogonoff...');
    console.log('Preparando carne:', this.ingredientes.carne.getDescription());
    console.log('Preparando molho:', this.ingredientes.molho.getDescription());
    console.log(
      'Preparando batata:',
      this.ingredientes.batata.getDescription(),
    );
    console.log('Preparando arroz:', this.ingredientes.arroz.getDescription());
    console.log(this.tecnicaCozimento.executarTecnica());
    console.log('Espaguete Strogonoff!');
  }
}
