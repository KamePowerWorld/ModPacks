// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {


  let ULV = 8
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680

  
event.remove ({ id: 'angelring:energetic_angel_ring'})
event.remove ({ id: 'angelring:leadstone_angel_ring'})
event.remove ({ id: 'angelring:hardened_angel_ring'})
event.remove ({ id: 'angelring:reinforced_angel_ring'})
event.remove ({ id: 'angelring:resonant_angel_ring'})


event.remove ({ id: 'rfd:clay_gen_tier_1' })
event.remove ({ id: 'rfd:clay_gen_tier_2' })
event.remove ({ id: 'rfd:clay_gen_tier_3' })
event.remove ({ id: 'rfd:clay_gen_tier_4' })
event.remove ({ id: 'rfd:clay_gen_tier_5' })

event.remove ({ id: 'rfd:clean_gen_tier_1' })
event.remove ({ id: 'rfd:clean_gen_tier_2' })
event.remove ({ id: 'rfd:clean_gen_tier_3' })
event.remove ({ id: 'rfd:clean_gen_tier_4' })
event.remove ({ id: 'rfd:clean_gen_tier_5' })

event.remove ({ id: 'rfd:fungus_gen_tier_1' })
event.remove ({ id: 'rfd:fungus_gen_tier_2' })
event.remove ({ id: 'rfd:fungus_gen_tier_3' })
event.remove ({ id: 'rfd:fungus_gen_tier_4' })
event.remove ({ id: 'rfd:fungus_gen_tier_5' })

event.remove ({ id: 'rfd:glowstone_gen_tier_1' })
event.remove ({ id: 'rfd:glowstone_gen_tier_2' })
event.remove ({ id: 'rfd:glowstone_gen_tier_3' })
event.remove ({ id: 'rfd:glowstone_gen_tier_4' })
event.remove ({ id: 'rfd:glowstone_gen_tier_5' })

event.remove ({ id: 'rfd:grass_gen_tier_1' })
event.remove ({ id: 'rfd:grass_gen_tier_2' })
event.remove ({ id: 'rfd:grass_gen_tier_3' })
event.remove ({ id: 'rfd:grass_gen_tier_4' })
event.remove ({ id: 'rfd:grass_gen_tier_5' })

event.remove ({ id: 'rfd:gravel_gen_tier_1' })
event.remove ({ id: 'rfd:gravel_gen_tier_2' })
event.remove ({ id: 'rfd:gravel_gen_tier_3' })
event.remove ({ id: 'rfd:gravel_gen_tier_4' })
event.remove ({ id: 'rfd:gravel_gen_tier_5' })

event.remove ({ id: 'rfd:ice_gen_tier_1' })
event.remove ({ id: 'rfd:ice_gen_tier_2' })
event.remove ({ id: 'rfd:ice_gen_tier_3' })
event.remove ({ id: 'rfd:ice_gen_tier_4' })
event.remove ({ id: 'rfd:ice_gen_tier_5' })

event.remove ({ id: 'rfd:obsidian_gen_tier_1' })
event.remove ({ id: 'rfd:obsidian_gen_tier_2' })
event.remove ({ id: 'rfd:obsidian_gen_tier_3' })
event.remove ({ id: 'rfd:obsidian_gen_tier_4' })
event.remove ({ id: 'rfd:obsidian_gen_tier_5' })

event.remove ({ id: 'rfd:quartz_gen_tier_1' })
event.remove ({ id: 'rfd:quartz_gen_tier_2' })
event.remove ({ id: 'rfd:quartz_gen_tier_3' })
event.remove ({ id: 'rfd:quartz_gen_tier_4' })
event.remove ({ id: 'rfd:quartz_gen_tier_5' })

event.remove ({ id: 'rfd:redstone_gen_tier_1' })
event.remove ({ id: 'rfd:redstone_gen_tier_2' })
event.remove ({ id: 'rfd:redstone_gen_tier_3' })
event.remove ({ id: 'rfd:redstone_gen_tier_4' })
event.remove ({ id: 'rfd:redstone_gen_tier_5' })

event.remove ({ id: 'rfd:snow_gen_tier_1' })
event.remove ({ id: 'rfd:snow_gen_tier_2' })
event.remove ({ id: 'rfd:snow_gen_tier_3' })
event.remove ({ id: 'rfd:snow_gen_tier_4' })
event.remove ({ id: 'rfd:snow_gen_tier_5' })

event.remove ({ id: 'rfd:sand_gen_tier_1' })
event.remove ({ id: 'rfd:sand_gen_tier_2' })
event.remove ({ id: 'rfd:sand_gen_tier_3' })
event.remove ({ id: 'rfd:sand_gen_tier_4' })
event.remove ({ id: 'rfd:sand_gen_tier_5' })

event.remove ({ id: 'rfd:soulsand_gen_tier_1' })
event.remove ({ id: 'rfd:soulsand_gen_tier_2' })
event.remove ({ id: 'rfd:soulsand_gen_tier_3' })
event.remove ({ id: 'rfd:soulsand_gen_tier_4' })
event.remove ({ id: 'rfd:soulsand_gen_tier_5' })

event.remove ({ id: 'rfd:ore_gen_tier_1' })
event.remove ({ id: 'rfd:ore_gen_tier_2' })
event.remove ({ id: 'rfd:ore_gen_tier_3' })
event.remove ({ id: 'rfd:ore_gen_tier_4' })
event.remove ({ id: 'rfd:ore_gen_tier_5' })

event.remove ({ id: 'rfd:dye_gen_tier_1' })
event.remove ({ id: 'rfd:dye_gen_tier_2' })
event.remove ({ id: 'rfd:dye_gen_tier_3' })
event.remove ({ id: 'rfd:dye_gen_tier_4' })
event.remove ({ id: 'rfd:dye_gen_tier_5' })

event.remove ({ id: 'rfd:crushed_netherrack_gen_tier_1' })
event.remove ({ id: 'rfd:crushed_netherrack_gen_tier_2' })
event.remove ({ id: 'rfd:crushed_netherrack_gen_tier_3' })
event.remove ({ id: 'rfd:crushed_netherrack_gen_tier_4' })
event.remove ({ id: 'rfd:crushed_netherrack_gen_tier_5' })

event.remove ({ id: 'rfd:crushed_endstone_gen_tier_1' })
event.remove ({ id: 'rfd:crushed_endstone_gen_tier_2' })
event.remove ({ id: 'rfd:crushed_endstone_gen_tier_3' })
event.remove ({ id: 'rfd:crushed_endstone_gen_tier_4' })
event.remove ({ id: 'rfd:crushed_endstone_gen_tier_5' })

event.remove ({ id: 'rfd:dust_gen_tier_1' })
event.remove ({ id: 'rfd:dust_gen_tier_2' })
event.remove ({ id: 'rfd:dust_gen_tier_3' })
event.remove ({ id: 'rfd:dust_gen_tier_4' })
event.remove ({ id: 'rfd:dust_gen_tier_5' })

event.remove ({ id: 'angelring:diamond_ring' })

event.remove ({ id: 'davebuildingmod:rec_steel_ingot' })
event.remove ({ id: 'davebuildingmod:rec_steel_block' })
event.remove ({ id: 'davebuildingmod:copper_boiler' })
event.remove ({ id: 'davebuildingmod:zinc_boiler' })
event.remove ({ id: 'davebuildingmod:brass_boiler' })

event.remove ({ id: 'exocraft:atlas_unit' })
event.remove ({ id: 'exocraft:ogre_unit' })
event.remove ({ id: 'exocraft:stryder_unit' })
event.remove ({ id: 'exocraft:legion_unit' })
event.remove ({ id: 'exocraft:ion_unit' })
event.remove ({ id: 'exocraft:empty_unit' })

event.remove ({ mod: 'pipez'})

event.remove ({ mod: 'emi'})
event.remove ({ id: 'emi:/crafting/repairing/rftoolsutility/charged_porter'})

event.remove({
  not: [
    { type: 'enderio:painting' },
    { type: 'enderio:tank' },
      { type: 'enderio:enchanting' }
  ],
  mod: 'enderio'
});

event.remove({ id: 'minecraft:charcoal' })

event.remove({ id: 'ae2:inscriber/ender_dust' })

event.remove({ output: 'expatternprovider:infinity_cell' })

event.remove({ id: 'exocraft:lava_crystal' })
event.remove({ id: 'exocraft:lava_crystal_block' })
event.remove({ id: 'exocraft:lava_crystal_ore' })

