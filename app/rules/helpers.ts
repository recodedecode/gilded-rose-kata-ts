import { IInventoryItem } from '../types'


type IRule = <T extends IInventoryItem>(curr: T) => T

export const clamp = (num: number, max = 50, min = 0) =>
  Math.min(Math.max(num, min), max)

export const createTypedRule = <T extends IInventoryItem>(type: string, rule: IRule) => (curr: T): T =>
  curr.name === type ? rule(curr) : curr
