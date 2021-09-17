import { all as allModel } from "../models/all.js";

export class all {
    allModel = new allModel();
    title = document.getElementById('title');
    add(e) {
        e.preventDefault();
        console.log(allModel);
        if(this.title === undefined) {
            alert('Undefined');
            return;
        } else {
            if(typeof allModel.prototype.setTitle !== 'function') {
                alert('Not function');
                return;
            }
            if(typeof allModel.prototype.setDescription !== 'function') {
                alert('Not function');
                return;
            }
            allModel.prototype.setTitle(1);
            //console.log(allModel.prototype.getTitle());
            allModel.prototype.getTitle();  
        }
    }
}