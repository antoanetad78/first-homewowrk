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

const creature = {
    health: 2
}

function rest(theObject) {
    theObject.health = 10
    return theObject;
}

rest(creature)

function pickUpItem() {
    
}

function equipWeapon() {

}