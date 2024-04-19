export interface Item {
  name: string;
  numShards: number;
  weight: number;
  image: string;
}

export const items: Item[] = [
  {
    name: 'AirPods',
    numShards: 15,
    weight: 0.1,
    image: 'airpods.png'
  },
  {
    name: 'Pillow',
    numShards: 4,
    weight: 0.35,
    image: 'pillow.png'
  },
  {
    name: 'Shirt',
    numShards: 5,
    weight: 0.45,
    image: 'shirt.png'
  },
  {
    name: 'Computer',
    numShards: 30,
    weight: 0.1,
    image: 'computer.png'
  },
]