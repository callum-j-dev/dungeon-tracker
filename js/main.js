const title = document.querySelector('h1');
const menu = document.querySelector('#dungeon-select');

// Menu Buttons
const lostMineSelect = document.querySelector('#lost-mine-of-phandelver-select');
const tombSelect = document.querySelector('#tomb-of-annihilation-select');
const madMageSelect = document.querySelector('#dungeon-of-the-mad-mage-select');

const resetButton = document.querySelector('#reset');


// Set Dungeon Info
const dungeons = document.querySelectorAll('.dungeon');
const lostMine = document.querySelector('#lost-mine-of-phandelver');
const mineChambers = lostMine.querySelectorAll('.chamber');

const tomb = document.querySelector('#tomb-of-annihilation');
const tombChambers = tomb.querySelectorAll('.chamber');

const madMage = document.querySelector('#dungeon-of-the-mad-mage');
const madMageChambers = madMage.querySelectorAll('.chamber');

// Add event listeners to dungeon chambers
mineChambers.forEach(chamber => chamber.addEventListener('click', venture));
tombChambers.forEach(chamber => chamber.addEventListener('click', venture));
madMageChambers.forEach(chamber => chamber.addEventListener('click', venture));

// Add eventlisteners for menu buttons
// TODO: Have to fix the event listeners for the dungeon select buttons !!
lostMineSelect.addEventListener('click', setDungeonEvents(lostMine, 'Lost Mine of Phandelver'));
tombSelect.addEventListener('click', setDungeonEvents(tomb, 'Tomb of Annihilation'));
madMageSelect.addEventListener('click', setDungeonEvents(madMage, 'Dungeono of the Mad Mage'));
resetButton.addEventListener('click',  reset);




function setDungeonEvents(dungeon, dungeonName) {
    return () => {
        title.textContent = dungeonName;
        hideMenu();
        hideDungeons();
        dungeon.classList.toggle('hidden');
    }
    // dungeonChambers.forEach(chamber => chamber.addEventListener('click', venture));
}

function venture(event) {
    const currentChamber = event.currentTarget;

    clearChambers();
    currentChamber.classList.add('current');
}

function hideMenu() {
    menu.classList.add('hidden');
}

function revealMenu() {
    menu.classList.toggle('hidden');
}

function hideDungeons() {
    dungeons.forEach(dungeon => dungeon.classList.add('hidden'));
}

function clearChambers() {
    mineChambers.forEach(chamber => chamber.classList.remove('current'));
    tombChambers.forEach(chamber => chamber.classList.remove('current'));
    madMageChambers.forEach(chamber => chamber.classList.remove('current'));
}

function reset() {
    clearChambers();

    hideDungeons();
    revealMenu();

    title.textContent = 'Select a Dungeon to Venture Forth!';

}