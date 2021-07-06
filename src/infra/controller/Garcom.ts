import Cardapio from 'infra/cardapio/Carpio';

export default class Garcom {
  public fazerPedido(prato: string): void {
    new Cardapio(prato).execute();
  }
}
