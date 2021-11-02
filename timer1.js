let args = process.argv.slice(2);

let delay = 0;
let lastDelay = 0;

for (e of args) {
  if (e < 0) continue;
  lastDelay += delay;
  delay = Number(e);
  
    setTimeout(function() {
      process.stdout.write(`.`);
    }, 1000*(delay + lastDelay))
  
  }
  