event.remove({ id: 'apotheosis:inert_trident' })
event.remove({ id: 'apotheosis:enchanting/trident' })
event.remove({ id: 'apotheosis:cobweb' })

event.remove({ id: 'advgenerators:turbines/blade' })

event.remove({ id: 'minecraft:glowstone_dust' })

// bamboo_planks

    event.shaped('1x minecraft:bamboo_planks', [
    '   ',
    ' A ',
    '   ',
  ], {
    A: '#minecraft:bamboo_blocks',
  }
)

// bamboo_planks

    event.remove({ output: 'minecraft:bamboo_planks' })
    event.shaped('2x minecraft:bamboo_planks', [
    ' B ',
    ' A ',
    '   ',
  ], {
    A: '#minecraft:bamboo_blocks',
    B: '#forge:tools/saws',
  }
)

// cherry_planks

    event.shaped('2x minecraft:cherry_planks', [
    '   ',
    ' A ',
    '   ',
  ], {
    A: 'minecraft:cherry_log',
  }
)

// cherry_planks

    event.remove({ output: 'minecraft:cherry_planks' })
    event.shaped('4x minecraft:cherry_planks', [
    ' B ',
    ' A ',
    '   ',
  ], {
    A: 'minecraft:cherry_log',
    B: '#forge:tools/saws',
  }
)

// rubber_planks

    event.shaped('6x gtceu:rubber_planks', [
    ' B ',
    ' A ',
    '   ',
  ], {
    A: 'gtceu:rubber_log',
    B: '#forge:tools/saws',
  }
)

// glowstone_particles

    event.remove({ output: 'laboratoryblocks:glowstone_particles' })
    event.shaped('8x laboratoryblocks:glowstone_particles', [
    'B  ',
    'A  ',
    '   ',
  ], {
    A: '#forge:dusts/glowstone',
    B: '#forge:tools/mortars',
  }
)

// redstone_particles

    event.remove({ output: 'laboratoryblocks:redstone_particles' })
    event.shaped('8x laboratoryblocks:redstone_particles', [
    'B  ',
    'A  ',
    '   ',
  ], {
    A: '#forge:dusts/redstone',
    B: '#forge:tools/mortars',
  }
)

// red_dye

    event.shaped('minecraft:red_dye', [
    'A  ',
    'B  ',
    '   ',
  ], {
    A: '#forge:dusts/redstone',
    B: '#forge:tools/mortars',
  }
)

// black_dye

    event.shaped('minecraft:black_dye', [
    'A  ',
    'B  ',
    '   ',
  ], {
    A: '#forge:dusts/coal',
    B: '#forge:tools/mortars',
  }
)

// black_dye

    event.shaped('minecraft:black_dye', [
    'A  ',
    'B  ',
    '   ',
  ], {
    A: '#forge:dusts/charcoal',
    B: '#forge:tools/mortars',
  }
)

// black_dye

    event.shaped('minecraft:black_dye', [
    'A  ',
    'B  ',
    '   ',
  ], {
    A: '#forge:dusts/carbon',
    B: '#forge:tools/mortars',
  }
)

// lime_wool

    event.shaped('minecraft:lime_wool', [
    'AA',
    'AA',
  ], {
    A: 'ex_hammers:plant_fiber',
  }
)

// string

    event.shaped('2x minecraft:string', [
    'A ',
    'B ',
  ], {
    A: 'ex_hammers:plant_fiber',
    B: '#forge:tools/knives',
  }
)

// grass_seed

    event.shaped('ex_hammers:grass_seed', [
    'A ',
    'B ',
  ], {
    A: 'minecraft:wheat_seeds',
    B: '#forge:tools/knives',
  }
)

// clay_ball

    event.shaped('3x minecraft:clay_ball', [
    'A ',
    'B ',
  ], {
    A: '#forge:tools/hammers',
    B: 'minecraft:clay',
  }
)

// simple_ore_generator

    event.remove ({ id: 'simple_resource_generators:simple_ore_generator_recipe'})
    event.shaped('simple_resource_generators:simple_ore_generator', [
    'FAF',
    'BCB',
    'GDG',
  ], {
    A: '#forge:gears/steel',
    B: 'gtceu:nickel_small_item_pipe',
    C: 'simple_resource_generators:raw_conversion_generator',
    D: 'gtceu:lead_rotor',
    F: '#forge:plates/nickel',
    G: '#forge:springs/lead',
  }
)

// random_ore_generator

    event.remove ({ output: 'simple_resource_generators:random_ore_generator'})
    event.shaped('simple_resource_generators:random_ore_generator', [
    'FAF',
    'BCB',
    'GDG',
  ], {
    A: '#forge:gears/steel',
    B: 'gtceu:nickel_small_item_pipe',
    C: 'simple_resource_generators:random_ore_block_generator_placement',
    D: 'gtceu:lead_rotor',
    F: '#forge:plates/nickel',
    G: '#forge:springs/lead',
  }
)

// netherrack_gen_tier_1

    event.shaped('rfd:netherrack_gen_tier_1', [
    'ABA',
    'CEC',
    'ADA',
  ], {
    A: 'minecraft:stone_bricks',
    B: '#minecraft:logs',
    C: 'minecraft:lava_bucket',
    D: 'gtceu:netherrack_dust',
    E: 'minecraft:glass',
  }
)

// end_gen_tier_1

    event.shaped('rfd:end_gen_tier_1', [
    'ABA',
    'CEC',
    'ADA',
  ], {
    A: 'minecraft:stone_bricks',
    B: '#minecraft:logs',
    C: 'minecraft:lava_bucket',
    D: 'gtceu:endstone_dust',
    E: 'minecraft:glass',
  }
)

// angel_ring

    event.remove ({ id: 'angelring:angel_ring'})
    event.shaped('angelring:angel_ring', [
    ' A ',
    'ABA',
    ' A ',
  ], {
    A: 'angelblockrenewed:angel_block',
    B: '#forge:rings/gold',
  }
)

// angel_block

    event.remove ({ id: 'angelblockrenewed:angel_block'})
    event.shaped('angelblockrenewed:angel_block', [
    ' A ',
    'A A',
    ' A ',
  ], {
    A: '#forge:rods/tin',
  }
)

// golden_egg

    event.shaped('mob_grinding_utils:golden_egg', [
    ' A ',
    'ABA',
    ' A ',
  ], {
    A: '#forge:rings/gold',
    B: '#forge:storage_blocks/gold',
  }
)

// rotten_egg

    event.shaped('mob_grinding_utils:rotten_egg', [
    ' A ',
    'ABA',
    ' A ',
  ], {
    A: '#forge:rings/steel',
    B: '#forge:storage_blocks/steel',
  }
)

// hp_steam_solid_boiler

    event.shaped('gtceu:hp_steam_solid_boiler', [
    'AAA',
    'ABA',
    'CDC',
  ], {
    A: '#forge:plates/steel',
    B: '#forge:tools/wrenches',
    C: '#forge:plates/rubber',
    D: 'gtceu:lp_steam_solid_boiler',
  }
)

// solid_dim_core

    event.remove ({ output: 'dimstorage:solid_dim_core'})
    event.shaped('dimstorage:solid_dim_core', [
    'AAA',
    'ABA',
    'AAA',
  ], {
    A: 'gtceu:steel_plate',
    B: 'dimstorage:dim_core',
  }
)

// dim_core

    event.remove ({ output: 'dimstorage:dim_core'})
    event.shaped('dimstorage:dim_core', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: 'gtceu:steel_plate',
    B: 'minecraft:redstone',
    C: 'minecraft:diamond',
  }
)

// dim_wall

    event.remove ({ output: 'dimstorage:dim_wall'})
    event.shaped('4x dimstorage:dim_wall', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: 'gtceu:steel_plate',
    B: 'minecraft:redstone',
    C: 'gtceu:ender_pearl_dust',
  }
)

// dimensional_tablet

    event.remove ({ output: 'dimstorage:dimensional_tablet'})
    event.shaped('dimstorage:dimensional_tablet', [
    'AEA',
    'ABA',
    'CDC',
  ], {
    A: 'gtceu:steel_rod',
    B: '#gtceu:circuits/lv',
    C: 'gtceu:rubber_plate',
    D: 'dimstorage:solid_dim_core',
    E: 'gtceu:lv_emitter',
  }
)

// ender_tank

    event.remove ({ output: 'endertanks:ender_tank'})
    event.shaped('endertanks:ender_tank', [
    'ABA',
    'CDC',
    'AEA',
  ], {
    A: '#forge:rods/steel',
    B: '#minecraft:wool',
    C: '#forge:plates/rubber',
    D: 'gtceu:steel_drum',
    E: 'gtceu:ender_pearl_dust',
  }
)

