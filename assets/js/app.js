import { all as allController } from "../../src/app/controllers/all.js";
const all = new allController();
const add = document.querySelector('#add');
add.addEventListener('click', e => {
    all.add(e);
});