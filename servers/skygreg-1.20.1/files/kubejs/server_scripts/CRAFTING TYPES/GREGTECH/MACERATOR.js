// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

  let ULV = 8
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920

// fluix_dust

event.recipes.gtceu.macerator('kubejs:macerator/fluix_dust')
.itemInputs('ae2:fluix_crystal')
.itemOutputs('ae2:fluix_dust')
.duration(20)
.EUt(ULV)

// concrete_dust

event.remove ({ id: 'gtceu:macerator/macerate_white_concrete'})
event.recipes.gtceu.macerator('kubejs:macerator/concrete_dust')
.itemInputs('#forge:storage_blocks/concrete')
.itemOutputs('gtceu:concrete_dust')
.duration(98)
.EUt(2)

// titanium_fluid_cell

event.remove ({ id: 'gtceu:macerator/macerate_titanium_fluid_cell'})
event.recipes.gtceu.macerator('kubejs:macerator/titanium_fluid_cell')
.itemInputs('gtceu:titanium_fluid_cell')
.itemOutputs('6x gtceu:titanium_dust')
.duration(714)
.EUt(32)

// glowstone_particles

event.recipes.gtceu.macerator('kubejs:macerator/glowstone_particles')
.itemInputs('minecraft:glowstone_dust')
.itemOutputs('12x laboratoryblocks:glowstone_particles')
.duration(20)
.EUt(8)

// redstone_particles

event.recipes.gtceu.macerator('kubejs:macerator/redstone_particles')
.itemInputs('minecraft:redstone')
.itemOutputs('12x laboratoryblocks:redstone_particles')
.duration(20)
.EUt(8)


// fin //

  })



//1265 @8:05