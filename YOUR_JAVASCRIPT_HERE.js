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

function displayStats(hero) {
    const displayStats = document.getElementById('displayStats')
    const name = hero.name
    const health = hero.health;
    const weaponType = hero.weapon.type;
    const weaponDamage = hero.weapon.damage;
    document.getElementById('name').innerText = name;
    document.getElementById('type').innerText = weaponType;
    document.getElementById('damage').innerText = weaponDamage;
    document.getElementById('health').innerText = health;
    if (displayStats.className==='visible') {
        displayStats.classList.remove('visible');
        displayStats.classList.add('hidden');
    } else {
        displayStats.classList.remove('hidden')
        displayStats.classList.add('visible')
    }


}
function changeName() {
    
    const newName = document.getElementById('newName').value
    console.log(newName);
    
    hero.name = newName;
    return hero.name;
}

console.log(hero.name);

