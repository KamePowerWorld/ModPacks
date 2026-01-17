# Imoprts
import mods.jei.JEI;



########################################
# Blocks
########################################
# Solar Panel
JEI.removeAndHide(<ic2:blockgenerator:3>);
recipes.removeByRecipeName("vrgenerator:vrgenerator.visibleraysolar.visibleray1");
recipes.addShaped(<vrgenerator:visibleraysolar>, [
    [<ic2:itemmisc:12>, <ore:blockGlass>, <ic2:itemmisc:12>],
    [<ore:blockGlass>, <ic2:itemmisc:12>, <ore:blockGlass>],
    [<ic2:itemmisc:451>, <ic2:blockgenerator>, <ic2:itemmisc:451>]
]);
recipes.addShaped(<vrgenerator:visibleraysolar>, [
    [<ic2:itemmisc:6>, <ore:blockGlass>, <ic2:itemmisc:6>],
    [<ore:blockGlass>, <ic2:itemmisc:6>, <ore:blockGlass>],
    [<ic2:itemmisc:451>, <ic2:blockgenerator>, <ic2:itemmisc:451>]
]);

# Solar Turbine
recipes.remove(<ic2:blockgenerator:9>);
recipes.addShaped(<ic2:blockgenerator:9>, [
    [<ic2:itemmisc:257>, <vrgenerator:visibleraysolar>, <ic2:itemmisc:257>],
    [<ic2:blockmachinelv:11>, <ic2:itemmisc:304>, <ic2:blockmachinelv:11>],
    [<ic2:itemmisc:257>, <ic2:blockmachinemv>, <ic2:itemmisc:257>]
]);

# Solar Helmet
recipes.remove(<ic2:itemsolarhelmets:0>);
recipes.remove(<ic2:itemsolarhelmets:1>);

# LV Solar Panel
JEI.removeAndHide(<ic2:blockcompactedgenerator:0>);

# MV Solar Panel
JEI.removeAndHide(<ic2:blockcompactedgenerator:1>);

# HV Solar Panel
JEI.removeAndHide(<ic2:blockcompactedgenerator:2>);

# VisibleRay Generator 1 EU/t
recipes.removeShapeless(<vrgenerator:visibleraysolar>, [<ic2:blockgenerator:3>, <ic2:itemmisc:452>]);

# [Another] CE Permanent lite generator 512 EU/t
recipes.addShaped(<vrgenerator:visibleraysolar:8>, [
    [<ic2:itemmisc:256>, <minecraft:glowstone>, <ic2:itemmisc:256>],
    [<vrgenerator:visibleraysolar:3>, <ic2:blockelectric:9>, <vrgenerator:visibleraysolar:3>],
    [<ic2:itemmisc:256>, <minecraft:glowstone>, <ic2:itemmisc:256>]
]);
