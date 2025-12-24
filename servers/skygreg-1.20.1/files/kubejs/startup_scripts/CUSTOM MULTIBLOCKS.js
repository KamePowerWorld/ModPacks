// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')




/*




GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('star_forge')
        // .category('gregstar')
        .setEUIO('in')
        .setMaxIOSize(15, 5, 5, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('star_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('star_forge')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("               ", "               ", "               ", "               ", "               ", "      W W      ", "     CWEWC     ", "      W W      ", "               ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "      GCG      ", "     CWCWC     ", "   CCPPPPPCC   ", "     CWCWC     ", "      GCG      ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "      GCG      ", "     GGCGG     ", "    GG   GG    ", "   CC WCW CC   ", "  CPPCWCWCPPC  ", "   CC WCW CC   ", "    GG   GG    ", "     GGCGG     ", "      GCG      ", "               ", "               ")
            .aisle("               ", "      GCG      ", "    GG   GG    ", "   GG     GG   ", "   G       G   ", "  C         C  ", " CPCC  S  CCPC ", "  C         C  ", "   G       G   ", "   GG     GG   ", "    GG   GG    ", "      GCG      ", "               ")
            .aisle("               ", "     GGCGG     ", "   GG     GG   ", "   G       G   ", "  G         G  ", "  C         C  ", " CPC       CPC ", "  C         C  ", "  G         G  ", "   G       G   ", "   GG     GG   ", "     GGCGG     ", "               ")
            .aisle("      CCC      ", "    GG C GG    ", "   G       G   ", "  G         G  ", "  G         G  ", " C           C ", "CPC         CPC", " C           C ", "  G         G  ", "  G         G  ", "   G       G   ", "    GG C GG    ", "      CCC      ")
            .aisle("     CFCFC     ", "   GG CCC GG   ", "  G    C    G  ", "  G         G  ", " G           G ", "WWW         WWW", "WPW         WPW", "WWW         WWW", " G           G ", "  G         G  ", "  G    C    G  ", "   GG CCC GG   ", "     CFCFC     ")
            .aisle("     CCFCC     ", "   CCCCPCCCC   ", "  C   CCC   C  ", "  C    S    C  ", " C           C ", " CC         CC ", "EPCS   I   SCPE", " CC         CC ", " C           C ", "  C    S    C  ", "  C   CCC   C  ", "   CCCCPCCCC   ", "     CCFCC     ")
            .aisle("     CFCFC     ", "   GG CCC GG   ", "  G    C    G  ", "  G         G  ", " G           G ", "WWW         WWW", "WPW         WPW", "WWW         WWW", " G           G ", "  G         G  ", "  G    C    G  ", "   GG CCC GG   ", "     CFCFC     ")
            .aisle("      CCC      ", "    GG C GG    ", "   G       G   ", "  G         G  ", "  G         G  ", " C           C ", "CPC         CPC", " C           C ", "  G         G  ", "  G         G  ", "   G       G   ", "    GG C GG    ", "      CCC      ")
            .aisle("               ", "     GGCGG     ", "   GG     GG   ", "   G       G   ", "  G         G  ", "  C         C  ", " CPC       CPC ", "  C         C  ", "  G         G  ", "   G       G   ", "   GG     GG   ", "     GGCGG     ", "               ")
            .aisle("               ", "      GCG      ", "    GG   GG    ", "   GG     GG   ", "   G       G   ", "  C         C  ", " CPCC  S  CCPC ", "  C         C  ", "   G       G   ", "   GG     GG   ", "    GG   GG    ", "      GCG      ", "               ")
            .aisle("               ", "               ", "      GCG      ", "     GGCGG     ", "    GG   GG    ", "   CC WCW CC   ", "  CPPCWCWCPPC  ", "   CC WCW CC   ", "    GG   GG    ", "     GGCGG     ", "      GCG      ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "      GCG      ", "     CWCWC     ", "   CCPPPPPCC   ", "     CWCWC     ", "      GCG      ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "               ", "      W W      ", "     AWMWA     ", "      W W      ", "               ", "               ", "               ", "               ", "               ")
            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('W', Predicates.blocks(GTBlocks.COIL_TRINIUM.get()))
            .where("P", Predicates.blocks(GTBlocks.SUPERCONDUCTING_COIL.get()))
            .where('G', Predicates.blocks("minecraft:glass"))
            .where('I', Predicates.blocks("minecraft:stone"))
            .where('S', Predicates.blocks("minecraft:dropper"))
            .where('E', Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(2)
                .or(Predicates.blocks('gtceu:atomic_casing'))) 
            .where('C', Predicates.blocks('gtceu:atomic_casing')
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))) 
            .where('F', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(5)
                .or(Predicates.blocks('gtceu:atomic_casing'))) 
            .where('A', Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)).setExactLimit(1)
                .or(Predicates.blocks('gtceu:atomic_casing'))) 
            .where(' ', Predicates.any())
            .build())
        .shapeInfo(controller => MultiblockShapeInfo.builder()
            .aisle("               ", "               ", "               ", "               ", "               ", "      W W      ", "     CWCWC     ", "      W W      ", "               ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "      GCG      ", "     CWCWC     ", "   CCPPPPPCC   ", "     CWCWC     ", "      GCG      ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "      GCG      ", "     GGCGG     ", "    GG   GG    ", "   CC WCW CC   ", "  CPPCWCWCPPC  ", "   CC WCW CC   ", "    GG   GG    ", "     GGCGG     ", "      GCG      ", "               ", "               ")
            .aisle("               ", "      GCG      ", "    GG   GG    ", "   GG     GG   ", "   G       G   ", "  C         C  ", " CPCC  R  CCPC ", "  C         C  ", "   G       G   ", "   GG     GG   ", "    GG   GG    ", "      GCG      ", "               ")
            .aisle("               ", "     GGCGG     ", "   GG     GG   ", "   G       G   ", "  G         G  ", "  C         C  ", " CPC       CPC ", "  C         C  ", "  G         G  ", "   G       G   ", "   GG     GG   ", "     GGCGG     ", "               ")
            .aisle("      CCC      ", "    GG C GG    ", "   G       G   ", "  G         G  ", "  G         G  ", " C           C ", "CPC         CPC", " C           C ", "  G         G  ", "  G         G  ", "   G       G   ", "    GG C GG    ", "      CCC      ")
            .aisle("     CCCCC     ", "   GG CCC GG   ", "  G    C    G  ", "  G         G  ", " G           G ", "WWW         WWW", "WPW         WPW", "WWW         WWW", " G           G ", "  G         G  ", "  G    C    G  ", "   GG CCC GG   ", "     CFCFC     ")
            .aisle("     CCCCC     ", "   CCCCPCCCC   ", "  C   CCC   C  ", "  C    s    C  ", " C           C ", " CC         CC ", "EPCQ   I   qCPe", " CC         CC ", " C           C ", "  C    S    C  ", "  C   CCC   C  ", "   CCCCPCCCC   ", "     CCFCC     ")
            .aisle("     CCCCC     ", "   GG CCC GG   ", "  G    C    G  ", "  G         G  ", " G           G ", "WWW         WWW", "WPW         WPW", "WWW         WWW", " G           G ", "  G         G  ", "  G    C    G  ", "   GG CCC GG   ", "     CFCFC     ")
            .aisle("      CCC      ", "    GG C GG    ", "   G       G   ", "  G         G  ", "  G         G  ", " C           C ", "CPC         CPC", " C           C ", "  G         G  ", "  G         G  ", "   G       G   ", "    GG C GG    ", "      CCC      ")
            .aisle("               ", "     GGCGG     ", "   GG     GG   ", "   G       G   ", "  G         G  ", "  C         C  ", " CPC       CPC ", "  C         C  ", "  G         G  ", "   G       G   ", "   GG     GG   ", "     GGCGG     ", "               ")
            .aisle("               ", "      GCG      ", "    GG   GG    ", "   GG     GG   ", "   G       G   ", "  C         C  ", " CPCC  r  CCPC ", "  C         C  ", "   G       G   ", "   GG     GG   ", "    GG   GG    ", "      GCG      ", "               ")
            .aisle("               ", "               ", "      GCG      ", "     GGCGG     ", "    GG   GG    ", "   CC WCW CC   ", "  CPPCWCWCPPC  ", "   CC WCW CC   ", "    GG   GG    ", "     GGCGG     ", "      GCG      ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "      GCG      ", "     CWCWC     ", "   CCPPPPPCC   ", "     CWHWC     ", "      GCG      ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "               ", "      W W      ", "     AWMWB     ", "      W W      ", "               ", "               ", "               ", "               ", "               ")
            .where('M', controller, Direction.SOUTH)
            .where('W', GTBlocks.COIL_TRINIUM.get())
            .where("P", GTBlocks.SUPERCONDUCTING_COIL.get())
            .where('G', Block.getBlock("minecraft:glass"))
            .where('I', Block.getBlock("minecraft:stone"))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('Q', Block.getBlock("minecraft:dropper").defaultBlockState().setValue(BlockProperties.FACING, Direction.EAST))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('q', Block.getBlock("minecraft:dropper").defaultBlockState().setValue(BlockProperties.FACING, Direction.WEST))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('R', Block.getBlock("minecraft:dropper").defaultBlockState().setValue(BlockProperties.FACING, Direction.SOUTH))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('r', Block.getBlock("minecraft:dropper").defaultBlockState().setValue(BlockProperties.FACING, Direction.NORTH))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('S', Block.getBlock("minecraft:dropper").defaultBlockState().setValue(BlockProperties.FACING, Direction.DOWN))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('s', Block.getBlock("minecraft:dropper").defaultBlockState().setValue(BlockProperties.FACING, Direction.UP))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('H', Block.getBlock('gtceu:uv_parallel_hatch').defaultBlockState().setValue(BlockProperties.FACING, Direction.SOUTH))
            .where('E', GTMachines.ENERGY_INPUT_HATCH[6], Direction.WEST)
            .where('e', GTMachines.ENERGY_INPUT_HATCH[6], Direction.EAST)
            .where('C', Block.getBlock("gtceu:atomic_casing"))
            .where('F', GTMachines.FLUID_IMPORT_HATCH[6], Direction.UP)
            .where('A', GTMachines.ITEM_IMPORT_BUS[6], Direction.SOUTH)
            .where('B', GTMachines.ITEM_EXPORT_BUS[6], Direction.SOUTH)
            .where(' ', Block.getBlock("minecraft:air"))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing", 
            "gtceu:block/multiblock/implosion_compressor", false)
})




*/












