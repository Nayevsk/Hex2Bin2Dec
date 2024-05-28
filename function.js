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

    // Number Fraction to Bynary.

    Product = DecNumber - Math.floor(DecNumber);

    while(Product%1!=0){

        Product = Product*2

        if(Product < 1){
            BinaryFraction = BinaryFraction + 0;
        } else {
            BinaryFraction = BinaryFraction + 1;
        }        
    }
       
    BinaryNumber = RevertingString(BinaryNumber);
    // console.log (BinaryNumber);
    // console.log (BinaryFraction)

    return console.log(BinaryNumber+"."+BinaryFraction)      
}

function DecToHex() {
    
    let DecNumber = 254.655;
    let WholeDecNumber = math.floor(DecNumber);
    let FractionDecNumber = DecNumber - math.floor(DecNumber);
    let HexNumber= "";

    let HexSimbols = { // Dictionaro for conversion
        10:"A",
        11:"B",
        12:"C",
        13:"D",
        14:"E",
        15:"F"
    }

    While (Quotient >0) {

        Quotient = WholeDecNumber / 16;
        reminder = WholeDecNumber % 16;
        HexNumber = 

    } 
    


}

console.log(HexSimbols[11]);