// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

event.custom(
  {
    "type":"botanypots:crop",
    "seed":{"item":"gtceu:rubber_sapling"},
    "categories":["dirt"],
    "growthTicks":2400,
    "display":{"block":"gtceu:rubber_sapling"},
    "drops":[
      {
        "chance":1.00,
        "output":{"item":"gtceu:rubber_log"},
        "minRolls":2,
        "maxRolls":4},
        {
          "chance":0.10,
          "output":{"item":"minecraft:stick"},
          "minRolls":1,
          "maxRolls":2},
          {
            "chance":0.25,
            "output":{"item":"gtceu:sticky_resin"}},
            {"chance":0.65,
            "output":{"item":"gtceu:rubber_sapling"}
          }
        ]
      }
)

// fin //

  })