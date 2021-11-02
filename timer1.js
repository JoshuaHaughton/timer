let args = process.argv.slice(2);
let sec = 0
for (let i = 0; i < args.length; i++) {
  if (args[i] < 0) continue;
  

    sec = Number(args[i])
  

  console.log(sec)
  function helper(sec){  
    setTimeout(function() {
      process.stdout.write(`.`);
    }, 1000*(sec))
  }
    helper(sec)
  }
  

  