// ender_chest

    event.remove ({ output: 'enderchests:ender_chest'})
    event.shaped('enderchests:ender_chest', [
    'ABA',
    'CDC',
    'AEA',
  ], {
    A: '#forge:rods/steel',
    B: '#minecraft:wool',
    C: '#forge:plates/rubber',
    D: 'gtceu:steel_crate',
    E: '#forge:dusts/ender_pearl',
  }
)

// ender_bucket

    event.remove ({ output: 'endertanks:ender_bucket'})
    event.shaped('endertanks:ender_bucket', [
    'ABA',
    'BCB',
    'ADA',
  ], {
    A: '#forge:rings/rubber',
    B: '#forge:plates/steel',
    C: '#forge:ender_pearls',
    D: '#minecraft:wool',
  }
)

// ender_bag

    event.remove ({ output: 'enderchests:ender_bag'})
    event.shaped('enderchests:ender_bag', [
    'ABA',
    'ECE',
    'ADA',
  ], {
    A: '#forge:plates/rubber',
    B: '#forge:rings/steel',
    C: 'enderchests:ender_pouch',
    D: '#minecraft:wool',
    E: '#forge:string',
  }
)

// saw

    event.remove ({ output: 'mob_grinding_utils:saw'})
    event.shaped('mob_grinding_utils:saw', [
    'CBC',
    'BDB',
    'FEF',
  ], {
    B: 'gtceu:diamond_buzz_saw_blade',
    C: 'mob_grinding_utils:spikes',
    D: '#forge:storage_blocks/red_alloy',
    E: 'gtceu:steel_gearbox',
    F: '#gtceu:circuits/lv',
  }
)

// fan

    event.remove ({ output: 'mob_grinding_utils:fan'})
    event.shaped('mob_grinding_utils:fan', [
    'CEC',
    'DBD',
    'CAC',
  ], {
    A: 'gtceu:steel_gearbox',
    B: '#forge:rotors/steel',
    C: '#forge:plates/thorium',
    D: '#forge:plates/rubber',
    E: '#gtceu:circuits/lv',
  }
)

// spikes

    event.remove ({ output: 'mob_grinding_utils:spikes'})
    event.shaped('mob_grinding_utils:spikes', [
    ' D ',
    'DCD',
    'CBC',
  ], {
    B: '#forge:storage_blocks/thorium',
    C: '#forge:plates/rubber',
    D: 'gtceu:steel_drill_head',
  }
)

// barrel

    event.remove ({ output: 'minecraft:barrel'})
    event.shaped('minecraft:barrel', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: '#minecraft:planks',
    B: '#minecraft:logs',
    C: '#forge:gems/flint',
  }
)

// rain_shield

    event.remove ({ output: 'rainshield:rain_shield'})
    event.shaped('rainshield:rain_shield', [
    ' C ',
    ' A ',
    'BAB',
  ], {
    A: '#forge:rods/long/electrum',
    B: '#forge:plates/red_alloy',
    C: 'gtceu:lv_sensor',
  }
)

// staff_of_travelling

    event.remove ({ output: 'travelanchors:travel_staff'})
    event.shaped('travelanchors:travel_staff', [
    ' EA',
    'DBE',
    'FC ',
  ], {
    A: '#forge:ender_pearls',
    B: 'gtceu:lv_emitter',
    C: '#forge:tools/wrenches',
    D: '#forge:tools/screwdrivers',
    E: '#forge:screws/steel',
    F: '#forge:rods/long/steel',
  }
)

// travel_anchor

    event.remove ({ output: 'travelanchors:travel_anchor'})
    event.shaped('travelanchors:travel_anchor', [
    'ABA',
    'CDC',
    'ABA',
  ], {
    A: '#forge:plates/invar',
    B: '#forge:plates/rubber',
    C: '#forge:ender_pearls',
    D: 'gtceu:lv_machine_hull',
  }
)

// laser_wrench

    event.remove ({ output: 'laserio:laser_wrench'})
    event.shaped('laserio:laser_wrench', [
    'CDC',
    'EBF',
    ' A ',
  ], {
    A: '#forge:rods/tin',
    B: 'laserio:logic_chip',
    C: '#forge:bolts/red_alloy',
    D: '#forge:screws/tin',
    E: '#forge:tools/wrenches',
    F: '#forge:tools/screwdrivers',
  }
)

// laser_node

    event.remove ({ output: 'laserio:laser_node'})
    event.shaped('laserio:laser_node', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: '#forge:rods/tin',
    B: '#forge:glass_panes/colorless',
    C: 'laserio:laser_connector',
  }
)

// laser_connector

    event.remove ({ output: 'laserio:laser_connector'})
    event.shaped('laserio:laser_connector', [
    ' A ',
    'BCB',
    'DDD',
  ], {
    A: '#forge:rods/red_alloy',
    B: '#forge:foils/red_alloy',
    C: 'laserio:logic_chip',
    D: '#forge:plates/tin',
  }
)

// laser_connector_advanced

    event.shaped('laserio:laser_connector_advanced', [
    'EAE',
    'BCB',
    'DDD',
  ], {
    A: '#forge:rods/red_alloy',
    B: '#forge:plates/rubber',
    C: 'laserio:laser_connector',
    D: '#forge:plates/electrum',
    E: '#forge:ender_pearls',
  }
)

// laser_connector_advanced

    event.remove ({ output: 'laserio:laser_connector_advanced'})
    event.shaped('laserio:laser_connector_advanced', [
    'EAE',
    'BCB',
    'DDD',
  ], {
    A: 'gtceu:red_alloy_rod',
    B: 'gtceu:rubber_plate',
    C: 'laserio:logic_chip',
    D: 'gtceu:electrum_plate',
    E: 'minecraft:ender_pearl',
  }
)

// trident

    event.shaped('minecraft:trident', [
    ' BB',
    'CAB',
    'AD ',
  ], {
    A: 'gtceu:invar_long_rod',
    B: 'gtceu:steel_rod',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers',
  }
)

// yeta_wrench

    event.shaped('enderio:yeta_wrench', [
    ' A ',
    'CBA',
    'AD ',
  ], {
    A: 'gtceu:invar_rod',
    B: 'gtceu:iron_ring',
    C: '#forge:tools/wrenches',
    D: '#forge:tools/hammers',
  }
)

// flopper

    event.remove ({ output: 'flopper:flopper'})
    event.shaped('flopper:flopper', [
    'ABA',
    'ACA',
    'DAE',
  ], {
    A: 'gtceu:iron_plate',
    B: '#forge:chests/wooden',
    C: '#forge:glass/colorless',
    D: '#forge:tools/wrenches',
    E: '#forge:tools/mallets',
  }
)

// saturating_item

    event.remove ({ output: 'saturatingitem:saturating_item'})
    event.shaped('saturatingitem:saturating_item', [
    'ABC',
    'DIF',
    'GEH',
  ], {
    A: '#forge:tools/screwdrivers',
    B: 'gtceu:iron_ring',
    C: '#forge:tools/hammers',
    D: '#forge:tools/wrenches',
    E: 'minecraft:stick',
    F: '#forge:tools/mallets',
    G: '#forge:tools/saws',
    H: '#forge:tools/wire_cutters',
    I: 'minecraft:baked_potato',
  }
)

// basic_wireless_block_charger

    event.remove ({ output: 'wirelesschargers:basic_wireless_block_charger'})
    event.shaped('wirelesschargers:basic_wireless_block_charger', [
    'DED',
    'ACA',
    'ABA',
  ], {
    A: 'gtceu:steel_plate',
    B: '#gtceu:circuits/lv',
    C: 'ae2:fluix_pearl',
    D: 'gtceu:steel_rod',
    E: 'gtceu:cupronickel_spring',
  }
)

// advanced_wireless_block_charger

    event.remove ({ output: 'wirelesschargers:advanced_wireless_block_charger'})
    event.shaped('wirelesschargers:advanced_wireless_block_charger', [
    'DED',
    'ACA',
    'ABA',
  ], {
    A: 'gtceu:rubber_plate',
    B: '#gtceu:circuits/mv',
    C: 'wirelesschargers:basic_wireless_block_charger',
    D: 'minecraft:blaze_powder',
    E: 'gtceu:mv_emitter',
  }
)

