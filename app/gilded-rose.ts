import { IInventoryItem, IInventoryManager } from './types'


enum RuleTypes {
  AgedBrie = 'Aged Brie',
  BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
  SulfurasHandOfRagnaros = 'Sulfuras, Hand of Ragnaros'
}

export class GildedRose implements IInventoryManager {

  items: IInventoryItem[]

  constructor (
    items: IInventoryItem[] = [],
  ) {
    this.items = items
  }

  updateQuality () {

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      this.items[i] = applyRules(item)
    }

    return this.items
  }
}

const applyRules = (item: IInventoryItem): IInventoryItem => {
  switch (item.name) {
    case RuleTypes.AgedBrie:
      return agedBrieRule(item)
    case RuleTypes.BackstagePasses:
      return backStagePassRule(item)
    case RuleTypes.SulfurasHandOfRagnaros:
      return sulfurasRule(item)
  }
  return defaultRule(item)
}

const agedBrieRule = (item: IInventoryItem): IInventoryItem => {

  if (item.quality < 50) {
    item.quality = item.quality + 1
  }

  item.sellIn = item.sellIn - 1

  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1
  }

  return item
}

const backStagePassRule = (item: IInventoryItem): IInventoryItem => {

  if (item.quality < 50) {
    item.quality = item.quality + 1
    if (item.sellIn < 11) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
    if (item.sellIn < 6) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
  }

  item.sellIn = item.sellIn - 1

  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality
  }

  return item
}

const sulfurasRule = (item: IInventoryItem): IInventoryItem => {
  return item
}

const defaultRule = (item: IInventoryItem): IInventoryItem => {

  if (item.quality > 0) {
    item.quality = item.quality - 1
  }

  item.sellIn = item.sellIn - 1

  if (item.sellIn < 0) {
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
  }

  return item
}
