import { createTypedRule, clamp } from './helpers'
import { Rules } from '../types'


const loseValue = 2

export const ruleConjured = createTypedRule(Rules.Conjured, (curr) => ({
  ...curr,
  quality: curr.sellIn - 1 < 0
    ? clamp(curr.quality - loseValue * 2)
    : clamp(curr.quality - loseValue),
  sellIn: curr.sellIn - 1,
}))