// basic_wireless_player_charger

    event.remove ({ output: 'wirelesschargers:basic_wireless_player_charger'})
    event.shaped('wirelesschargers:basic_wireless_player_charger', [
    'DED',
    'ACA',
    'ABA',
  ], {
    A: 'gtceu:steel_plate',
    B: '#gtceu:circuits/lv',
    C: 'ae2:fluix_pearl',
    D: 'gtceu:steel_rod',
    E: 'gtceu:gold_spring',
  }
)

// advanced_wireless_player_charger

    event.remove ({ output: 'wirelesschargers:advanced_wireless_player_charger'})
    event.shaped('wirelesschargers:advanced_wireless_player_charger', [
    'DED',
    'ACA',
    'ABA',
  ], {
    A: 'gtceu:rubber_plate',
    B: '#gtceu:circuits/mv',
    C: 'wirelesschargers:basic_wireless_player_charger',
    D: 'minecraft:blaze_powder',
    E: 'gtceu:mv_emitter',
  }
)

// 5_to_6

    event.remove ({ output: 'dankstorage:5_to_6'})
    event.shaped('dankstorage:5_to_6', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: 'minecraft:crying_obsidian',
    B: 'minecraft:amethyst_block',
    C: 'minecraft:stick',
  }
)

// draconic_endshelf

    event.remove ({ id: 'apotheosis:draconic_endshelf'})
    event.shaped('apotheosis:draconic_endshelf', [
    ' A ',
    'BCB',
    'BBB',
  ], {
    A: 'apotheosis:infused_breath',
    B: 'minecraft:ender_pearl',
    C: 'apotheosis:endshelf',
  }
)

// item_filter

    event.shapeless('gtceu:item_filter', 
'gtceu:item_filter'
)

// item_tag_filter

    event.shapeless('gtceu:item_tag_filter', 
'gtceu:item_tag_filter'
)

// fluid_filter

    event.shapeless('gtceu:fluid_filter', 
'gtceu:fluid_filter'
)

// fluid_tag_filter

    event.shapeless('gtceu:fluid_tag_filter', 
'gtceu:fluid_tag_filter'
)

// dimensional_tank

    event.shapeless('dimstorage:dimensional_tank', 
'dimstorage:dimensional_tank'
)

// ender_tank

    event.shapeless('endertanks:ender_tank', 
'endertanks:ender_tank'
)

// fluid_tank

    event.shapeless('enderio:fluid_tank', 
'enderio:fluid_tank'
)

// pressurized_fluid_tank

    event.shapeless('enderio:pressurized_fluid_tank', 
'enderio:pressurized_fluid_tank'
)

// ender_pearl_dust

    event.shapeless('4x gtceu:ender_pearl_dust', 
[
'gtceu:beryllium_dust',
'4x gtceu:potassium_dust'
]
)

// cardboard

    event.remove ({ output: 'dustrial_decor:cardboard' })
    event.shapeless('dustrial_decor:cardboard', 
[
'2x minecraft:paper'
]
)

// warp_dust

    event.shapeless('3x waystones:warp_dust', 
[
'#forge:dusts/ender_pearl',
'3x #forge:dusts/amethyst'
]
)

// ferrite_mixture_dust

    event.shapeless('6x gtceu:ferrite_mixture_dust', 
[
'gtceu:nickel_dust',
'gtceu:zinc_dust',
'4x gtceu:iron_dust',
]
)

// lv_bender

event.shaped('gtceu:lv_bender', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:lv_electric_piston',
B: '#forge:double_plates/steel',
C: '#gtceu:circuits/lv',
D: 'gtceu:lv_machine_hull',
E: 'gtceu:lv_electric_motor',
F: 'gtceu:tin_single_cable',
}
)

// mv_bender

event.shaped('gtceu:mv_bender', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:mv_electric_piston',
B: '#forge:double_plates/aluminium',
C: '#gtceu:circuits/mv',
D: 'gtceu:mv_machine_hull',
E: 'gtceu:mv_electric_motor',
F: 'gtceu:copper_single_cable',
}
)

// hv_bender

event.shaped('gtceu:hv_bender', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:hv_electric_piston',
B: '#forge:double_plates/stainless_steel',
C: '#gtceu:circuits/hv',
D: 'gtceu:hv_machine_hull',
E: 'gtceu:hv_electric_motor',
F: 'gtceu:gold_single_cable',
}
)

// ev_bender

event.shaped('gtceu:ev_bender', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:ev_electric_piston',
B: '#forge:double_plates/titanium',
C: '#gtceu:circuits/ev',
D: 'gtceu:ev_machine_hull',
E: 'gtceu:ev_electric_motor',
F: 'gtceu:aluminium_single_cable',
}
)

// iv_bender

event.shaped('gtceu:iv_bender', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:iv_electric_piston',
B: '#forge:double_plates/tungsten_steel',
C: '#gtceu:circuits/iv',
D: 'gtceu:iv_machine_hull',
E: 'gtceu:iv_electric_motor',
F: 'gtceu:platinum_single_cable',
}
)

// luv_bender

event.shaped('gtceu:luv_bender', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:luv_electric_piston',
B: '#forge:double_plates/rhodium_plated_palladium',
C: '#gtceu:circuits/luv',
D: 'gtceu:luv_machine_hull',
E: 'gtceu:luv_electric_motor',
F: 'gtceu:platinum_single_cable',
}
)

// zpm_bender

event.shaped('gtceu:zpm_bender', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:zpm_electric_piston',
B: '#forge:double_plates/naquadah_alloy',
C: '#gtceu:circuits/zpm',
D: 'gtceu:zpm_machine_hull',
E: 'gtceu:zpm_electric_motor',
F: 'gtceu:platinum_single_cable',
}
)

// uv_bender

event.shaped('gtceu:uv_bender', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:uv_electric_piston',
B: '#forge:double_plates/darmstadtium',
C: '#gtceu:circuits/uv',
D: 'gtceu:uv_machine_hull',
E: 'gtceu:uv_electric_motor',
F: 'gtceu:platinum_single_cable',
}
)

// painting_machine

event.shaped('enderio:painting_machine', [
'ABA',
'CDC',
'EFE',
], {
A: 'gtceu:lv_electric_piston',
B: 'gtceu:empty_spray_can',
C: '#forge:dyes/white',
D: 'gtceu:lv_machine_hull',
E: 'gtceu:lv_electric_motor',
F: '#gtceu:circuits/lv',
}
)

// machine_frame

event.remove ({ id: 'rftoolsbase:machine_frame'})
event.shaped('rftoolsbase:machine_frame', [
'ABA',
'CDC',
'ABA',
], {
A: '#forge:plates/steel',
B: '#forge:foils/steel',
C: '#forge:screws/steel',
D: 'gtceu:lv_machine_hull',
}
)

// machine_base

event.remove ({ id: 'rftoolsbase:machine_base'})
event.shaped('rftoolsbase:machine_base', [
'   ',
'ACA',
'BDB',
], {
A: '#forge:plates/wrought_iron',
B: '#forge:foils/wrought_iron',
C: '#forge:screws/wrought_iron',
D: 'gtceu:ulv_machine_hull',
}
)

// charged_porter

event.remove ({ id: 'rftoolsutility:charged_porter'})
event.shaped('rftoolsutility:charged_porter', [
' A ',
'ABA',
' A ',
], {
A: '#forge:ender_pearls',
B: 'waystones:warp_stone',
}
)

// smart_wrench

event.remove ({ id: 'rftoolsbase:smartwrench'})
event.shaped('rftoolsbase:smartwrench', [
' DA',
' BE',
'C  ',
], {
A: '#forge:rings/iron',
B: '#forge:dyes/blue',
C: '#forge:rods/iron',
D: '#forge:tools/hammers',
E: '#forge:tools/wrenches',
}
)

// syringe

event.remove ({ id: 'rftoolsutility:syringe'})
event.shaped('rftoolsutility:syringe', [
'  A',
' BD',
'CE ',
], {
A: '#forge:rods/iron',
B: 'gtceu:glass_vial',
C: 'gtceu:glass_tube',
D: '#forge:tools/mallets',
E: '#forge:rings/rubber',
}
)

// upgrade_kit

event.remove ({ output: 'advgenerators:upgrade_kit'})
event.shaped('advgenerators:upgrade_kit', [
'   ',
'AB ',
'   ',
], {
A: '#forge:tools/hammers',
B: 'advgenerators:iron_frame',
}
)

// certus_quartz_charger

