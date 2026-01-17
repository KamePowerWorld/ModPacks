# Imoprts
import mods.jei.JEI;



########################################
# Items
########################################
# Logistics Pipes' Guide Book
recipes.remove(<logisticspipes:guide_book>);
mods.jei.JEI.hide(<logisticspipes:guide_book>);

# Nano Hopper
mods.jei.JEI.hide(<logisticspipes:parts:3>);

# Logistics Broken Item
mods.jei.JEI.hide(<logisticspipes:broken_item>);

# Logistics Item Card
mods.jei.JEI.hide(<logisticspipes:item_card>);

# Logistics Controller Upgrade
mods.jei.JEI.hide(<logisticspipes:upgrade_logic_controller>);

# Raw Basic Chip
recipes.remove(<logisticspipes:chip_basic_raw>);
mods.jei.JEI.hide(<logisticspipes:chip_basic_raw>);

# Basic Chip
furnace.remove(<logisticspipes:chip_basic>);
mods.jei.JEI.hide(<logisticspipes:chip_basic>);

# Raw Advanced Chip
recipes.remove(<logisticspipes:chip_advanced_raw>);
mods.jei.JEI.hide(<logisticspipes:chip_advanced_raw>);

# Advanced Chip
furnace.remove(<logisticspipes:chip_advanced>);
mods.jei.JEI.hide(<logisticspipes:chip_advanced>);

# Raw FPGA Chip
recipes.remove(<logisticspipes:chip_fpga_raw>);
mods.jei.JEI.hide(<logisticspipes:chip_fpga_raw>);

# FPGA Chip
furnace.remove(<logisticspipes:chip_fpga>);
mods.jei.JEI.hide(<logisticspipes:chip_fpga>);

# Pipe Controller
recipes.remove(<logisticspipes:pipe_controller>);
recipes.addShaped(<logisticspipes:pipe_controller>, [
    [<minecraft:gold_ingot>, <buildcraftcore:wrench>, <minecraft:gold_ingot>],
    [<minecraft:redstone>, <minecraft:glass>, <minecraft:dye:4>],
    [<minecraft:redstone>, <minecraft:redstone>, <minecraft:dye:4>]]);

# Pipe Manager
recipes.remove(<logisticspipes:pipe_manager>);
recipes.addShaped(<logisticspipes:pipe_manager>, [
    [<minecraft:iron_ingot>, <buildcraftcore:wrench>, <minecraft:iron_ingot>],
    [<minecraft:redstone>, <minecraft:glass>, <minecraft:dye:4>],
    [<minecraft:redstone>, <minecraft:redstone>, <minecraft:dye:4>]
]);

# Logistics programmer
recipes.remove(<logisticspipes:logistics_programmer>);
mods.jei.JEI.hide(<logisticspipes:logistics_programmer>);

