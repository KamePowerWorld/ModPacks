// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// Listen to item tag event
ServerEvents.tags('item', event => {
  event.add('forge:dyes/red', 'minecraft:redstone')

  // event.add('curios:hands', 'saturatingitem:saturating_item')

  event.add('forge:planks/wood', '#minecraft:planks')
  event.add('minecraft:pickaxes', 'ex_hammers:stone_hammer')
  event.add('minecraft:pickaxes', 'ex_hammers:iron_hammer')
  event.add('minecraft:pickaxes', 'ex_hammers:diamond_hammer')
  event.add('minecraft:pickaxes', 'ex_hammers:netherite_hammer')

  event.add('forge:storage_blocks/coal_coke', '#forge:storage_blocks/coke')
  event.add('forge:coal_coke', '#forge:gems/coke')

  event.remove('forge:dyes/brown', 'enderio:organic_brown_dye')
  event.remove('forge:dyes/green', 'enderio:organic_green_dye')
  event.remove('forge:dyes/black', 'enderio:organic_black_dye')
  event.remove('forge:dusts/coal', 'enderio:powdered_coal')
  event.remove('forge:dusts/iron', 'enderio:powdered_iron')
  event.remove('forge:dusts/gold', 'enderio:powdered_gold')
  event.remove('forge:dusts/copper', 'enderio:powdered_copper')
  event.remove('forge:dusts/tin', 'enderio:powdered_tin')
  event.remove('forge:dusts/cobalt', 'enderio:powdered_cobalt')
  event.remove('forge:dusts/ender_pearl', 'enderio:powdered_ender_pearl')
  event.remove('forge:dusts/quartz', 'enderio:powdered_quartz')
  event.remove('forge:dusts/lapis', 'enderio:powdered_lapis_lazuli')
  event.remove('forge:dusts/obsidian', 'enderio:powdered_obsidian')
  event.remove('forge:dusts/steel', 'enderio:powdered_steel')
  event.remove('forge:dusts/ender_pearl', 'ae2:ender_dust')

  event.remove('forge:ingots/steel', 'davebuildingmod:steel_ingot')
  event.remove('forge:silicon', 'enderio:silicon')

})

// Listen to block tag event
ServerEvents.tags('block', event => {
  event.add('minecraft:mineable/pickaxe', 'travelanchors:travel_anchor')

  event.add('sfg:tier_1_generator', 'gtceu:cupronickel_coil_block')

  event.add('infinite_blocks:infinite_blocks', [
    'xtonesreworked:xtone_tile',
    '#forge:concrete',
    '#minecraft:terracotta',
    'laboratoryblocks:laboratory_block',
  ])






  event.add('domum_ornamentum:default', 'infinite_blocks:blackest_stone')
  event.add('domum_ornamentum:concrete', 'infinite_blocks:blackest_stone')








})






ServerEvents.blockLootTables(event => {
  event.addSimpleBlock('xtonesreworked:xtone_tile', 'xtonesreworked:xtone_tile')
})