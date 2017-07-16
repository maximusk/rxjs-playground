import {of} from "rxjs/observable/of";

const o = of(1, 2, 3);

o.subscribe((v) => console.log(v));