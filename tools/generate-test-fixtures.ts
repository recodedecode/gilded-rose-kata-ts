import fs from 'fs'
import { Item, GildedRose } from '../app'


type TestFixtureArg = {
  quality: number
  sellIn: number
}

type TestFixture = {
  name: string
  input: TestFixtureArg
  output: TestFixtureArg
}

type CategoryFixture = {
  name: string
  data: TestFixture[]
}

const main = async () => {

  const names = [
    '+5 Dexterity Vest', // appears to have no implementation
    'Aged Brie',
    'Elixir of the Mongoose',
    'Sulfuras, Hand of Ragnaros',
    'Backstage passes to a TAFKAL80ETC concert',
  ]

  // These values are sourced from the original app code.
  // A margin of 1 has been placed on either side to ensure
  // min/max boundaries are respected.
  const minQuality = -1
  const maxQuality = 51
  const minSellIn = -1
  const maxSellIn = 12

  const fixtures: CategoryFixture[] = []
  let totalTests = 0

  for (const name of names) {

    const group: CategoryFixture = {
      name,
      data: [],
    }
  
    for (let quality = minQuality; quality < maxQuality; quality ++) {

      for (let sellIn = minSellIn; sellIn < maxSellIn; sellIn ++) {

        const testCaseItem = new Item(name, sellIn, quality)
        const gildedRose = new GildedRose([testCaseItem])
        const [testResultItem] = gildedRose.updateQuality()

        group.data.push({
          name,
          input: {
            quality,
            sellIn,
          },
          output: {
            quality: testResultItem.quality,
            sellIn: testResultItem.sellIn,
          },
        })

        totalTests ++
      }
    }

    fixtures.push(group)
  }

  try {
    const content = JSON.stringify({ data: fixtures }, null, 2)
    fs.writeFileSync('./test/fixtures.json', content)
  }
  catch (error) {
  
    if (error instanceof Error) {
      console.log(`Failed to write fitures.json file - ${error.message}`)
      return
    }
    console.error(error)
  }

  console.log('\nSuccessfully generated fixtures.')
  console.log(' - fixture groups: ', fixtures.length)
  console.log(' - fixture tests: ', totalTests)
}

main()