event.shaped('gtceu:certus_quartz_charger', [
'ABA',
'CDC',
'AEA',
], {
A: 'gtceu:mv_electric_motor',
B: 'ae2:energy_level_emitter',
C: '#gtceu:circuits/mv',
D: 'gtceu:mv_machine_hull',
E: 'gtceu:mv_emitter',
}
)

// large_inscriber

event.shaped('gtceu:large_inscriber', [
'ACA',
'CDC',
'AEA',
], {
A: 'gtceu:mv_electric_piston',
C: '#gtceu:circuits/mv',
D: 'gtceu:mv_machine_hull',
E: 'gtceu:mv_robot_arm',
}
)

// creosote_generator

/*
event.shaped('gtceu:creosote_generator', [
'ACA',
'CDC',
'AEA',
], {
A: 'gtceu:mv_electric_pump',
C: '#gtceu:circuits/mv',
D: 'gtceu:mv_machine_hull',
E: 'gtceu:mv_electric_piston',
}
)
*/

// large_resource_generator

event.shaped('gtceu:large_resource_generator', [
'ACA',
'CDC',
'AEA',
], {
A: 'gtceu:ev_electric_motor',
C: '#gtceu:circuits/iv',
D: 'gtceu:ev_machine_hull',
E: 'gtceu:ev_electric_piston',
}
)

// natural_fluid_generator

event.shaped('gtceu:natural_fluid_generator', [
'ACA',
'CDC',
'AEA',
], {
E: 'gtceu:mv_electric_motor',
C: '#gtceu:circuits/mv',
D: 'gtceu:mv_machine_hull',
A: 'gtceu:mv_electric_pump',
}
)

// desulfurizer

event.shaped('gtceu:desulfurizer', [
'AEA',
'CDC',
'AEA',
], {
E: 'gtceu:ev_electric_motor',
C: '#gtceu:circuits/ev',
D: 'gtceu:ev_machine_hull',
A: 'gtceu:ev_electric_pump',
}
)

// glass_box

event.shaped('gtceu:glass_box', [
'AEA',
'CDC',
'AEA',
], {
E: 'gtceu:laminated_glass',
C: '#gtceu:circuits/hv',
D: 'gtceu:hv_machine_hull',
A: 'gtceu:hv_electric_motor',
}
)

// large_gas_collector

event.shaped('gtceu:large_gas_collector', [
'AEA',
'CDC',
'ACA',
], {
A: 'gtceu:iv_electric_pump',
C: '#gtceu:circuits/iv',
D: 'gtceu:iv_gas_collector',
E: 'gtceu:iv_electric_motor',
}
)

// warning_stripes_1

event.shaped('2x architectschisel:warning_stripes_1', [
'AB ',
'BC ',
'   ',
], {
A: '#forge:dyes/white',
B: '#forge:concrete',
C: '#forge:dyes/orange',
}
)














event.smelting('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot')

event.smelting('minecraft:bread', 'gtceu:wheat_dust')
























  event.recipes.gtceu.glass_box('kubejs:glassbox/liquid_glass')
    .itemInputs('#forge:sand')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .outputFluids(Fluid.of('gtceu:glass', 576))
    .duration(10)
    .EUt(240)
    .circuit(2)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass')
    .itemInputs('#forge:sand')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x minecraft:glass')
    .duration(10)
    .EUt(240)
    .circuit(1)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_pane')
    .itemInputs('#forge:sand')
    .notConsumable('gtceu:plate_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x minecraft:glass_pane')
    .duration(10)
    .EUt(240)
    .circuit(1)

  event.recipes.gtceu.glass_box('kubejs:glassbox/tempered_glass')
    .itemInputs('#forge:sand')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:tempered_glass')
    .duration(20)
    .EUt(240)
    .circuit(3)

  event.recipes.gtceu.glass_box('kubejs:glassbox/laminated_glass')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:plates/polyvinyl_butyral')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('2x gtceu:laminated_glass')
    .duration(40)
    .EUt(240)
    .circuit(4)

  event.recipes.gtceu.glass_box('kubejs:glassbox/quartz_glass')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dusts/certus_quartz')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x ae2:quartz_glass')
    .duration(20)
    .EUt(240)
    .circuit(5)

  event.recipes.gtceu.glass_box('kubejs:glassbox/quartz_vibrant_glass')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dusts/certus_quartz')
    .itemInputs('#forge:dusts/glowstone')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x ae2:quartz_vibrant_glass')
    .duration(20)
    .EUt(240)
    .circuit(6)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_ethereal')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:gems/ender_eye')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x glassential:glass_ethereal')
    .duration(20)
    .EUt(240)
    .circuit(7)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_ethereal_reverse')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:gems/ender_eye')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x glassential:glass_ethereal_reverse')
    .duration(20)
    .EUt(240)
    .circuit(8)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_ghostly')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:ender_pearls')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x glassential:glass_ghostly')
    .duration(20)
    .EUt(240)
    .circuit(9)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_dark_ethereal')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:gems/ender_eye')
    .itemInputs('#forge:dusts/amethyst')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x glassential:glass_dark_ethereal')
    .duration(20)
    .EUt(240)
    .circuit(10)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_dark_ethereal_reverse')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:gems/ender_eye')
    .itemInputs('#forge:dusts/amethyst')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x glassential:glass_dark_ethereal_reverse')
    .duration(20)
    .EUt(240)
    .circuit(11)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_light')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dusts/glowstone')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x glassential:glass_light')
    .duration(20)
    .EUt(240)
    .circuit(12)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_redstone')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dusts/redstone')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x glassential:glass_redstone')
    .duration(20)
    .EUt(240)
    .circuit(13)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_tube')
    .itemInputs('#forge:sand')
    .notConsumable('gtceu:ball_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:glass_tube')
    .duration(40)
    .EUt(240)
    .circuit(1)

  event.recipes.gtceu.glass_box('kubejs:glassbox/glass_lens')
    .itemInputs('#forge:sand')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(1)

  event.recipes.gtceu.glass_box('kubejs:glassbox/orange_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/orange')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:orange_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

  event.recipes.gtceu.glass_box('kubejs:glassbox/magenta_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/magenta')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:magenta_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/light_blue_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/light_blue')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:light_blue_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/yellow_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/yellow')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:yellow_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/lime_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/lime')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:lime_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/pink_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/pink')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:pink_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/gray_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/gray')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:gray_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/light_gray_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/light_gray')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:light_gray_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/cyan_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/cyan')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:cyan_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/purple_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/purple')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:purple_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/blue_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/blue')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:blue_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/brown_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/brown')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:brown_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/green_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/green')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:green_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/red_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/red')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:red_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)

