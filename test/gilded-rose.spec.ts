import { Item, GildedRose } from '@/index'
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

  describe(`Gilded Rose Item 'Conjured'`, () => {

    const name = 'Conjured'

    const tests = [
      [10, 9, 51, 49],
      [10, 9, 50, 48],
      [2, 1, 10, 8],
      [1, 0, 10, 8],
      [0, -1, 10, 6],
      [-1, -2, 10, 6],
      [-2, -3, 2, 0],
    ]

    tests.forEach(([inputSellIn, outputSellIn, inputQuality, outputQuality]) => {
    
      it(`should udpate item quality from sell in '${inputSellIn} -> ${outputSellIn}' and quality '${inputQuality} - ${outputQuality}'`, () => {
        const testCaseItem = new Item(name, inputSellIn, inputQuality)
        const gildedRose = new GildedRose([testCaseItem])
        const [resultItem] = gildedRose.updateQuality()
    
        expect(resultItem instanceof Item).toBeTruthy()
        expect(resultItem.quality).toEqual(outputQuality)
        expect(resultItem.sellIn).toEqual(outputSellIn)
      })
    })
  
  })

})
