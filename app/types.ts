
export interface IInventoryItem {
  name: string
  quality: number
  sellIn: number
}

export interface IInventoryManager {
  updateQuality: () => IInventoryItem[]
}

export enum Rules {
  AgedBrie = 'Aged Brie',
  BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
  SulfurasHandOfRagnaros = 'Sulfuras, Hand of Ragnaros'
}
