// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {


event.custom(
  {
    "type": "apotheosis:salvaging",
    "conditions": [{
      "type": "apotheosis:module",
      "module": "adventure"
    }],
    "input": {
      "tag": "forge:dusts/metal_mixture"
    },
    "outputs": [{
      "min_count": 1,
      "max_count": 3,
      "stack": {
        "item": "apotheosis:common_material"
      }
    }]
  }
)



// fin //

  })