/*!
 * Check Video, http://tpkn.me/
 */
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

async function checkVideo(file, options = {}){
   let { bin = 'ffmpeg', buffer = 2000 } = options;
   let errors = [];

   try {
      let { stderr } = await execFile(bin, [ '-v', 'error', '-i', file, '-f', 'null', '-', ], { maxBuffer: buffer * 1024 });
      if(stderr){
         errors.push(stderr);
      }
   }catch(err){
      errors.push(err.message);
   }

   return errors;
}

module.exports = checkVideo;
