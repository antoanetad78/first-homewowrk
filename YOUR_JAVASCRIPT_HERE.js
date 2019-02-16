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

// const heroLikeCreature = {
//     health: 2,
//     inventory: [{
//         type: 'dagger',
//         damage: 2
//     }],
//     weapon: {
//         type:'sword',
//         damage: 5
//     }
// }

const dagger = {
    type: 'dagger',
    damage: 2
}

function rest(someObject) {
    someObject.health = 10
    return someObject;
}

// rest(heroLikeCreature)

function pickUpItem(heroLikeObject, itemToPickObject) {
    heroLikeObject.inventory.push(itemToPickObject)
}

// pickUpItem(hero, hero.weapon)


function equipWeapon(heroLikeObject) {
    
    if (heroLikeObject.inventory.length !== 0){
        let weapon = heroLikeObject.weapon
        heroLikeObject.inventory[0] = weapon
    }
    return

    
}

// equipWeapon(hero)