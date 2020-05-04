export default class ItemsService {
  public items: string[] = [];
  static instance: ItemsService | null = null;
  static createInstance() {
    var object = new ItemsService();
    return object;
  }

  static getInstance () {
    if (!ItemsService.instance) {
      ItemsService.instance = ItemsService.createInstance();
    }
    return ItemsService.instance;
  }

  public add(item: string) {
    this.items.push(item);
  }

  public getAll() {
    return this.items;
  }
  
}