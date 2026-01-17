# Imoprts
import mods.jei.JEI;



########################################
# Items
########################################
# Akuto Engine
## Klein Star Neptune
JEI.removeAndHide(<akutoengine:kleinstarex>);

## Klein Star Jupiter
JEI.removeAndHide(<akutoengine:kleinstarex:1>);


########################################
# Blocks
########################################
# ProjectE
## Watch
recipes.remove(<projecte:item.pe_time_watch>);

# Project EX
# Collectors for PEEX
recipes.addShapeless(<projectex:collector:3>, [<peex:collectors/collectormk4>]);
recipes.addShapeless(<projectex:collector:4>, [<peex:collectors/collectormk5>]);
recipes.addShapeless(<projectex:collector:5>, [<peex:collectors/collectormk6>]);
recipes.addShapeless(<projectex:collector:6>, [<peex:collectors/collectormk7>]);
recipes.addShapeless(<projectex:collector:7>, [<peex:collectors/collectormk8>]);
recipes.addShapeless(<projectex:collector:8>, [<peex:collectors/collectormk9>]);
recipes.addShapeless(<projectex:collector:9>, [<peex:collectors/collectormk10>]);

# PEEX
# EMC Baubles
recipes.addShapeless(<peex:collectors/collectormk4>, [<emcbaubles:collector_mk4_necklace>]);
recipes.addShapeless(<peex:collectors/collectormk5>, [<emcbaubles:collector_mk5_necklace>]);
recipes.addShapeless(<peex:collectors/collectormk6>, [<emcbaubles:collector_mk6_necklace>]);
recipes.addShapeless(<peex:collectors/collectormk7>, [<emcbaubles:collector_mk7_necklace>]);
recipes.addShapeless(<peex:collectors/collectormk8>, [<emcbaubles:collector_mk8_necklace>]);
recipes.addShapeless(<peex:collectors/collectormk9>, [<emcbaubles:collector_mk9_necklace>]);
recipes.addShapeless(<peex:collectors/collectormk10>, [<emcbaubles:collector_mk10_necklace>]);
recipes.addShaped(<emcbaubles:collector_mk4_necklace>, [
    [<minecraft:string>, <minecraft:string>, <minecraft:string>],
    [<minecraft:string>, <peex:collectors/collectormk4>, <minecraft:string>],
    [<minecraft:string>, <minecraft:string>, <minecraft:string>]
]);
recipes.addShaped(<emcbaubles:collector_mk5_necklace>, [
    [<minecraft:string>, <minecraft:string>, <minecraft:string>],
    [<minecraft:string>, <peex:collectors/collectormk5>, <minecraft:string>],
    [<minecraft:string>, <minecraft:string>, <minecraft:string>]
]);
recipes.addShaped(<emcbaubles:collector_mk6_necklace>, [
    [<minecraft:string>, <minecraft:string>, <minecraft:string>],
    [<minecraft:string>, <peex:collectors/collectormk6>, <minecraft:string>],
    [<minecraft:string>, <minecraft:string>, <minecraft:string>]
]);
recipes.addShaped(<emcbaubles:collector_mk7_necklace>, [
    [<minecraft:string>, <minecraft:string>, <minecraft:string>],
    [<minecraft:string>, <peex:collectors/collectormk7>, <minecraft:string>],
    [<minecraft:string>, <minecraft:string>, <minecraft:string>]
]);
recipes.addShaped(<emcbaubles:collector_mk8_necklace>, [
    [<minecraft:string>, <minecraft:string>, <minecraft:string>],
    [<minecraft:string>, <peex:collectors/collectormk8>, <minecraft:string>],
    [<minecraft:string>, <minecraft:string>, <minecraft:string>]
]);
recipes.addShaped(<emcbaubles:collector_mk9_necklace>, [
    [<minecraft:string>, <minecraft:string>, <minecraft:string>],
    [<minecraft:string>, <peex:collectors/collectormk9>, <minecraft:string>],
    [<minecraft:string>, <minecraft:string>, <minecraft:string>]
]);
recipes.addShaped(<emcbaubles:collector_mk10_necklace>, [
    [<minecraft:string>, <minecraft:string>, <minecraft:string>],
    [<minecraft:string>, <peex:collectors/collectormk10>, <minecraft:string>],
    [<minecraft:string>, <minecraft:string>, <minecraft:string>]
]);