// glass_box

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('glass_box')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('glass_box', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('glass_box')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'ZGZ', 'ZGZ', 'ZNZ')
            .aisle('CCC', 'GSG', 'GMG', 'ZOZ')
            .aisle('CKC', 'ZXZ', 'ZXZ', 'ZZZ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks('gtceu:heat_vent'))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('X', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('Z', Predicates.blocks('gtceu:plascrete'))
            .where('S', Predicates.blocks('gtceu:filter_casing'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/large_chemical_reactor', false)
})







// desulfurizer

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('desulfurizer')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('desulfurizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('desulfurizer')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ')
        .aisle('CCDPDCLCLCLC', 'CCDPDCLCLCLC', 'CCDPD L L L ', '  DPD       ', '  DPD       ', '  DDD       ')
        .aisle('CCDDDCLCLCLC', 'CGDDDXXXXXXX', 'CCDDDCLCLCLC', '  DDD L L L ', '  DDD L L L ', '  DDD       ')
        .aisle('CCCCCCLCLCLC', 'CGGGCCLCLCLC', 'CCCCCCLCLCLC', '   XXXXXXXX ', '      L L L ', '            ')
        .aisle('CCDDDCLCLCLC', 'CGDDDXXXXXXX', 'CCDDDCLCLCLC', '  DDD L L L ', '  DDD L L L ', '  DDD       ')
        .aisle('CCDPDCLCLCLC', 'CKDPDCLCLCLC', 'CCDPD L L L ', '  DPD       ', '  DPD       ', '  DDD       ')
        .aisle('  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ')
        .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('gtceu:tempered_glass'))
            .where('P', Predicates.blocks('gtceu:titanium_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:titanium_gearbox'))
            .where('D', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('L', Predicates.blocks(GTBlocks.COIL_NICHROME.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_stable_titanium', 'gtceu:block/multiblock/large_chemical_reactor', false)
})









// large_gas_collector

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_gas_collector')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_gas_collector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gtceu:gas_collector')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GCyMBlocks.CASING_WATERTIGHT)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle(' CCC ', ' CCC ', ' CCC ', ' CCC ', ' CCC ')
        .aisle('CCCCC', 'CGPGC', 'CGPGC', 'CGPGC', 'CCCCC')
        .aisle('CCCCC', 'CPPPC', 'CPPPC', 'CPPPC', 'CCOCC')
        .aisle('CCCCC', 'CGPGC', 'CGPGC', 'CGPGC', 'CCCCC')
        .aisle(' CCC ', ' CKC ', ' CCC ', ' CCC ', ' CNC ')
        .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('C', Predicates.blocks(GCyMBlocks.CASING_WATERTIGHT.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/gcym/watertight_casing', 'gtceu:block/multiblock/large_chemical_reactor', false)
})










