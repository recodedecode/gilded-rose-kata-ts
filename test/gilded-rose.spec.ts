import { Item, GildedRose } from '@/gilded-rose'
import fixtures from './fixtures.json'

describe('Gilded Rose', () => {

  fixtures.data.forEach(fixtureGroup => {

    describe(`Gilded Rose Item '${fixtureGroup.name}'`, () => {

      fixtureGroup.data.forEach(({ name, input, output }) => {

        it(`should udpate item quality from sell in '${input.sellIn} -> ${output.sellIn}' and quality '${input.quality} - ${output.quality}'`, () => {
          const testCaseItem = new Item(name, input.sellIn, input.quality)
          const gildedRose = new GildedRose([testCaseItem])
          const [resultItem] = gildedRose.updateQuality()
      
          expect(resultItem instanceof Item).toBeTruthy()
          expect(resultItem.quality).toEqual(output.quality)
          expect(resultItem.sellIn).toEqual(output.sellIn)
        })

      })

    })
  
  })

})
