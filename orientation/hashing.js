const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(hash);

//Output: 55711980d50fd24989409a7a7d4e15fcd206556eec1245c94a6e60910dc4e41d

function findPrefix(prefix){
    let number = 0;
    while(true)
    {
        let a = number.toString();
        let hashing = crypto.createHash('sha256').update(a).digest('hex');
        if(hashing.startsWith(prefix)){
            return {number: a,hashing:hashing}
        }
        number++;
    }
  }
  const result = findPrefix('00000');
  console.log(`Input: ${result.number}`);
  console.log(`Hashing: ${result.hashing}`);

// Output : Input: 596138
//          Hashing: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab