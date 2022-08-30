const calculator = {
    a: null,
    b: null,

    read: (numb1,numb2) => {
        this.a = numb1;
        this.b = numb2;
    },
    sum: () => {
        return this.a + this.b;
    }, 
    mul: () => {
        return this.a * this.b;
    }
 
  };
  
  calculator.read(2,3);
  alert( calculator.sum(2,3) );
  alert( calculator.mul(2,3) );

  