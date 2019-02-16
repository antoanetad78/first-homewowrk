// Write your JS here
const hero = {
    name: 'Lexx',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'gun',
        damage:2
    }
}

const dagger = {
    type: 'dagger',
    damage: 2
}

function rest(someObject) {
    someObject.health = 10
    return someObject;
}


function pickUpItem(heroLikeObject, itemToPickObject) {
    heroLikeObject.inventory.push(itemToPickObject)
}



function equipWeapon(heroLikeObject) {
    
    if (heroLikeObject.inventory.length !== 0){
        let weapon = heroLikeObject.weapon
        heroLikeObject.inventory.unshift(weapon)
        heroLikeObject.weapon = heroLikeObject.inventory[1]
    }
    return

    
}