# Logistics HUD Glasses
recipes.addShaped(<logisticspipes:hud_glasses>, [
    [<logisticspipes:parts>, null, <logisticspipes:parts>],
    [<logisticspipes:parts:1>, <logisticspipes:parts:2>, <logisticspipes:parts:1>],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:parts:2>, [
    [null, <buildcraftsilicon:redstone_chipset:4>, null],
    [<minecraft:diamond>, null, <minecraft:diamond>],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:parts:1>, [
    [<minecraft:redstone>, <buildcraftsilicon:redstone_chipset:4>, <minecraft:redstone>],
    [<minecraft:redstone>, <minecraft:glass>, <minecraft:redstone>],
    [<minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>]
]);
recipes.addShaped(<logisticspipes:parts>, [
    [null, null, null],
    [<minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>],
    [null, null, <buildcraftsilicon:redstone_chipset:4>]
]);

# Crafting Sign Creator
recipes.remove(<logisticspipes:sign_creator>);
recipes.addShaped(<logisticspipes:sign_creator>, [
    [<buildcraftsilicon:redstone_chipset:2>, null, <buildcraftsilicon:redstone_chipset:2>],
    [null, <minecraft:sign>, null], [null, <buildcraftsilicon:redstone_chipset:4>, null]
]);
recipes.addShaped(<logisticspipes:sign_creator>, [
    [<buildcraftcore:gear_gold>, null, <buildcraftcore:gear_gold>],
    [null, <minecraft:sign>, null],
    [null, <buildcraftcore:gear_diamond>, null]
]);

# Blank Module
recipes.remove(<logisticspipes:module_blank>);
recipes.addShaped(<logisticspipes:module_blank>, [
    [<minecraft:paper>, <minecraft:redstone>, <minecraft:paper>],
    [<minecraft:paper>, <minecraft:redstone>, <minecraft:paper>],
    [<minecraft:paper>, <minecraft:gold_nugget>, <minecraft:paper>]
]);

# ItemSink Module
recipes.remove(<logisticspipes:module_item_sink>);
recipes.addShaped(<logisticspipes:module_item_sink>, [
    [<minecraft:dye:2>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:dye:2>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:2>, <minecraft:redstone>, <minecraft:dye:2>]
]);
recipes.addShaped(<logisticspipes:module_item_sink>, [
    [<minecraft:dye:2>, <buildcraftcore:gear_iron>, <minecraft:dye:2>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:2>, <minecraft:redstone>, <minecraft:dye:2>]
]);
recipes.addShapeless(<logisticspipes:module_item_sink>, [<logisticspipes:module_item_sink>]);

# Mod Based ItemSink Module
recipes.remove(<logisticspipes:module_item_sink_mod>);
recipes.addShaped(<logisticspipes:module_item_sink_mod>, [
    [<buildcraftsilicon:redstone_chipset:2>, null, null],
    [<logisticspipes:module_item_sink>, null, null],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:module_item_sink_mod>, [
    [<buildcraftcore:gear_gold>, null, null],
    [<logisticspipes:module_item_sink>, null, null],
    [null, null, null]
]);
recipes.addShapeless(<logisticspipes:module_item_sink_mod>, [<logisticspipes:module_item_sink_mod>]);

# OreDict ItemSink Module
recipes.remove(<logisticspipes:module_item_sink_oredict>);
recipes.addShaped(<logisticspipes:module_item_sink_oredict>, [
    [<minecraft:book>, null, null],
    [<logisticspipes:module_item_sink_mod>, null, null],
    [null, null, null]
]);
recipes.addShapeless(<logisticspipes:module_item_sink_oredict>, [<logisticspipes:module_item_sink_oredict>]);

# Creative Tab Based ItemSink Module
recipes.remove(<logisticspipes:module_item_sink_creativetab>);
recipes.addShaped(<logisticspipes:module_item_sink_creativetab>, [
    [<buildcraftsilicon:redstone_chipset:2>, null, null],
    [<logisticspipes:module_item_sink_oredict>, null, null],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:module_item_sink_creativetab>, [
    [<buildcraftcore:gear_gold>, null, null],
    [<logisticspipes:module_item_sink_oredict>, null, null],
    [null, null, null]
]);
recipes.addShapeless(<logisticspipes:module_item_sink_creativetab>, [<logisticspipes:module_item_sink_creativetab>]);

# Passive Supplier Module
recipes.remove(<logisticspipes:module_passive_supplier>);
recipes.addShaped(<logisticspipes:module_passive_supplier>, [
    [<minecraft:dye:1>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:dye:1>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:1>, <minecraft:redstone>, <minecraft:dye:1>]
]);
recipes.addShaped(<logisticspipes:module_passive_supplier>, [
    [<minecraft:dye:1>, <buildcraftcore:gear_iron>, <minecraft:dye:1>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:1>, <minecraft:redstone>, <minecraft:dye:1>]
]);
recipes.addShapeless(<logisticspipes:module_passive_supplier>, [<logisticspipes:module_active_supplier>]);

# Active Supplier Module
recipes.remove(<logisticspipes:module_active_supplier>);
recipes.addShapeless(<logisticspipes:module_active_supplier>, [<logisticspipes:module_passive_supplier>]);

# Extractor Module
recipes.remove(<logisticspipes:module_extractor>);
recipes.addShaped(<logisticspipes:module_extractor>, [
    [<minecraft:dye:4>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:dye:4>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:4>, <minecraft:redstone>, <minecraft:dye:4>]
]);
recipes.addShaped(<logisticspipes:module_extractor>, [
    [<minecraft:dye:4>, <buildcraftcore:gear_iron>, <minecraft:dye:4>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:4>, <minecraft:redstone>, <minecraft:dye:4>]
]);
recipes.addShapeless(<logisticspipes:module_extractor>, [<logisticspipes:module_extractor>]);

# Advanced Extractor Module
recipes.remove(<logisticspipes:module_extractor_advanced>);
recipes.addShaped(<logisticspipes:module_extractor_advanced>, [
    [<buildcraftsilicon:redstone_chipset:2>, null, null],
    [<logisticspipes:module_extractor>, null, null],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:module_extractor_advanced>, [
    [<buildcraftcore:gear_gold>, null, null],
    [<logisticspipes:module_extractor>, null, null],
    [null, null, null]
]);
recipes.addShapeless(<logisticspipes:module_extractor_advanced>, [<logisticspipes:module_extractor_advanced>]);

# Polymorphic ItemSink Module
recipes.remove(<logisticspipes:module_item_sink_polymorphic>);
recipes.addShaped(<logisticspipes:module_item_sink_polymorphic>, [
    [<minecraft:dye:14>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:dye:14>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:14>, <minecraft:redstone>, <minecraft:dye:14>]
]);
recipes.addShaped(<logisticspipes:module_item_sink_polymorphic>, [
    [<minecraft:dye:14>, <buildcraftcore:gear_gold>, <minecraft:dye:14>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:14>, <minecraft:redstone>, <minecraft:dye:14>]
]);
recipes.addShapeless(<logisticspipes:module_item_sink_polymorphic>, [<logisticspipes:module_item_sink_polymorphic>]);

# QuickSort Module
recipes.remove(<logisticspipes:module_quick_sort>);
recipes.addShaped(<logisticspipes:module_quick_sort>, [
    [<minecraft:dye:4>, <buildcraftsilicon:redstone_chipset:4>, <minecraft:dye:4>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:4>, <minecraft:redstone>, <minecraft:dye:4>]
]);
recipes.addShaped(<logisticspipes:module_quick_sort>, [
    [<minecraft:dye:4>, <buildcraftcore:gear_diamond>, <minecraft:dye:4>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:4>, <minecraft:redstone>, <minecraft:dye:4>]
]);
recipes.addShapeless(<logisticspipes:module_quick_sort>, [<logisticspipes:module_quick_sort>]);

# Terminus Module
recipes.remove(<logisticspipes:module_terminus>);
recipes.addShaped(<logisticspipes:module_terminus>, [
    [<minecraft:dye:5>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:dye>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye>, <minecraft:redstone>, <minecraft:dye:5>]
]);
recipes.addShaped(<logisticspipes:module_terminus>, [
    [<minecraft:dye:5>, <buildcraftcore:gear_iron>, <minecraft:dye>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye>, <minecraft:redstone>, <minecraft:dye:5>]
]);
recipes.addShapeless(<logisticspipes:module_terminus>, [<logisticspipes:module_terminus>]);

# Provider Module
recipes.remove(<logisticspipes:module_provider>);
recipes.addShaped(<logisticspipes:module_provider>, [
    [<minecraft:dye:4>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:dye:4>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:4>, <minecraft:redstone>, <minecraft:dye:4>]
]);
recipes.addShaped(<logisticspipes:module_provider>, [
    [<minecraft:dye:4>, <buildcraftcore:gear_gold>, <minecraft:dye:4>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:4>, <minecraft:redstone>, <minecraft:dye:4>]
]);
recipes.addShapeless(<logisticspipes:module_provider>, [<logisticspipes:module_provider>]);

# Enchantment Sink Module MK1
recipes.remove(<logisticspipes:module_enchantment_sink>);
recipes.addShaped(<logisticspipes:module_enchantment_sink>, [
    [<minecraft:enchanted_book>, null, null],
    [<logisticspipes:module_item_sink>, null, null],
    [null, null, null]
]);
recipes.addShapeless(<logisticspipes:module_enchantment_sink>, [<logisticspipes:module_enchantment_sink>]);

# Enchantment Sink Module MK2
recipes.remove(<logisticspipes:module_enchantment_sink_mk2>);
recipes.addShaped(<logisticspipes:module_enchantment_sink_mk2>, [
    [<buildcraftsilicon:redstone_chipset:2>, null, null],
    [<logisticspipes:module_enchantment_sink>, null, null],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:module_enchantment_sink_mk2>, [
    [<buildcraftcore:gear_gold>, null, null],
    [<logisticspipes:module_enchantment_sink>, null, null],
    [null, null, null]
]);
recipes.addShapeless(<logisticspipes:module_enchantment_sink_mk2>, [<logisticspipes:module_enchantment_sink_mk2>]);

# Crafting Module
recipes.remove(<logisticspipes:module_crafter>);
recipes.addShaped(<logisticspipes:module_crafter>, [
    [<minecraft:dye:1>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:dye:4>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:4>, <minecraft:redstone>, <minecraft:dye:1>]
]);
recipes.addShaped(<logisticspipes:module_crafter>, [
    [<minecraft:dye:1>, <buildcraftcore:gear_iron>, <minecraft:dye:4>],
    [<minecraft:redstone>, <logisticspipes:module_blank>, <minecraft:redstone>],
    [<minecraft:dye:4>, <minecraft:redstone>, <minecraft:dye:1>]
]);
recipes.addShapeless(<logisticspipes:module_crafter>, [<logisticspipes:module_crafter>]);

# Crafting Byproduct Extraction Upgrade
recipes.remove(<logisticspipes:upgrade_crafting_byproduct>);
recipes.addShaped(<logisticspipes:upgrade_crafting_byproduct>, [
    [<minecraft:redstone>, <buildcraftcore:gear_wood>, <minecraft:redstone>],
    [<buildcraftcore:gear_wood>, <buildcraftsilicon:redstone_chipset:1>, <buildcraftcore:gear_wood>],
    [<minecraft:redstone>, <buildcraftcore:gear_wood>, <minecraft:redstone>]
]);

# Fluid Crafting Upgrade
recipes.remove(<logisticspipes:upgrade_fluid_crafting>);
recipes.addShaped(<logisticspipes:upgrade_fluid_crafting>, [
    [<minecraft:redstone>, <minecraft:glass_bottle>, <minecraft:redstone>],
    [<minecraft:glass_bottle>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:glass_bottle>],
    [<minecraft:redstone>, <minecraft:glass_bottle>, <minecraft:redstone>]
]);

# Sneaky Upgrade
recipes.remove(<logisticspipes:upgrade_sneaky>);
recipes.addShaped(<logisticspipes:upgrade_sneaky>, [
    [<minecraft:paper>, <minecraft:redstone>, <minecraft:paper>],
    [<minecraft:redstone>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:redstone>],
    [<minecraft:paper>, <minecraft:redstone>, <minecraft:paper>]
]);

# Sneaky Combination Upgrade
recipes.remove(<logisticspipes:upgrade_sneaky_combination>);
recipes.addShaped(<logisticspipes:upgrade_sneaky_combination>, [
    [<minecraft:slime_ball>, <minecraft:redstone>, <minecraft:slime_ball>],
    [<minecraft:redstone>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:redstone>],
    [<minecraft:paper>, <minecraft:redstone>, <minecraft:paper>]
]);

# Power Transportation Upgrade
recipes.remove(<logisticspipes:upgrade_power_transportation>);
recipes.addShaped(<logisticspipes:upgrade_power_transportation> * 4, [
    [<minecraft:paper>, <minecraft:redstone_block>, <minecraft:paper>],
    [<buildcraftsilicon:redstone_chipset:1>, <minecraft:glowstone>, <buildcraftsilicon:redstone_chipset:1>],
    [<minecraft:paper>, <minecraft:lapis_block>, <minecraft:paper>]
]);
recipes.addShaped(<logisticspipes:upgrade_power_transportation> * 4, [
    [<minecraft:paper>, <minecraft:redstone_block>, <minecraft:paper>],
    [<buildcraftcore:gear_iron>, <minecraft:glowstone>, <buildcraftcore:gear_iron>],
    [<minecraft:paper>, <minecraft:lapis_block>, <minecraft:paper>]
]);

# Item Speed Upgrade
recipes.remove(<logisticspipes:upgrade_speed>);
recipes.addShaped(<logisticspipes:upgrade_speed>, [
    [<minecraft:paper>, <minecraft:gold_ingot>, <minecraft:paper>],
    [<minecraft:gold_ingot>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:gold_ingot>],
    [<minecraft:paper>, <minecraft:gold_ingot>, <minecraft:paper>]
]);

# Disconnection Upgrade
recipes.remove(<logisticspipes:upgrade_disconnection>);
recipes.addShaped(<logisticspipes:upgrade_disconnection> * 8, [
    [<minecraft:iron_ingot>, <minecraft:redstone>, <minecraft:iron_ingot>],
    [<minecraft:redstone>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:redstone>],
    [<minecraft:paper>, <minecraft:redstone>, <minecraft:paper>]
]);

# Advanced Satellite Upgrade
recipes.remove(<logisticspipes:upgrade_satellite_advanced>);
recipes.addShaped(<logisticspipes:upgrade_satellite_advanced>, [
    [<minecraft:paper>, <minecraft:iron_ingot>, <minecraft:paper>],
    [<minecraft:iron_ingot>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:iron_ingot>],
    [<minecraft:paper>, <minecraft:iron_ingot>, <minecraft:paper>]
]);

# Placement Rules Upgrade
recipes.remove(<logisticspipes:upgrade_pattern>);
recipes.addShaped(<logisticspipes:upgrade_pattern>, [
    [<minecraft:redstone>, <minecraft:hopper>, <minecraft:dye:11>],
    [<minecraft:iron_ingot>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:iron_ingot>],
    [<minecraft:dye:1>, <minecraft:iron_ingot>, <minecraft:redstone>]
]);

# Fuzzy Upgrade
recipes.remove(<logisticspipes:upgrade_fuzzy>);
recipes.addShaped(<logisticspipes:upgrade_fuzzy>, [
    [<minecraft:paper>, <minecraft:quartz>, <minecraft:paper>],
    [<minecraft:quartz>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:quartz>],
    [<minecraft:paper>, <minecraft:quartz>, <minecraft:paper>]
]);

# Crafting Monitoring Upgrade
recipes.remove(<logisticspipes:upgrade_crafting_monitoring>);
recipes.addShaped(<logisticspipes:upgrade_crafting_monitoring>, [
    [<minecraft:redstone>, <minecraft:dye:4>, <minecraft:redstone>],
    [<minecraft:dye:2>, <buildcraftsilicon:redstone_chipset:4>, <minecraft:dye:11>],
    [<minecraft:redstone>, <logisticspipes:pipe_chassis_mk2>, <minecraft:redstone>]
]);

# Opaque Upgrade
recipes.remove(<logisticspipes:upgrade_opaque>);
recipes.addShaped(<logisticspipes:upgrade_opaque>, [
    [<minecraft:redstone>, <minecraft:dye:15>, <minecraft:redstone>],
    [<minecraft:dye:15>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:dye:15>],
    [<minecraft:redstone>, <minecraft:dye:15>, <minecraft:redstone>]
]);

# Crafting Cleanup Upgrade
recipes.remove(<logisticspipes:upgrade_crafting_cleanup>);
recipes.addShaped(<logisticspipes:upgrade_crafting_cleanup>, [
    [<minecraft:redstone>, <minecraft:dye:1>, <minecraft:redstone>],
    [<minecraft:paper>, <buildcraftsilicon:redstone_chipset:4>, <minecraft:paper>], [<minecraft:redstone>, <logisticspipes:module_extractor>, <minecraft:redstone>]
]);
recipes.addShaped(<logisticspipes:upgrade_crafting_cleanup>, [
    [<minecraft:redstone>, <minecraft:dye:1>, <minecraft:redstone>],
    [<minecraft:paper>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:paper>], [<minecraft:redstone>, <logisticspipes:module_extractor_advanced>, <minecraft:redstone>]
]);

# Module Upgrade
recipes.remove(<logisticspipes:upgrade_module_upgrade>);
recipes.addShaped(<logisticspipes:upgrade_module_upgrade>, [
    [<minecraft:paper>, <minecraft:gold_nugget>, <minecraft:paper>],
    [<minecraft:dye>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:dye>],
    [<minecraft:paper>, <minecraft:gold_nugget>, <minecraft:paper>]
]);

# Action Speed Upgrade
recipes.remove(<logisticspipes:upgrade_action_speed>);
recipes.addShaped(<logisticspipes:upgrade_action_speed>, [
    [<minecraft:paper>, <minecraft:gold_nugget>, <minecraft:paper>],
    [<minecraft:redstone>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:redstone>],
    [<minecraft:paper>, <minecraft:gold_nugget>, <minecraft:paper>]
]);

# Item Extraction Upgrade
recipes.remove(<logisticspipes:upgrade_item_extraction>);
recipes.addShaped(<logisticspipes:upgrade_item_extraction>, [
    [<minecraft:redstone>, <minecraft:dye:2>, <minecraft:redstone>],
    [<minecraft:paper>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:paper>],
    [<minecraft:redstone>, <logisticspipes:module_extractor_advanced>, <minecraft:redstone>]
]);

# ItemSink Extraction Upgrade
recipes.remove(<logisticspipes:upgrade_item_stack_extraction>);
recipes.addShaped(<logisticspipes:upgrade_item_stack_extraction>, [
    [<buildcraftsilicon:redstone_chipset:2>, null, null],
    [<logisticspipes:upgrade_item_extraction>, null, null],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:upgrade_item_stack_extraction>, [
    [<buildcraftcore:gear_gold>, null, null],
    [<logisticspipes:upgrade_item_extraction>, null, null],
    [null, null, null]
]);

# MJ Power Supplier Upgrade
recipes.addShapeless(<logisticspipes:upgrade_power_supplier_mj>, [<logisticspipes:upgrade_power_supplier_rf>]);

# RF Power Supplier Upgrade
recipes.addShaped(<logisticspipes:upgrade_power_supplier_rf>, [
    [<minecraft:paper>, <buildcraftcore:engine:2>, <minecraft:paper>],
    [<buildcraftsilicon:redstone_chipset:2>, <logisticspipes:upgrade_power_transportation>, <buildcraftsilicon:redstone_chipset:2>],
    [<minecraft:paper>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:paper>]
]);
recipes.addShapeless(<logisticspipes:upgrade_power_supplier_rf>, [<logisticspipes:upgrade_power_supplier_mj>]);

# EU LV Power Supplier Upgrade
recipes.addShaped(<logisticspipes:upgrade_power_supplier_eu_lv>, [
    [<minecraft:paper>, <ic2:ic2upgrades:2>, <minecraft:paper>],
    [<ic2:ic2upgrades>, <logisticspipes:upgrade_power_transportation>, <ic2:ic2upgrades>],
    [<minecraft:paper>, <ic2:ic2upgrades:1>, <minecraft:paper>]
]);

# EU MV Power Supplier Upgrade
recipes.addShaped(<logisticspipes:upgrade_power_supplier_eu_mv>, [
    [<minecraft:paper>, <ic2:ic2upgrades:2>, <minecraft:paper>],
    [<ic2:ic2upgrades>, <logisticspipes:upgrade_power_supplier_eu_lv>, <ic2:ic2upgrades>],
    [<minecraft:paper>, <ic2:ic2upgrades:1>, <minecraft:paper>]
]);

# EU HV Power Supplier Upgrade
recipes.addShaped(<logisticspipes:upgrade_power_supplier_eu_hv>, [
    [<minecraft:paper>, <ic2:ic2upgrades:2>, <minecraft:paper>],
    [<ic2:ic2upgrades>, <logisticspipes:upgrade_power_supplier_eu_mv>, <ic2:ic2upgrades>],
    [<minecraft:paper>, <ic2:ic2upgrades:1>, <minecraft:paper>]
]);

# EU EV Power Supplier Upgrade
recipes.addShaped(<logisticspipes:upgrade_power_supplier_eu_ev>, [
    [<minecraft:paper>, <ic2:ic2upgrades:2>, <minecraft:paper>],
    [<ic2:ic2upgrades>, <logisticspipes:upgrade_power_supplier_eu_hv>, <ic2:ic2upgrades>],
    [<minecraft:paper>, <ic2:ic2upgrades:1>, <minecraft:paper>]
]);

# Remote Orderer
recipes.removeShaped(<logisticspipes:remote_orderer>, [
    [<logisticspipes:chip_advanced>, <minecraft:gold_ingot>, <logisticspipes:chip_advanced>],
    [<minecraft:redstone>, <minecraft:glass>, <minecraft:dye:4>],
    [<minecraft:redstone>, <minecraft:redstone>, <minecraft:dye:4>]
]);
recipes.addShaped(<logisticspipes:remote_orderer>, [
    [<minecraft:glass>, <minecraft:glass>, null],
    [<minecraft:glass>, <minecraft:glass>, null],
    [<buildcraftsilicon:redstone_chipset:4>, <buildcraftsilicon:redstone_chipset:4>, null]
]);
recipes.addShaped(<logisticspipes:remote_orderer>, [
    [<minecraft:glass>, <minecraft:glass>, null],
    [<minecraft:glass>, <minecraft:glass>, null],
    [<buildcraftcore:gear_diamond>, <buildcraftcore:gear_diamond>, null]
]);



########################################
# Blocks
########################################
# Unrouted Transport Pipe
recipes.remove(<logisticspipes:pipe_transport_basic>);
recipes.addShaped(<logisticspipes:pipe_transport_basic>, [
    [<minecraft:iron_ingot>, <minecraft:glass_pane>, <minecraft:iron_ingot>],
    [null, <minecraft:redstone>, null],
    [null, null, null]
]);

# Basic Logistics Pipe
recipes.remove(<logisticspipes:pipe_basic>);
recipes.addShapeless(<logisticspipes:pipe_basic>, [<logisticspipes:pipe_request> | <logisticspipes:pipe_provider> | <logisticspipes:pipe_crafting> | <logisticspipes:pipe_satellite> | <logisticspipes:pipe_supplier> |<logisticspipes:pipe_chassis_mk1> | <logisticspipes:pipe_chassis_mk2> | <logisticspipes:pipe_chassis_mk3> | <logisticspipes:pipe_chassis_mk4> | <logisticspipes:pipe_chassis_mk5> | <logisticspipes:pipe_request_mk2> | <logisticspipes:pipe_remote_orderer> | <logisticspipes:pipe_inventory_system_connector> | <logisticspipes:pipe_system_entrance> | <logisticspipes:pipe_system_destination> | <logisticspipes:pipe_firewall> | <logisticspipes:pipe_fluid_supplier> | <logisticspipes:pipe_fluid_basic> | <logisticspipes:pipe_fluid_request> | <logisticspipes:pipe_fluid_provider> | <logisticspipes:pipe_fluid_insertion> | <logisticspipes:pipe_fluid_extractor> | <logisticspipes:pipe_fluid_satellite> | <logisticspipes:pipe_fluid_supplier_mk2>]);
recipes.addShaped(<logisticspipes:pipe_basic> * 8, [
    [<minecraft:glass>, <minecraft:redstone_torch>, <minecraft:glass>],
    [<buildcraftsilicon:redstone_chipset:2>, <buildcrafttransport:pipe_diamond_item>, <buildcraftsilicon:redstone_chipset:2>],
    [<minecraft:glass>, <minecraft:redstone_torch>, <minecraft:glass>]
]);
recipes.addShaped(<logisticspipes:pipe_basic> * 8, [
    [<minecraft:glass>, <minecraft:redstone_torch>, <minecraft:glass>],
    [<buildcraftcore:gear_gold>, <buildcrafttransport:pipe_diamond_item>, <buildcraftcore:gear_gold>],
    [<minecraft:glass>, <minecraft:redstone_torch>, <minecraft:glass>]
]);

# Request Logistics Pipe MK1
recipes.remove(<logisticspipes:pipe_request>);
recipes.addShaped(<logisticspipes:pipe_request>, [
    [<buildcraftsilicon:redstone_chipset:2>, <logisticspipes:pipe_basic>, <buildcraftsilicon:redstone_chipset:2>],
    [null, null, null],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:pipe_request>, [
    [<buildcraftcore:gear_gold>, <logisticspipes:pipe_basic>, <buildcraftcore:gear_gold>],
    [null, null, null],
    [null, null, null]
]);

# Request Logistics Pipe MK2
recipes.remove(<logisticspipes:pipe_request_mk2>);
recipes.addShaped(<logisticspipes:pipe_request_mk2>, [
    [<buildcraftsilicon:redstone_chipset:4>, null, null],
    [<logisticspipes:pipe_request>, null, null],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:pipe_request_mk2>, [
    [<buildcraftcore:gear_diamond>, null, null],
    [<logisticspipes:pipe_request>, null, null],
    [<minecraft:redstone>, null, null]
]);

# Provider Logistics Pipe
recipes.remove(<logisticspipes:pipe_provider>);
recipes.addShaped(<logisticspipes:pipe_provider>, [
    [<minecraft:glowstone_dust>, null, null],
    [<logisticspipes:pipe_basic>, null, null],
    [null, null, null]
]);

# Crafting Logistics Pipe
recipes.remove(<logisticspipes:pipe_crafting>);
recipes.addShaped(<logisticspipes:pipe_crafting>, [
    [<minecraft:glowstone_dust>, <logisticspipes:pipe_basic>, <minecraft:glowstone_dust>],
    [null, null, null],
    [null, null, null]
]);

# Satellite Logistics Pipe
recipes.remove(<logisticspipes:pipe_satellite>);
recipes.addShaped(<logisticspipes:pipe_satellite>, [
    [<minecraft:redstone>, <logisticspipes:pipe_basic>, <minecraft:redstone>],
    [null, null, null],
    [null, null, null]
]);

# Supplier Logistics Pipe
recipes.remove(<logisticspipes:pipe_supplier>);
recipes.addShaped(<logisticspipes:pipe_supplier>, [
    [<minecraft:dye:4>, <logisticspipes:pipe_basic>, <minecraft:dye:4>],
    [null, null, null],
    [null, null, null]
]);

# Logistics Chassis MK1
recipes.remove(<logisticspipes:pipe_chassis_mk1>);
recipes.addShaped(<logisticspipes:pipe_chassis_mk1>, [
    [null, <buildcraftsilicon:redstone_chipset>, null],
    [<buildcraftsilicon:redstone_chipset>, <logisticspipes:pipe_basic>, <buildcraftsilicon:redstone_chipset>],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:pipe_chassis_mk1>, [
    [<minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>],
    [<minecraft:redstone>, <logisticspipes:pipe_basic>, <minecraft:redstone>],
    [<minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>]
]);

# Logistics Chassis MK2
recipes.remove(<logisticspipes:pipe_chassis_mk2>);
recipes.addShaped(<logisticspipes:pipe_chassis_mk2>, [
    [null, <buildcraftsilicon:redstone_chipset:1>, null],
    [<buildcraftsilicon:redstone_chipset:1>, <logisticspipes:pipe_basic>, <buildcraftsilicon:redstone_chipset:1>],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:pipe_chassis_mk2>, [
    [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],
    [<minecraft:iron_ingot>, <logisticspipes:pipe_basic>, <minecraft:iron_ingot>],
    [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]
]);

# Logistics Chassis MK3
recipes.remove(<logisticspipes:pipe_chassis_mk3>);
recipes.addShaped(<logisticspipes:pipe_chassis_mk3>, [
    [null, <buildcraftsilicon:redstone_chipset:2>, null],
    [<buildcraftsilicon:redstone_chipset:2>, <logisticspipes:pipe_basic>, <buildcraftsilicon:redstone_chipset:2>],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:pipe_chassis_mk3>, [
    [<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:gold_ingot>],
    [<minecraft:gold_ingot>, <logisticspipes:pipe_basic>, <minecraft:gold_ingot>],
    [<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:gold_ingot>]
]);

# Logistics Chassis MK4
recipes.remove(<logisticspipes:pipe_chassis_mk4>);
recipes.addShaped(<logisticspipes:pipe_chassis_mk4>, [
    [null, <buildcraftsilicon:redstone_chipset:4>, null],
    [<buildcraftsilicon:redstone_chipset:4>, <logisticspipes:pipe_basic>, <buildcraftsilicon:redstone_chipset:4>],
    [null, null, null]
]);
recipes.addShaped(<logisticspipes:pipe_chassis_mk4>, [
    [<minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>],
    [<minecraft:diamond>, <logisticspipes:pipe_basic>, <minecraft:diamond>],
    [<minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>]
]);

# Logistics Chassis MK5
recipes.remove(<logisticspipes:pipe_chassis_mk5>);
recipes.addShaped(<logisticspipes:pipe_chassis_mk5>, [
    [<buildcraftsilicon:redstone_chipset:4>, <buildcraftsilicon:redstone_chipset:2>, <buildcraftsilicon:redstone_chipset:4>],
    [<buildcraftsilicon:redstone_chipset:2>, <logisticspipes:pipe_basic>, <buildcraftsilicon:redstone_chipset:2>],
    [<buildcraftsilicon:redstone_chipset:4>, <buildcraftsilicon:redstone_chipset:2>, <buildcraftsilicon:redstone_chipset:4>]
]);
recipes.addShaped(<logisticspipes:pipe_chassis_mk5>, [
    [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:diamond_block>],
    [<minecraft:gold_block>, <logisticspipes:pipe_basic>, <minecraft:gold_block>],
    [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:diamond_block>]
]);

# Remote Orderer Logistics Pipe
recipes.remove(<logisticspipes:pipe_remote_orderer>);
recipes.addShaped(<logisticspipes:pipe_remote_orderer>, [
    [<minecraft:ender_pearl>, null, null],
    [<logisticspipes:pipe_basic>, null, null],
    [<minecraft:redstone>, null, null]
]);

# Logistics Inventory System Connector
recipes.remove(<logisticspipes:pipe_inventory_system_connector>);
recipes.addShaped(<logisticspipes:pipe_inventory_system_connector>, [
    [null, <minecraft:ender_pearl>, null],
    [<minecraft:redstone>, <logisticspipes:pipe_basic>, <minecraft:redstone>],
    [null, null, null]
]);

# Logistics System Entrance Pipe
recipes.remove(<logisticspipes:pipe_system_entrance>);
recipes.addShaped(<logisticspipes:pipe_system_entrance>, [
    [<minecraft:dye:2>, null, null],
    [<logisticspipes:pipe_provider>, null, null],
    [null, null, null]
]);

# Logistics System Destination Pipe
recipes.remove(<logisticspipes:pipe_system_destination>);
recipes.addShaped(<logisticspipes:pipe_system_destination>, [
    [<minecraft:dye:1>, null, null],
    [<logisticspipes:pipe_provider>, null, null],
    [null, null, null]
]);

# Logistics Firewall Pipe
recipes.remove(<logisticspipes:pipe_firewall>);
recipes.addShaped(<logisticspipes:pipe_firewall>, [
    [<minecraft:nether_brick>, <buildcraftsilicon:redstone_chipset:4>, <minecraft:nether_brick>],
    [null, <logisticspipes:pipe_basic>, null],
    [<minecraft:nether_brick>, null, <minecraft:nether_brick>]
]);

# Logistics Fluid Basic Pipe
recipes.remove(<logisticspipes:pipe_fluid_basic>);
recipes.addShaped(<logisticspipes:pipe_fluid_basic>, [
    [<buildcrafttransport:waterproof>, <buildcrafttransport:waterproof>, <buildcrafttransport:waterproof>],
    [<minecraft:bucket>, <logisticspipes:pipe_basic>, <minecraft:bucket>],
    [<buildcrafttransport:waterproof>, <buildcrafttransport:waterproof>, <buildcrafttransport:waterproof>]
]);

# Logistics Fluid Request Pipe
recipes.remove(<logisticspipes:pipe_fluid_request>);
recipes.addShaped(<logisticspipes:pipe_fluid_request>, [
    [<buildcraftsilicon:redstone_chipset:2>, null, null],
    [<logisticspipes:pipe_fluid_basic>, null, null],
    [<buildcraftcore:gear_iron>, null, null]
]);
recipes.addShaped(<logisticspipes:pipe_fluid_request>, [
    [<buildcraftcore:gear_gold>, null, null],
    [<logisticspipes:pipe_fluid_basic>, null, null],
    [<buildcraftcore:gear_iron>, null, null]
]);

# Logistics Fluid Provider Pipe
recipes.remove(<logisticspipes:pipe_fluid_provider>);
recipes.addShaped(<logisticspipes:pipe_fluid_provider>, [
    [<buildcraftsilicon:redstone_chipset:2>, null, null],
    [<logisticspipes:pipe_fluid_basic>, null, null],
    [<minecraft:redstone_torch>, null, null]
]);
recipes.addShaped(<logisticspipes:pipe_fluid_provider>, [
    [null, <buildcraftcore:gear_gold>, null],
    [<minecraft:redstone>, <logisticspipes:pipe_fluid_basic>, <minecraft:redstone>],
    [null, null, null]
]);

# Logistics Fluid Container Supplier Pipe
recipes.remove(<logisticspipes:pipe_fluid_supplier>);
recipes.addShaped(<logisticspipes:pipe_fluid_supplier>, [
    [<minecraft:dye:4>, <logisticspipes:pipe_basic>, <minecraft:dye:4>],[null, <minecraft:bucket>, null], [null, null, null]]);

# Logistics Fluid Supplier Pipe
recipes.remove(<logisticspipes:pipe_fluid_supplier_mk2>);
recipes.addShaped(<logisticspipes:pipe_fluid_supplier_mk2>, [
    [<minecraft:dye:4>, <logisticspipes:pipe_fluid_basic>, <minecraft:dye:4>],[null, null, null], [null, null, null]]);

# Logistics Fluid Satellite Pipe
recipes.remove(<logisticspipes:pipe_fluid_satellite>);
recipes.addShaped(<logisticspipes:pipe_fluid_satellite>, [
    [<minecraft:redstone>, <logisticspipes:pipe_fluid_basic>, <minecraft:redstone>],
    [null, null, null],
    [null, null, null]
]);

# Logistics Fluid Insertion Pipe
recipes.remove(<logisticspipes:pipe_fluid_insertion>);
recipes.addShaped(<logisticspipes:pipe_fluid_insertion>, [
    [null, <minecraft:glass_bottle>, null],
    [<minecraft:glass_bottle>, <logisticspipes:pipe_fluid_basic>, <minecraft:glass_bottle>],
    [null, <minecraft:glass_bottle>, null]
]);

# Logistics Fluid Extractor Pipe
recipes.remove(<logisticspipes:pipe_fluid_extractor>);
recipes.addShaped(<logisticspipes:pipe_fluid_extractor>, [
    [<buildcrafttransport:pipe_wood_fluid>, null, null],
    [<logisticspipes:pipe_fluid_basic>, null, null],
    [null, null, null]
]);

# Logistics Fluid Terminus Pipe
recipes.remove(<logisticspipes:pipe_fluid_terminus>);
recipes.addShaped(<logisticspipes:pipe_fluid_terminus>, [
    [<minecraft:dye>, <logisticspipes:pipe_fluid_basic>, <minecraft:dye:5>],
    [null, null, null],
    [null, null, null]
]);

# Logistics Block Frame
recipes.remove(<logisticspipes:frame>);
mods.jei.JEI.hide(<logisticspipes:frame>);

# Logistics Crafting Table
recipes.remove(<logisticspipes:crafting_table>);
recipes.addShaped(<logisticspipes:crafting_table>, [
    [<minecraft:planks>, <minecraft:crafting_table>, <minecraft:planks>],
    [null, <buildcraftcore:gear_stone>, null],
    [<minecraft:planks>, <minecraft:chest>, <minecraft:planks>]
]);

# Logistics Fuzzy Crafting Table
recipes.remove(<logisticspipes:crafting_table_fuzzy>);
recipes.addShapeless(<logisticspipes:crafting_table_fuzzy>, [<logisticspipes:crafting_table>,<minecraft:quartz>]);

# Logistics Request Table
recipes.remove(<logisticspipes:pipe_request_table>);
recipes.addShaped(<logisticspipes:pipe_request_table>, [
    [<minecraft:stonebrick>, <minecraft:crafting_table>, <minecraft:stonebrick>],
    [<logisticspipes:pipe_crafting>, <minecraft:hopper>, <logisticspipes:pipe_request_mk2>],
    [<buildcraftsilicon:redstone_chipset:4>, <minecraft:chest>, <buildcraftsilicon:redstone_chipset:4>]
]);
recipes.addShaped(<logisticspipes:pipe_request_table>, [
    [<minecraft:stonebrick>, <minecraft:crafting_table>, <minecraft:stonebrick>],
    [<logisticspipes:pipe_crafting>, <minecraft:hopper>, <logisticspipes:pipe_request_mk2>],
    [<buildcraftcore:gear_diamond>, <minecraft:chest>, <buildcraftcore:gear_diamond>]
]);

# Logistics Security Station
recipes.remove(<logisticspipes:security_station>);
recipes.addShaped(<logisticspipes:security_station>, [
    [<minecraft:iron_ingot>, <buildcraftsilicon:redstone_chipset:4>, <minecraft:iron_ingot>],
    [<minecraft:redstone>, <logisticspipes:pipe_basic>, <minecraft:redstone>],
    [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]
]);
recipes.addShaped(<logisticspipes:security_station>, [
    [<minecraft:iron_ingot>, <buildcraftcore:gear_diamond>, <minecraft:iron_ingot>],
    [<minecraft:redstone>, <logisticspipes:pipe_basic>, <minecraft:redstone>],
    [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]
]);

# Logistics Power Junction
recipes.remove(<logisticspipes:power_junction>);
mods.jei.JEI.hide(<logisticspipes:power_junction>);

# Logistics Program Compiler
recipes.remove(<logisticspipes:program_compiler>);
mods.jei.JEI.hide(<logisticspipes:program_compiler>);

# Logistics Statistics Table
recipes.remove(<logisticspipes:statistics_table>);
recipes.addShaped(<logisticspipes:statistics_table>, [
    [<minecraft:iron_ingot>, <buildcraftsilicon:redstone_chipset:2>, <minecraft:iron_ingot>],
    [<minecraft:redstone>, <logisticspipes:pipe_basic>, <minecraft:redstone>],
    [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]
]);
recipes.addShaped(<logisticspipes:statistics_table>, [
    [<minecraft:iron_ingot>, <buildcraftcore:gear_gold>, <minecraft:iron_ingot>],
    [<minecraft:redstone>, <logisticspipes:pipe_basic>, <minecraft:redstone>],
    [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]
]);

# MJ Power Provider
recipes.addShapeless(<logisticspipes:power_provider_mj>, [<logisticspipes:power_provider_rf>]);

# RF Power Provider
recipes.addShaped(<logisticspipes:power_provider_rf>, [
    [<minecraft:paper>, <buildcraftcore:engine:2>, <minecraft:paper>],
    [<buildcraftsilicon:redstone_chipset:2>, <ore:blockRedstone>, <buildcraftsilicon:redstone_chipset:2>],
    [<minecraft:paper>, <buildcraftsilicon:redstone_chipset:1>, <minecraft:paper>]
]);
recipes.addShapeless(<logisticspipes:power_provider_rf>, [<logisticspipes:power_provider_mj>]);

# EU Power Provider
recipes.addShaped(<logisticspipes:power_provider_eu>, [
    [<minecraft:paper>, <ic2:ic2upgrades:2>, <minecraft:paper>],
    [<ic2:ic2upgrades>, <ore:blockRedstone>, <ic2:ic2upgrades>],
    [<minecraft:paper>, <ic2:ic2upgrades:1>, <minecraft:paper>]
]);
