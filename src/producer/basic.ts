import {Observable} from "rxjs/Observable";


const o = Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});

o.subscribe((v) => console.log(v));