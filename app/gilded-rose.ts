import { Item } from './item'
import { rules } from './rules'
import { IInventoryItem, IInventoryManager } from './types'


export class GildedRose implements IInventoryManager {

  items: IInventoryItem[]

  constructor (
    items: IInventoryItem[] = [],
  ) {
    this.items = items
  }

  updateQuality () {

    this.items.forEach((item, index) => {

      let next = item
    
      rules.forEach(rule => {
        next = rule(next)
      })
    
      this.items[index] = new Item(next.name, next.sellIn, next.quality)
    })

    return this.items
  }
}
