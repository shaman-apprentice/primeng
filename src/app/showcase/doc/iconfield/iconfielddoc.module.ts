import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { TemplateDoc } from './templatedoc';
import { IconFieldModule } from 'src/app/components/iconfield/iconfield';
import { InputIconModule } from 'src/app/components/inputicon/inputicon';
import { FormsModule } from '@angular/forms';
import { AccessibilityDoc } from './accessibilitydoc';
import { StyleDoc } from './styledoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import { IftaLabelDoc } from './iftalabeldoc';
import { SizesDoc } from './sizesdoc';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppCodeModule,
        AppDocModule,
        InputTextModule,
        IconFieldModule,
        InputIconModule,
        FormsModule,
        FloatLabelModule,
        IftaLabelModule,
    ],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, FloatLabelDoc, IftaLabelDoc, SizesDoc, AccessibilityDoc, StyleDoc],
    exports: [AppDocModule],
})
export class IconFieldDocModule {}
