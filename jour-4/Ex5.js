total = 0


function addup (num) {
    for (i = 1; i <= num; i++) {
        total = total+i;
        console.log(i,total)
    }
  }
  addup(12)