import { clamp } from './helpers'
import { IInventoryItem, Rules } from '../types'


export const ruleDefault = (curr: IInventoryItem) => {

  if (curr.name === Rules.AgedBrie
      || curr.name === Rules.BackstagePasses
      || curr.name === Rules.Conjured
      || curr.name === Rules.SulfurasHandOfRagnaros) {
    return curr
  }

  const next = { ...curr }
  next.sellIn = next.sellIn - 1

  if (next.sellIn < 0 && next.quality > 0) {
    next.quality = clamp(next.quality - 2)
  }
  else if (next.quality > 0) {
    next.quality = clamp(next.quality - 1)
  }

  return next
}
