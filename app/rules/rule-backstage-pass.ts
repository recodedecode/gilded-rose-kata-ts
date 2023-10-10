import { createTypedRule, clamp } from './helpers'
import { Rules } from '../types'


export const ruleBackstagePass = createTypedRule(Rules.BackstagePasses, (curr) => {

  const next = { ...curr }

  if (curr.sellIn <= 0) {
    next.quality = 0
  }
  else if (curr.sellIn <= 5) {
    next.quality = clamp(curr.quality + 3, 50)
  }
  else if (curr.sellIn <= 10) {
    next.quality = clamp(curr.quality + 2, 50)
  }
  else {
    next.quality = clamp(curr.quality + 1, 50)
  }

  next.sellIn = curr.sellIn - 1

  return next
})