event.recipes.gtceu.glass_box('kubejs:glassbox/black_glass_lens')
    .itemInputs('#forge:sand')
    .itemInputs('#forge:dyes/black')
    .notConsumable('gtceu:cylinder_casting_mold')
    .inputFluids(Fluid.of('gtceu:oxygen', 500))
    .itemOutputs('4x gtceu:black_glass_lens')
    .duration(10)
    .EUt(240)
    .circuit(3)




















  event.recipes.gtceu.certus_quartz_charger('kubejs:certus_quartz_charger/charged_certus_quartz_crystal')
  .itemInputs('4x ae2:certus_quartz_crystal')
  .itemOutputs('4x ae2:charged_certus_quartz_crystal')
  .duration(16)
  .EUt(60)
  .circuit(1)
  
  event.recipes.gtceu.certus_quartz_charger('kubejs:certus_quartz_charger/charged_certus_quartz_crystal_2')
  .itemInputs('4x ae2:certus_quartz_crystal')
  .inputFluids(Fluid.of('gtceu:nitrogen', 100))
  .itemOutputs('4x ae2:charged_certus_quartz_crystal')
  .duration(8)
  .EUt(60)
  .circuit(2)

  event.recipes.gtceu.certus_quartz_charger('kubejs:certus_quartz_charger/charged_certus_quartz_crystal_3')
  .itemInputs('4x gtceu:certus_quartz_gem')
  .itemOutputs('4x ae2:charged_certus_quartz_crystal')
  .duration(16)
  .EUt(60)
  .circuit(1)

  event.recipes.gtceu.certus_quartz_charger('kubejs:certus_quartz_charger/charged_certus_quartz_crystal_4')
  .itemInputs('4x gtceu:certus_quartz_gem')
  .inputFluids(Fluid.of('gtceu:nitrogen', 100))
  .itemOutputs('4x ae2:charged_certus_quartz_crystal')
  .duration(8)
  .EUt(60)
  .circuit(2)












  event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/logic_processor')
  .notConsumable('ae2:silicon_press')
  .notConsumable('ae2:logic_processor_press')
  .itemInputs('#forge:silicon')
  .itemInputs('#forge:ingots/gold')
  .inputFluids(Fluid.of('gtceu:redstone', 144))
  .itemOutputs('ae2:logic_processor')
  .duration(8)
  .EUt(60)

  event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/logic_processor_2')
  .notConsumable('ae2:silicon_press')
  .notConsumable('ae2:logic_processor_press')
  .itemInputs('#forge:dusts/silicon')
  .itemInputs('#forge:ingots/gold')
  .inputFluids(Fluid.of('gtceu:redstone', 144))
  .itemOutputs('ae2:logic_processor')
  .duration(8)
  .EUt(60)

  event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/engineering_processor')
  .notConsumable('ae2:silicon_press')
  .notConsumable('ae2:engineering_processor_press')
  .itemInputs('#forge:silicon')
  .itemInputs('#forge:gems/diamond')
  .inputFluids(Fluid.of('gtceu:redstone', 144))
  .itemOutputs('ae2:engineering_processor')
  .duration(8)
  .EUt(60)

  event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/engineering_processor_2')
  .notConsumable('ae2:silicon_press')
  .notConsumable('ae2:engineering_processor_press')
  .itemInputs('#forge:dusts/silicon')
  .itemInputs('#forge:gems/diamond')
  .inputFluids(Fluid.of('gtceu:redstone', 144))
  .itemOutputs('ae2:engineering_processor')
  .duration(8)
  .EUt(60)

  event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/calculation_processor')
  .notConsumable('ae2:silicon_press')
  .notConsumable('ae2:calculation_processor_press')
  .itemInputs('#forge:silicon')
  .itemInputs('#forge:gems/certus_quartz')
  .inputFluids(Fluid.of('gtceu:redstone', 144))
  .itemOutputs('ae2:calculation_processor')
  .duration(8)
  .EUt(60)

  event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/calculation_processor_2')
  .notConsumable('ae2:silicon_press')
  .notConsumable('ae2:calculation_processor_press')
  .itemInputs('#forge:dusts/silicon')
  .itemInputs('#forge:gems/certus_quartz')
  .inputFluids(Fluid.of('gtceu:redstone', 144))
  .itemOutputs('ae2:calculation_processor')
  .duration(8)
  .EUt(60)

  event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/accumulation_processor')
  .notConsumable('ae2:silicon_press')
  .notConsumable('megacells:accumulation_processor_press')
  .itemInputs('#forge:silicon')
  .itemInputs('#forge:ingots/sky_steel')
  .inputFluids(Fluid.of('gtceu:titanium', 144))
  .itemOutputs('megacells:accumulation_processor')
  .duration(8)
  .EUt(60)

  event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/accumulation_processor_2')
  .notConsumable('ae2:silicon_press')
  .notConsumable('megacells:accumulation_processor_press')
  .itemInputs('#forge:dusts/silicon')
  .itemInputs('#forge:ingots/sky_steel')
  .inputFluids(Fluid.of('gtceu:titanium', 144))
  .itemOutputs('megacells:accumulation_processor')
  .duration(8)
  .EUt(60)




























let meatMachine = (output, noncon, input, id) =>


  event.recipes.gtceu.meat_box(id)
  .notConsumable(noncon)
  .itemInputs(input)
  .inputFluids(Fluid.of('minecraft:water', 1000))
  .itemOutputs(output)
  .duration(1200)
  .EUt(60)

  meatMachine ('16x minecraft:chicken','2x minecraft:chicken_spawn_egg', '2x minecraft:wheat_seeds', 'kubejs:meat_box/chicken')
  meatMachine ('16x minecraft:beef','2x minecraft:cow_spawn_egg', '2x minecraft:wheat', 'kubejs:meat_box/cow')
  meatMachine ('16x minecraft:rabbit','2x minecraft:rabbit_spawn_egg', '2x minecraft:carrot', 'kubejs:meat_box/rabbit')
  meatMachine ('16x minecraft:mutton','2x minecraft:sheep_spawn_egg', '2x minecraft:wheat', 'kubejs:meat_box/sheep')
  meatMachine ('16x minecraft:porkchop','2x minecraft:pig_spawn_egg', '2x minecraft:carrot', 'kubejs:meat_box/pig')



























  event.recipes.gtceu.desulfurizer('kubejs:desulfurizer/light_fuel')
  .itemInputs('1x #forge:dusts/zeolite')
  .inputFluids(Fluid.of('gtceu:sulfuric_light_fuel', 96000))
  .outputFluids(Fluid.of('gtceu:light_fuel', 96000))
  .itemOutputs('32x gtceu:sulfur_dust')
  .duration(128)
  .EUt(2048)

  event.recipes.gtceu.desulfurizer('kubejs:desulfurizer/heavy_fuel')
  .itemInputs('1x #forge:dusts/zeolite')
  .inputFluids(Fluid.of('gtceu:sulfuric_heavy_fuel', 96000))
  .outputFluids(Fluid.of('gtceu:heavy_fuel', 96000))
  .itemOutputs('32x gtceu:sulfur_dust')
  .duration(128)
  .EUt(2048)

  event.recipes.gtceu.desulfurizer('kubejs:desulfurizer/naphtha')
  .itemInputs('1x #forge:dusts/zeolite')
  .inputFluids(Fluid.of('gtceu:sulfuric_naphtha', 96000))
  .outputFluids(Fluid.of('gtceu:naphtha', 96000))
  .itemOutputs('32x gtceu:sulfur_dust')
  .duration(128)
  .EUt(2048)

  event.recipes.gtceu.desulfurizer('kubejs:desulfurizer/gas')
  .itemInputs('1x #forge:dusts/zeolite')
  .inputFluids(Fluid.of('gtceu:sulfuric_gas', 96000))
  .outputFluids(Fluid.of('gtceu:refinery_gas', 96000))
  .itemOutputs('32x gtceu:sulfur_dust')
  .duration(128)
  .EUt(2048)






















  event.recipes.gtceu.end_game('kubejs:end_game/dragon_egg')
  .itemInputs('gtceu:uv_field_generator')
  .inputFluids(Fluid.of('gtceu:tritanium', 4096000))
  .itemOutputs('minecraft:dragon_egg')
  .duration(20000)
  .EUt(2097152)













  event.recipes.gtceu.natural_fluid_generator('kubejs:natural_fluid_generator/natural_gas')
  .inputFluids(Fluid.of('gtceu:lubricant', 100))
  .outputFluids(Fluid.of('gtceu:natural_gas', 1000))
  .duration(60)
  .EUt(60)
  .circuit(1)

  event.recipes.gtceu.natural_fluid_generator('kubejs:natural_fluid_generator/lava')
  .inputFluids(Fluid.of('gtceu:lubricant', 100))
  .outputFluids(Fluid.of('minecraft:lava', 4000))
  .duration(20)
  .EUt(60)
  .circuit(2)

  event.recipes.gtceu.natural_fluid_generator('kubejs:natural_fluid_generator/raw_oil')
  .inputFluids(Fluid.of('gtceu:lubricant', 100))
  .outputFluids(Fluid.of('gtceu:oil_medium', 1000))
  .duration(60)
  .EUt(60)
  .circuit(3)








  event.recipes.gtceu.test_electric('kubejs:test_electric/raw_oil')
  .inputFluids(Fluid.of('gtceu:lubricant', 100))
  .outputFluids(Fluid.of('gtceu:oil_medium', 1000))
  .duration(60)
  .EUt(60)
  .circuit(3)




















































let oreGen = (input, ore, amount) => {
  let output = `${amount}x ${ore}`;

  event.recipes.gtceu.large_resource_generator(ore)
    .notConsumable(input)
    .inputFluids(Fluid.of('gtceu:drilling_fluid', 5000))
    .itemOutputs(output)
    .duration(15)
    .EUt(3072);
}

