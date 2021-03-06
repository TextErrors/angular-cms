import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFolder, faFolderPlus, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';

import { CoreModule } from '@angular-cms/core';

//import { CmsProgressbarModule, CmsModalModule, CmsAngularSplitModule } from '../shared/libs';
import { CmsAngularSplitModule } from '../shared/libs/angular-split/module';
import { CmsModalModule } from '../shared/libs/ngx-bootstrap/modal.module';
import { CmsProgressbarModule } from '../shared/libs/ngx-bootstrap/progressbar.module';

import { DndModule } from '../shared/drag-drop/dnd.module';
import { TreeModule } from '../shared/tree/tree.module';

import { MediaTreeComponent } from './media-tree.component';
import { DragLeaveDirective } from './upload/drag-leave.directive';
import { DragOverDirective } from './upload/drag-over.directive';
import { FileModalComponent } from './upload/file-modal.component';
import { FileDropComponent } from './upload/file-drop.component';
import { UploadService } from './upload/upload.service';
import { FileSelectDirective } from './upload/file-select.directive';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FontAwesomeModule,

        CmsAngularSplitModule,
        CmsProgressbarModule,
        CmsModalModule,

        TreeModule,
        DndModule,
        CoreModule
    ],
    declarations: [
        MediaTreeComponent,
        FileDropComponent,
        FileModalComponent,
        FileSelectDirective,
        DragOverDirective,
        DragLeaveDirective
    ],
    entryComponents: [
        MediaTreeComponent
    ],
    exports: [
        MediaTreeComponent
    ],
    providers: [UploadService]
})
export class MediaModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faFolder, faPhotoVideo, faFolderPlus);
    }
}