// certus_quartz_charger

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('certus_quartz_charger')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('certus_quartz_charger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('certus_quartz_charger')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'COC')
            .aisle('CKC', 'CXC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('S', Predicates.blocks('ae2:charger'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/large_chemical_reactor', false)
})
















// large_inscriber

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_inscriber')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_inscriber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_inscriber')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'COC')
            .aisle('CKC', 'CXC', 'CXC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('ae2:inscriber'))
            .where('Z', Predicates.blocks('gtceu:mv_forming_press'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/large_chemical_reactor', false)
})








// meat_box

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('meat_box')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('meat_box', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('meat_box')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'COC')
            .aisle('CKC', 'CXC', 'CXC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('mob_grinding_utils:tinted_glass'))
            .where('S', Predicates.blocks('mob_grinding_utils:spikes'))
            .where('Z', Predicates.blocks('easy_villagers:breeder'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/large_chemical_reactor', false)
})














// big_test

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('big_test')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('big_test', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['gtceu:macerator', 'gtceu:compressor'])
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' CCC ', ' CCC ', ' CCC ', ' CCC ', ' CCC ')
            .aisle('CCCCC', 'C   C', 'C   C', 'CTTTC', 'CCCCC')
            .aisle('CCCCC', 'CBIBC', 'CZYZC', 'CTTTC', 'CCOCC')
            .aisle('CCCCC', 'C   C', 'C   C', 'CTTTC', 'CCCCC')
            .aisle(' CKC ', ' XXX ', ' XXX ', ' XXX ', ' CNC ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('gtceu:laminated_glass'))
            .where('Z', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .where('I', Predicates.blocks("davebuildingmod:isolinear_middle_blue"))
            .where('B', Predicates.blocks("gtceu:empty_tier_i_battery"))
            .where('Y', Predicates.blocks("tesseract:tesseract"))
            .where('T', Predicates.blocks("gtceu:assembly_line_grating"))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_stable_titanium', 'gtceu:block/multiblock/large_chemical_reactor', false)
})













// large_resource_generator

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_resource_generator')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_resource_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_resource_generator')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', ' T ', ' T ', ' T ', '   ', '   ', ' T ')
            .aisle('CCC', 'TCT', 'TCT', 'TCT', ' T ', ' T ', 'TTT')
            .aisle('CKC', ' T ', ' T ', ' T ', '   ', '   ', ' T ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('T', Predicates.blocks("gtceu:tungsten_frame"))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_stable_titanium', 'gtceu:block/multiblock/large_chemical_reactor', false)
})













// natural_fluid_generator

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('natural_fluid_generator')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('natural_fluid_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('natural_fluid_generator')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', ' T ', ' T ', ' T ', '   ', '   ', ' T ')
            .aisle('CCC', 'TPT', 'TPT', 'TET', ' T ', ' T ', 'TTT')
            .aisle('CKC', ' T ', ' T ', ' T ', '   ', '   ', ' T ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('T', Predicates.blocks("gtceu:steel_frame"))
            .where('E', Predicates.blocks("tesseract:tesseract"))
            .where('P', Predicates.blocks("gtceu:steel_pipe_casing"))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/large_chemical_reactor', false)
})

















// end_game

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('end_game')
        .setEUIO('in')
        .setMaxIOSize(12, 1, 6, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('end_game', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('end_game')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', '   C       C   ', '   C       C   ', '   C  SSS  C   ', '   MMMSUSMMM   ', '   GGGSSSGGG   ', '   GGGSSSGGG   ', '   MMMSUSMMM   ', '      SSS      ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', ' C           C ', ' C           C ', ' C           C ', ' MMM       MMM ', ' GGG       GGG ', ' GGG       GGG ', ' MMM       MMM ', '               ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  FFFFFFFFFFF  ', '  F         F  ', '  F         F  ', ' MF         FM ', ' GF         FG ', ' GF         FG ', ' MF         FM ', '  F         F  ', '  F         F  ', '  FF       FF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', 'C F         F C', 'C             C', 'C             C', 'MM           MM', 'GG           GG', 'GG           GG', 'MM           MM', '               ', '               ', '  FFF     FFF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F         F  ', '               ', '               ', 'M             M', 'G             G', 'G             G', 'M             M', '               ', '               ', '   FFFFFFFFF   ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GGGGG  F  ', '     GGGGG     ', '     GGGGG     ', 'M    GGGGG    M', 'G    GGGGG    G', 'G    GGGGG    G', 'M    GGGGG    M', '     GGGGG     ', '     GGGGG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GBBBG  F  ', '     GBBBG     ', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GBPBG  F  ', '     GBPBG     ', 'S    GBPBG    S', 'U    GBPBG    U', 'S    GBPBG    S', 'S    GBPBG    S', 'U    GBPBG    U', 'S    GBPBG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GBBBG  F  ', '     GBBBG     ', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GGGGG  F  ', '     GGGGG     ', '     GGGGG     ', 'M    GGGGG    M', 'G    GGGGG    G', 'G    GGGGG    G', 'M    GGGGG    M', '     GGGGG     ', '     GGGGG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F         F  ', '               ', '               ', 'M             M', 'G             G', 'G             G', 'M             M', '               ', '               ', '   FFFFFFFFF   ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', 'C F         F C', 'C             C', 'C             C', 'MM           MM', 'GG           GG', 'GG           GG', 'MM           MM', '               ', '               ', '  FFF     FFF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  FFFFFFFFFFF  ', '  F         F  ', '  F         F  ', ' MF         FM ', ' GF         FG ', ' GF         FG ', ' MF         FM ', '  F         F  ', '  F         F  ', '  FF       FF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', ' C           C ', ' C           C ', ' C           C ', ' MMM       MMM ', ' GGG       GGG ', ' GGG       GGG ', ' MMM       MMM ', '               ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCKCCCCCCC', '   C       C   ', '   C       C   ', '   C  SSS  C   ', '   MMMSUSMMM   ', '   GGGSSSGGG   ', '   GGGSSSGGG   ', '   MMMSUSMMM   ', '      SSS      ', '               ', '               ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('H', Predicates.blocks("gtceu:uhv_hermetic_casing"))
            .where('F', Predicates.blocks("gtceu:neutronium_frame"))
            .where('P', Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .where('B', Predicates.blocks("gtceu:uhv_ultimate_battery"))
            .where('G', Predicates.blocks("gtceu:fusion_glass"))
            .where('S', Predicates.blocks(GTBlocks.COIL_TRITANIUM.get()))
            // .where('S', Predicates.blocks("gtceu:superconducting_coil"))
            .where('U', Predicates.blocks("gtceu:fusion_coil"))
            .where('M', Predicates.blocks("gtceu:fusion_casing_mk3"))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/gcym/atomic_casing', 'gtceu:block/multiblock/large_chemical_reactor', false)
})























// greenhouse

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CGC', 'CGC', 'CLC', 'CCC')
            .aisle('CMC', 'G G', 'G G', 'LIL', 'COC')
            .aisle('CKC', 'CGC', 'CGC', 'CLC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks('moss_block')
                .or(Predicates.blocks('dirt'))
                .or(Predicates.blocks('grass_block'))
            )
            .where('G', Predicates.blocks('ae2:quartz_glass'))
            .where('I', Predicates.blocks('glowstone'))
            .where('L', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})






















GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('creosote_generator')
        .category('multiblock')
        .setEUIO('out')
            .setMaxIOSize(0, 0, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
        .setMaxTooltips(6)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('creosote_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('creosote_generator')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "CCC", "WWW", "CCC")
            .aisle("CCC", "CPC", "WPW", "CMC")
            .aisle("CCC", "CAC", "WWW", "CTC")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('W', Predicates.blocks('gtceu:steel_drum'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('M', Predicates.abilities(PartAbility.MUFFLER)
            .setExactLimit(1)
        )
            .where('T', Predicates.abilities(PartAbility.MAINTENANCE)
            .setExactLimit(1)
        )
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false
        )
})












GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('test_electric')
        .category('test_electric')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('test_electric', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('test_electric', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/compressor");

})