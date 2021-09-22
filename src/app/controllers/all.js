import { all as allModel } from "../models/all.js";

export class all {
    access   = true;
    allModel = new allModel();
    
    title = document.getElementById('title');    
    description = document.getElementById('description');
    add(e) {
        e.preventDefault();
        if(this.title === undefined && this.description === undefined) {
            alert('Title and description undefined');
            this.access      = false;
            return;
        } else if(this.title === undefined) {
            alert('Title undefined');
            this.access      = false;
            return;
        } else if(this.description === undefined) {
            alert('Description undefined');
            this.access      = false;
            return;
        } else if(this.title === null) {
            alert('Title null');
            this.access      = false;
            return;
        } else if(this.title === null) {
            alert('Description null');
            this.access      = false;
            return;
        }
        if(this.access) {
            if(typeof allModel.prototype.setTitle !== 'function') {
                alert('Not function');
                return;
            }
            if(typeof allModel.prototype.setDescription !== 'function') {
                alert('Not function');
                return;
            }
            allModel.prototype.setTitle(this.title.value);
            console.log(allModel.prototype.getTitle());
            allModel.prototype.getTitle();  
        }
    }
}