# Imoprts



########################################
# Blocks
########################################
# Enderstorage
## Ender Chest
recipes.remove(<enderstorage:ender_storage:0>);
recipes.addShaped(<enderstorage:ender_storage:0>, [
    [<minecraft:blaze_rod>, <minecraft:wool>, <minecraft:blaze_rod>],
    [<minecraft:obsidian>, <ironchest:iron_chest:6>, <minecraft:obsidian>],
    [<minecraft:blaze_rod>, <minecraft:ender_pearl>, <minecraft:blaze_rod>]
]);

## Ender Tank
recipes.remove(<enderstorage:ender_storage:1>);
recipes.addShaped(<enderstorage:ender_storage:1>, [
    [<minecraft:blaze_rod>, <minecraft:wool>, <minecraft:blaze_rod>],
    [<minecraft:obsidian>, <irontanks:obsidian_tank>, <minecraft:obsidian>],
    [<minecraft:blaze_rod>, <minecraft:ender_pearl>, <minecraft:blaze_rod>]
]);

## Multi Page Chest
recipes.remove(<multipagechest:multipagechest>);
recipes.addShaped(<multipagechest:multipagechest>, [
    [<ironchest:iron_chest:2>, <ore:plankWood>, <ironchest:iron_chest:2>],
    [<ore:plankWood>, <minecraft:chest>, <ore:plankWood>],
    [<ironchest:iron_chest:2>, <ore:plankWood>, <ironchest:iron_chest:2>]
]);
