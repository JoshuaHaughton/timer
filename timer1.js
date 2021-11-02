let args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (args[i] < 0) continue;
  function helper(i){  
    setTimeout(function() {
      process.stdout.write(`.`);
    }, 1000*args[i])
  }
    helper(i)
  }
  
