import ITecnica from './ITecnica';

export default class ModaDoChefe implements ITecnica {
  public executarTecnica(): string {
    return 'Cozinhando a moda do chefe...';
  }
}
