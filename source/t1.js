import {T2} from "./t2.js";

export class T1 {
constructor () {
this.name = "t1";
}

hello () {
return `${this.name}, ${T2.name}`;
}
}