oreGen('#forge:ores/copper', 'gtceu:endstone_copper_ore', 64);
oreGen('#forge:ores/gold', 'gtceu:endstone_gold_ore', 64);
oreGen('#forge:ores/iron', 'gtceu:endstone_iron_ore', 64);
oreGen('#forge:ores/pyrochlore', 'gtceu:endstone_pyrochlore_ore', 64);
oreGen('#forge:ores/aluminium', 'gtceu:endstone_aluminium_ore', 64);
oreGen('#forge:ores/scheelite', 'gtceu:endstone_scheelite_ore', 64);
oreGen('#forge:ores/grossular', 'gtceu:endstone_grossular_ore', 64);
oreGen('#forge:ores/green_sapphire', 'gtceu:endstone_green_sapphire_ore', 64);
oreGen('#forge:ores/glauconite_sand', 'gtceu:endstone_glauconite_sand_ore', 64);
oreGen('#forge:ores/chalcocite', 'gtceu:endstone_chalcocite_ore', 64);
oreGen('#forge:ores/wulfenite', 'gtceu:endstone_wulfenite_ore', 64);
oreGen('#forge:ores/cassiterite_sand', 'gtceu:endstone_cassiterite_sand_ore', 64);
oreGen('#forge:ores/tetrahedrite', 'gtceu:endstone_tetrahedrite_ore', 64);
oreGen('#forge:ores/uraninite', 'gtceu:endstone_uraninite_ore', 64);
oreGen('#forge:ores/pentlandite', 'gtceu:endstone_pentlandite_ore', 64);
oreGen('#forge:ores/stibnite', 'gtceu:endstone_stibnite_ore', 64);
oreGen('#forge:ores/spodumene', 'gtceu:endstone_spodumene_ore', 64);
oreGen('#forge:ores/bastnasite', 'gtceu:endstone_bastnasite_ore', 64);
oreGen('#forge:ores/tungstate', 'gtceu:endstone_tungstate_ore', 64);
oreGen('#forge:ores/almandine', 'gtceu:endstone_almandine_ore', 64);
oreGen('#forge:ores/lead', 'gtceu:endstone_lead_ore', 64);
oreGen('#forge:ores/pitchblende', 'gtceu:endstone_pitchblende_ore', 64);
oreGen('#forge:ores/lapis', 'gtceu:endstone_lapis_ore', 64);
oreGen('#forge:ores/powellite', 'gtceu:endstone_powellite_ore', 64);
oreGen('#forge:ores/talc', 'gtceu:endstone_talc_ore', 64);
oreGen('#forge:ores/naquadah', 'gtceu:endstone_naquadah_ore', 64);
oreGen('#forge:ores/bentonite', 'gtceu:endstone_bentonite_ore', 64);
oreGen('#forge:ores/palladium', 'gtceu:endstone_palladium_ore', 64);
oreGen('#forge:ores/electrotine', 'gtceu:endstone_electrotine_ore', 64);
oreGen('#forge:ores/neodymium', 'gtceu:endstone_neodymium_ore', 64);
oreGen('#forge:ores/redstone', 'gtceu:endstone_redstone_ore', 64);
oreGen('#forge:ores/molybdenite', 'gtceu:endstone_molybdenite_ore', 64);
oreGen('#forge:ores/galena', 'gtceu:endstone_galena_ore', 64);
oreGen('#forge:ores/olivine', 'gtceu:endstone_olivine_ore', 64);
oreGen('#forge:ores/nickel', 'gtceu:endstone_nickel_ore', 64);
oreGen('#forge:ores/red_garnet', 'gtceu:endstone_red_garnet_ore', 64);
oreGen('#forge:ores/cooperite', 'gtceu:endstone_cooperite_ore', 64);
oreGen('#forge:ores/alunite', 'gtceu:endstone_alunite_ore', 64);
oreGen('#forge:ores/asbestos', 'gtceu:endstone_asbestos_ore', 64);
oreGen('#forge:ores/sphalerite', 'gtceu:endstone_sphalerite_ore', 64);
oreGen('#forge:ores/bornite', 'gtceu:endstone_bornite_ore', 64);
oreGen('#forge:ores/ruby', 'gtceu:endstone_ruby_ore', 64);
oreGen('#forge:ores/pyrope', 'gtceu:endstone_pyrope_ore', 64);
oreGen('#forge:ores/diatomite', 'gtceu:endstone_diatomite_ore', 64);
oreGen('#forge:ores/tricalcium_phosphate', 'gtceu:endstone_tricalcium_phosphate_ore', 64);
oreGen('#forge:ores/sapphire', 'gtceu:endstone_sapphire_ore', 64);
oreGen('#forge:ores/silver', 'gtceu:endstone_silver_ore', 64);
oreGen('#forge:ores/sulfur', 'gtceu:endstone_sulfur_ore', 64);
oreGen('#forge:ores/cobaltite', 'gtceu:endstone_cobaltite_ore', 64);
oreGen('#forge:ores/lepidolite', 'gtceu:endstone_lepidolite_ore', 64);
oreGen('#forge:ores/soapstone', 'gtceu:endstone_soapstone_ore', 64);
oreGen('#forge:ores/goethite', 'gtceu:endstone_goethite_ore', 64);
oreGen('#forge:ores/rock_salt', 'gtceu:endstone_rock_salt_ore', 64);
oreGen('#forge:ores/cassiterite', 'gtceu:endstone_cassiterite_ore', 64);
oreGen('#forge:ores/kyanite', 'gtceu:endstone_kyanite_ore', 64);
oreGen('#forge:ores/sodalite', 'gtceu:endstone_sodalite_ore', 64);
oreGen('#forge:ores/beryllium', 'gtceu:endstone_beryllium_ore', 64);
oreGen('#forge:ores/realgar', 'gtceu:endstone_realgar_ore', 64);
oreGen('#forge:ores/nether_quartz', 'gtceu:endstone_nether_quartz_ore', 64);
oreGen('#forge:ores/cobalt', 'gtceu:endstone_cobalt_ore', 64);
oreGen('#forge:ores/hematite', 'gtceu:endstone_hematite_ore', 64);
oreGen('#forge:ores/spessartine', 'gtceu:endstone_spessartine_ore', 64);
oreGen('#forge:ores/tin', 'gtceu:endstone_tin_ore', 64);
oreGen('#forge:ores/yellow_garnet', 'gtceu:endstone_yellow_garnet_ore', 64);
oreGen('#forge:ores/plutonium', 'gtceu:endstone_plutonium_ore', 64);
oreGen('#forge:ores/basaltic_mineral_sand', 'gtceu:endstone_basaltic_mineral_sand_ore', 64);
oreGen('#forge:ores/tantalite', 'gtceu:endstone_tantalite_ore', 64);
oreGen('#forge:ores/oilsands', 'gtceu:endstone_oilsands_ore', 64);
oreGen('#forge:ores/yellow_limonite', 'gtceu:endstone_yellow_limonite_ore', 64);
oreGen('#forge:ores/barite', 'gtceu:endstone_barite_ore', 64);
oreGen('#forge:ores/mica', 'gtceu:endstone_mica_ore', 64);
oreGen('#forge:ores/pyrite', 'gtceu:endstone_pyrite_ore', 64);
oreGen('#forge:ores/magnesite', 'gtceu:endstone_magnesite_ore', 64);
oreGen('#forge:ores/diamond', 'gtceu:endstone_diamond_ore', 64);
oreGen('#forge:ores/garnet_sand', 'gtceu:endstone_garnet_sand_ore', 64);
oreGen('#forge:ores/opal', 'gtceu:endstone_opal_ore', 64);
oreGen('#forge:ores/fullers_earth', 'gtceu:endstone_fullers_earth_ore', 64);
oreGen('#forge:ores/zeolite', 'gtceu:endstone_zeolite_ore', 64);
oreGen('#forge:ores/blue_topaz', 'gtceu:endstone_blue_topaz_ore', 64);
oreGen('#forge:ores/monazite', 'gtceu:endstone_monazite_ore', 64);
oreGen('#forge:ores/malachite', 'gtceu:endstone_malachite_ore', 64);
oreGen('#forge:ores/emerald', 'gtceu:endstone_emerald_ore', 64);
oreGen('#forge:ores/molybdenum', 'gtceu:endstone_molybdenum_ore', 64);
oreGen('#forge:ores/coal', 'gtceu:endstone_coal_ore', 64);
oreGen('#forge:ores/chromite', 'gtceu:endstone_chromite_ore', 64);
oreGen('#forge:ores/salt', 'gtceu:endstone_salt_ore', 64);
oreGen('#forge:ores/saltpeter', 'gtceu:endstone_saltpeter_ore', 64);
oreGen('#forge:ores/granitic_mineral_sand', 'gtceu:endstone_granitic_mineral_sand_ore', 64);
oreGen('#forge:ores/quartzite', 'gtceu:endstone_quartzite_ore', 64);
oreGen('#forge:ores/trona', 'gtceu:endstone_trona_ore', 64);
oreGen('#forge:ores/apatite', 'gtceu:endstone_apatite_ore', 64);
oreGen('#forge:ores/vanadium_magnetite', 'gtceu:endstone_vanadium_magnetite_ore', 64);
oreGen('#forge:ores/certus_quartz', 'gtceu:endstone_certus_quartz_ore', 64);
oreGen('#forge:ores/calcite', 'gtceu:endstone_calcite_ore', 64);
oreGen('#forge:ores/thorium', 'gtceu:endstone_thorium_ore', 64);
oreGen('#forge:ores/pollucite', 'gtceu:endstone_pollucite_ore', 64);
oreGen('#forge:ores/gypsum', 'gtceu:endstone_gypsum_ore', 64);
oreGen('#forge:ores/bauxite', 'gtceu:endstone_bauxite_ore', 64);
oreGen('#forge:ores/platinum', 'gtceu:endstone_platinum_ore', 64);
oreGen('#forge:ores/pyrolusite', 'gtceu:endstone_pyrolusite_ore', 64);
oreGen('#forge:ores/magnetite', 'gtceu:endstone_magnetite_ore', 64);
oreGen('#forge:ores/graphite', 'gtceu:endstone_graphite_ore', 64);
oreGen('#forge:ores/topaz', 'gtceu:endstone_topaz_ore', 64);
oreGen('#forge:ores/lithium', 'gtceu:endstone_lithium_ore', 64);
oreGen('#forge:ores/cinnabar', 'gtceu:endstone_cinnabar_ore', 64);
oreGen('#forge:ores/lazurite', 'gtceu:endstone_lazurite_ore', 64);
oreGen('#forge:ores/garnierite', 'gtceu:endstone_garnierite_ore', 64);
oreGen('#forge:ores/ilmenite', 'gtceu:endstone_ilmenite_ore', 64);
oreGen('#forge:ores/chalcopyrite', 'gtceu:endstone_chalcopyrite_ore', 64);
oreGen('#forge:ores/amethyst', 'gtceu:endstone_amethyst_ore', 64);















