import ITecnica from './ITecnica';

export default class ModaDaCasa implements ITecnica {
  public executarTecnica(): string {
    return 'Cozinhando a moda da casa...';
  }
}
