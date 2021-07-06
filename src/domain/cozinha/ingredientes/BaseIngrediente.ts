export default abstract class BaseIngrediente {
  protected description: string;

  public getDescription(): string {
    return this.description;
  }
}
