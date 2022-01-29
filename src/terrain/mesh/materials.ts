import * as THREE from 'three'
import stone from '../../../textures/block/stone.png'
import coal_ore from '../../../textures/block/coal_ore.png'
import iron_ore from '../../../textures/block/iron_ore.png'
import grass_side from '../../../textures/block/grass_block_side.png'
import grass_top_green from '../../../textures/block/grass_top_green.png'
import dirt from '../../../textures/block/dirt.png'
import oak_log from '../../../textures/block/oak_log.png'
import oak_log_top from '../../../textures/block/oak_log_top.png'
import oak_leaves from '../../../textures/block/oak_leaves.png'
import sand from '../../../textures/block/sand.png'
import water from '../../../textures/block/water.png'

export enum MaterialType {
  grass = 'grass',
  dirt = 'dirt',
  tree = 'tree',
  leaf = 'leaf',
  sand = 'sand',
  water = 'water',
  stone = 'stone',
  coal = 'coal'
}

let loader = new THREE.TextureLoader()

// load texture
const grassTopMaterial = loader.load(grass_top_green)
const grassMaterial = loader.load(grass_side)
const treeMaterial = loader.load(oak_log)
const treeTopMaterial = loader.load(oak_log_top)
const dirtMaterial = loader.load(dirt)
const stoneMaterial = loader.load(stone)
const coalMaterial = loader.load(coal_ore)
const ironMaterial = loader.load(iron_ore)
const leafMaterial = loader.load(oak_leaves)
const sandMaterial = loader.load(sand)
const waterMaterial = loader.load(water)

// pixelate texture
grassTopMaterial.magFilter = THREE.NearestFilter
grassMaterial.magFilter = THREE.NearestFilter
treeMaterial.magFilter = THREE.NearestFilter
treeTopMaterial.magFilter = THREE.NearestFilter
dirtMaterial.magFilter = THREE.NearestFilter
stoneMaterial.magFilter = THREE.NearestFilter
coalMaterial.magFilter = THREE.NearestFilter
ironMaterial.magFilter = THREE.NearestFilter
leafMaterial.magFilter = THREE.NearestFilter
sandMaterial.magFilter = THREE.NearestFilter
waterMaterial.magFilter = THREE.NearestFilter

export default class Materials {
  materials = {
    grass: [
      new THREE.MeshStandardMaterial({ map: grassMaterial }),
      new THREE.MeshStandardMaterial({ map: grassMaterial }),
      new THREE.MeshStandardMaterial({
        map: grassTopMaterial
      }),
      new THREE.MeshStandardMaterial({ map: dirtMaterial }),
      new THREE.MeshStandardMaterial({ map: grassMaterial }),
      new THREE.MeshStandardMaterial({ map: grassMaterial })
    ],
    dirt: new THREE.MeshStandardMaterial({ map: dirtMaterial }),
    sand: new THREE.MeshStandardMaterial({ map: sandMaterial }),
    tree: [
      new THREE.MeshStandardMaterial({ map: treeMaterial }),
      new THREE.MeshStandardMaterial({ map: treeMaterial }),
      new THREE.MeshStandardMaterial({ map: treeTopMaterial }),
      new THREE.MeshStandardMaterial({ map: treeTopMaterial }),
      new THREE.MeshStandardMaterial({ map: treeMaterial }),
      new THREE.MeshStandardMaterial({ map: treeMaterial })
    ],
    leaf: new THREE.MeshStandardMaterial({
      map: leafMaterial,
      color: new THREE.Color(0, 1, 0),
      transparent: true
    }),
    water: new THREE.MeshStandardMaterial({
      map: waterMaterial,
      transparent: true,
      opacity: 0.7
    }),
    stone: new THREE.MeshStandardMaterial({ map: stoneMaterial }),
    coal: new THREE.MeshStandardMaterial({ map: coalMaterial })
  }

  get = (
    type: MaterialType
  ): THREE.MeshStandardMaterial | THREE.MeshStandardMaterial[] => {
    return this.materials[type]
  }
}
