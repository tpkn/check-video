# Check Video   
Test video for errors using NodeJS and FFMpeg



## Installation
```bash
npm install check-video
```


## API

### CheckVideo(file[, options])

### file
**Type**: _String_
Path to the video file


**Type**: _String_  
**Default**: `ffmpeg`  
Path to [ffmpeg](http://ffmpeg.org/download.html) binary file  


### options.buffer
**Type**: _Number_  
**Default**: `2000`  
Exec [maximum buffer size](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback) in kilobytes




## Usage
```javascript
const CheckVideo = require('check-video');

let video = './videos/MONICA BELLUCCI in the Matrix Sequels (HD Movie Scenes).mp4';

CheckVideo(video, { bin: './bin/ffmpeg.exe' }).then(errors => {
   // =>
   // [h264 @ 00000000005087a0] left block unavailable for requested intra4x4 mode -1 at 0 3
   // [h264 @ 00000000005087a0] error while decoding MB 0 3, bytestream 28606
}).catch(err => {
   console.log(err);
})

```

