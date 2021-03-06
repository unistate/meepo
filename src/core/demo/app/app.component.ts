import { Component, OnInit, Optional, SkipSelf, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageBase } from '@meepo/core';
@Component({
    selector: 'demo-app',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent extends PageBase {
    title: string = '欢迎使用';
    constructor(
        @Inject(DOCUMENT) public _doc: any
    ) {
        super();
    }
    ngOnInit() {
        this.setDoc(this._doc).setTitle(this.title);
    }
}
