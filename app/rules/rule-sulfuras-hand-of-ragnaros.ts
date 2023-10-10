import { createTypedRule } from './helpers'
import { Rules } from '../types'


export const ruleSulfurasHandOfRagnaros = createTypedRule(Rules.SulfurasHandOfRagnaros, (curr) => ({
  ...curr,
}))
