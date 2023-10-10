
export interface IInventoryItem {
  name: string
  quality: number
  sellIn: number
}

export interface IInventoryManager {
  updateQuality: () => IInventoryItem[]
}
