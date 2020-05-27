import { Component, OnInit } from "@angular/core";
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anims/detection.json',
  };
  public afuConfig: Object


  constructor() {
    this.afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg,.png",
      maxSize: "1",
      uploadAPI: {
        url: "https://example-file-upload-api",
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
          "Authorization": `Bearer`
        },
        params: {
          'page': '1'
        },
        responseType: 'blob',
      },
      theme: "dragNDrop",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: true,
      fileNameIndex: true,
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Predict',
        dragNDropBox: 'Upload Radiographs!',
        attachPinBtn: 'Attach Files...',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !',
        sizeLimit: 'Size Limit'
      }
    };
  }
  ngOnInit() { }
}
