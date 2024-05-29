function RevertingString(str){
    var splitString = str.split(""); 
    
    var reverseArray = splitString.reverse(); 
  
    var joinArray = reverseArray.join(""); 

   return joinArray
}

function DecToBin(Dec){

    let BinaryNumber = "";         // Creating string to represent the bynary number.
    let BinaryFraction = "";        // Creating string to represent the bynary frection.
    let Product = 0;
    let DecNumber = Dec;
    let NumberOfDecNumber = Math.floor(DecNumber);       // Getting only the number
    let Quotient = NumberOfDecNumber;
    let remainder = 0;
    
    while (Quotient>=1) {

        remainder = Quotient%2;
        Quotient = Quotient/2;
    
        BinaryNumber = BinaryNumber + Math.floor(remainder);
    }

    // Dec Fraction to Bynary.

    Product = DecNumber - Math.floor(DecNumber);

    while(Product%1!=0) {

        Product = Product*2

        if(Product < 1){
            BinaryFraction = BinaryFraction + 0;
        } else {
            BinaryFraction = BinaryFraction + 1;
        }        
    };
       
    BinaryNumber = RevertingString(BinaryNumber);
    // console.log (BinaryNumber);
    // console.log (BinaryFraction)

    return console.log(BinaryNumber+"."+BinaryFraction)      
}

function DecToHex() {
    
    // WholeDec to WholeHex:

    let DecNumber = 159.046;
    let WholeDecNumber = Math.floor(DecNumber);
    let Quotient = WholeDecNumber;    
    let HexNumber= "";
    
    let HexSimbols = { // Dictionary for conversion
        10:"A",
        11:"B",
        12:"C",
        13:"D",
        14:"E",
        15:"F"
    }

    while (Quotient >0){

        let Remainder = Quotient%16;
        Quotient = Math.floor(Quotient / 16);
        
        if(Remainder <10){
            HexNumber = Remainder + HexNumber  ;
        } else {
            HexNumber = HexSimbols[Remainder] + HexNumber;
        };
         
    }; 

    // DecFrac to HexFrac:
   
    let Product = DecNumber - Math.floor(DecNumber);   
    let HexFractionNumber = "";
    let Precision = 11;         // Why precision is only efficient until 11????

    for(let i = 0; i < Precision ; i++ ) {
        
        Product = Product*16;
        
        if (Math.floor(Product) < 10){
            HexFractionNumber = HexFractionNumber + Math.floor(Product);
        }else {
            HexFractionNumber = HexFractionNumber + HexSimbols[Math.floor(Product)]
        }
        Product = Product - Math.floor(Product);         
    }

    return console.log (HexNumber+"."+HexFractionNumber)
}


DecToHex();