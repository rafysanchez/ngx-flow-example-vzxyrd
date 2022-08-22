import { Component, ViewChild } from '@angular/core';
import { FlowDirective, Transfer } from '@flowjs/ngx-flow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('flowAdvanced')
  flow: FlowDirective;

  autoUploadSubscription: Subscription;

  autoupload = false;

  // ngAfterViewInit() {
  //   this.autoUploadSubscription = this.flow.events$.subscribe(event => {
  //     // to get rid of incorrect `event.type` type you need Typescript 2.8+
  //     if (this.autoupload && event.type === 'filesSubmitted') {
  //       this.flow.upload();
  //     }
  //   });
  // }

  // ngOnDestroy() {
  //   this.autoUploadSubscription.unsubscribe();
  // }

  trackTransfer(transfer: Transfer) {
    console.log("aaaa");
    console.log(transfer);
    return transfer.id;
  }
}
