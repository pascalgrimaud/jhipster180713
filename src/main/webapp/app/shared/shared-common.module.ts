import { NgModule } from '@angular/core';

import { Jhipster180713SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Jhipster180713SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Jhipster180713SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Jhipster180713SharedCommonModule {}