// fin //

  })






  


  ServerEvents.recipes(event => {


    let ULV = 8
    let LV = 30
    let MV = 120
    let HV = 480
    let EV = 1920
    let IV = 7680
  

    ////// Machine Recipe //////

    event.shaped(
        'gtceu:greenhouse',
        ['AWA', 'CSC', 'WCW'],
        {
            A: 'gtceu:mv_robot_arm',
            W: 'gtceu:copper_single_cable',
            C: '#gtceu:circuits/mv',
            S: 'gtceu:solid_machine_casing'
        }
    ).id('gtceu:shaped/greenhouse')


    ////// Greenhouse Recipes //////

    function Greenhouse(id, input, fluid, output, boosted) {
        if (boosted) {
            event.recipes.gtceu.greenhouse(id)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .itemInputs('4x gtceu:fertilizer')
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(1200)
                .EUt(MV)
        } else {
            event.recipes.gtceu.greenhouse(id)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(1200)
                .EUt(MV)
        }
    }


    ////// Trees //////

    // Rubber
    Greenhouse('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['32x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], false)
    Greenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

    // Oak
    Greenhouse('oak_sapling', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '4x minecraft:oak_sapling'], false)
    Greenhouse('oak_sapling_boosted', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:oak_sapling'], true)

    // Dark Oak
    Greenhouse('dark_oak_sapling', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], false)
    Greenhouse('dark_oak_sapling_boosted', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], true)

    // Spruce
    Greenhouse('spruce_sapling', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], false)
    Greenhouse('spruce_sapling_boosted', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], true)

    // Birch
    Greenhouse('birch_sapling', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '4x minecraft:birch_sapling'], false)
    Greenhouse('birch_sapling_boosted', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '64x minecraft:birch_log', '4x minecraft:birch_sapling'], true)

    // Acacia
    Greenhouse('acacia_sapling', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], false)
    Greenhouse('acacia_sapling_boosted', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], true)

    // Jungle
    Greenhouse('jungle_sapling', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], false)
    Greenhouse('jungle_sapling_boosted', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], true)

    // cherry
    Greenhouse('cherry_sapling', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], false)
    Greenhouse('cherry_sapling_boosted', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], true)

    // Azalea
    Greenhouse('azalea_sapling', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:azalea'], false)
    Greenhouse('azalea_boosted', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:azalea'], true)

    // Flowering Azalea
    Greenhouse('flowering_azalea', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:flowering_azalea'], false)
    Greenhouse('flowering_azalea_boosted', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:flowering_azalea'], true)

    // Mangrove
    Greenhouse('mangrove_propagule', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], false)
    Greenhouse('mangrove_propagule_boosted', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], true)

    ////// Crops //////

    // Sugarcane
    Greenhouse('sugar_cane', 'minecraft:sugar_cane', 1000, '24x minecraft:sugar_cane', false)
    Greenhouse('sugar_cane_boosted', 'minecraft:sugar_cane', 1000, '48x minecraft:sugar_cane', true)

    // Kelp
    Greenhouse('kelp', 'minecraft:kelp', 2000, '24x minecraft:kelp', false)
    Greenhouse('kelp_boosted', 'minecraft:kelp', 2000, '48x minecraft:kelp', true)

    // Bamboo
    Greenhouse('bamboo', 'minecraft:bamboo', 1000, '24x minecraft:bamboo', false)
    Greenhouse('bamboo_boosted', 'minecraft:bamboo', 1000, '48x minecraft:bamboo', true)

    // Cactus
    Greenhouse('cactus', 'minecraft:cactus', 1000, '24x minecraft:cactus', false)
    Greenhouse('cactus_boosted', 'minecraft:cactus', 1000, '48x minecraft:cactus', true)

    // Wheat
    Greenhouse('wheat', 'minecraft:wheat_seeds', 1000, '24x minecraft:wheat', false)
    Greenhouse('wheat_boosted', 'minecraft:wheat_seeds', 1000, '48x minecraft:wheat', true)

    // Carrot
    Greenhouse('carrot', 'minecraft:carrot', 1000, '24x minecraft:carrot', false)
    Greenhouse('carrot_boosted', 'minecraft:carrot', 1000, '48x minecraft:carrot', true)

    // Potato
    Greenhouse('potato', 'minecraft:potato', 1000, '24x minecraft:potato', false)
    Greenhouse('potato_boosted', 'minecraft:potato', 1000, '48x minecraft:potato', true)

    // Beetroot
    Greenhouse('beetroot', 'minecraft:beetroot_seeds', 1000, '24x minecraft:beetroot', false)
    Greenhouse('beetroot_boosted', 'minecraft:beetroot_seeds', 1000, '48x minecraft:beetroot', true)

    // Mellon
    Greenhouse('melon', 'minecraft:melon_seeds', 1000, '12x minecraft:melon', false)
    Greenhouse('melon_boosted', 'minecraft:melon_seeds', 1000, '24x minecraft:melon', true)

    // Pumpkin
    Greenhouse('pumpkin', 'minecraft:pumpkin_seeds', 1000, '12x minecraft:pumpkin', false)
    Greenhouse('pumpkin_boosted', 'minecraft:pumpkin_seeds', 1000, '24x minecraft:pumpkin', true)

    // Nether Wart
    Greenhouse('nether_wart', 'minecraft:nether_wart', 1000, '12x minecraft:nether_wart', false)
    Greenhouse('nether_wart_boosted', 'minecraft:nether_wart', 1000, '24x minecraft:nether_wart', true)

    // Red Mushroom
    Greenhouse('red_mushroom', 'minecraft:red_mushroom', 1000, '12x minecraft:red_mushroom', false)
    Greenhouse('red_mushroom_boosted', 'minecraft:red_mushroom', 1000, '24x minecraft:red_mushroom', true)

    // Brown Mushroom
    Greenhouse('brown_mushroom', 'minecraft:brown_mushroom', 1000, '12x minecraft:brown_mushroom', false)
    Greenhouse('brown_mushroom_boosted', 'minecraft:brown_mushroom', 1000, '24x minecraft:brown_mushroom', true)




  })








  ServerEvents.recipes(event => {
    function creosote_generator(id, inputFluid, eu){
        event.recipes.gtceu.creosote_generator(id)
            .inputFluids(Fluid.of(inputFluid, 11))
            .duration(20)
            .EUt(eu)
    }
    creosote_generator('mv_creosote_generator', 'gtceu:creosote', -128)
})








PlayerEvents.loggedIn(function (event) {
  let welcomeMessage = "§6Welcome to Sky Greg! Please allow EMI to fully load before using your AE2 Terminal. GLHF :)";
  event.player.tell(welcomeMessage);
});
