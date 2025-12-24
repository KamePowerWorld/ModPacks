// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

event.remove({ mod: 'extractinator' })

/*

event.custom(
  {
    "type": "extractinator:extractinating",
    "input": {
      "tag": "forge:cobblestone"
    },
    "drops": [
      
      { "drop": "minecraft:copper_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "minecraft:iron_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "minecraft:gold_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:lead_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:nickel_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:silver_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:tin_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:cassiterite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:cassiterite_sand_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:chalcopyrite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:coal_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:rock_salt_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:salt_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:saltpeter_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:tetrahedrite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:malachite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:lapis_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:redstone_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:oilsands_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:electrotine_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:fullers_earth_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:mica_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:calcite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },

    ]
  }
)

event.custom(
  {
    "type": "extractinator:extractinating",
    "input": {
      "tag": "forge:gravel"
    },
    "drops": [
      { "drop": "gtceu:aluminium_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:beryllium_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:lithium_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:molybdenum_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:neodymium_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:asbestos_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:hematite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:goethite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:chromite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:cobaltite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:cooperite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:galena_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:garnierite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:ilmenite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:bauxite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:lazurite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:magnesite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:magnetite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:molybdenite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:powellite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:pyrolusite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:scheelite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:sodalite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:tantalite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:stibnite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:tungstate_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:uraninite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:wulfenite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:yellow_limonite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:quartzite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:graphite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:bornite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:bastnasite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:pentlandite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:spodumene_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:lepidolite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:glauconite_sand_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:barite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:alunite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:talc_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:soapstone_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:kyanite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:tricalcium_phosphate_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:vanadium_magnetite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:pollucite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:bentonite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:pitchblende_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:trona_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:gypsum_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:zeolite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:diatomite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:granitic_mineral_sand_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:garnet_sand_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:basaltic_mineral_sand_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      
    ]
  }
)

event.custom(
  {
    "type": "extractinator:extractinating",
    "input": {
      "item": "minecraft:netherrack"
    },
    "drops": [
      { "drop": "gtceu:nether_quartz_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:sulfur_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:sphalerite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:pyrite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:certus_quartz_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:cobalt_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:thorium_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:pyrochlore_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },

    ]
  }
)

event.custom(
  {
    "type": "extractinator:extractinating",
    "input": {
      "item": "minecraft:end_stone"
    },
    "drops": [
      { "drop": "gtceu:naquadah_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:palladium_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:platinum_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:plutonium_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },

    ]
  }
)

event.custom(
  {
    "type": "extractinator:extractinating",
    "input": {
      "tag": "forge:sand"
    },
    "drops": [
      { "drop": "gtceu:almandine_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:blue_topaz_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:cinnabar_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:diamond_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:emerald_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:green_sapphire_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:grossular_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:pyrope_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:ruby_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:sapphire_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:spessartine_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:topaz_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:chalcocite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:realgar_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:olivine_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:opal_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:amethyst_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:apatite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:red_garnet_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:yellow_garnet_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "gtceu:monazite_ore", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },

    ]
  }
)

event.custom(
  {
    "type": "extractinator:extractinating",
    "input": {
      "tag": "minecraft:dirt"
    },
    "drops": [
      { "drop": "#minecraft:saplings", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },
      { "drop": "#forge:seeds", "drop_chance": 0.01, "min_drop_count": 1, "max_drop_count": 1 },

    ]
  }
)

*/

// probably just remove the extractinator mod all together

// fin //

  })