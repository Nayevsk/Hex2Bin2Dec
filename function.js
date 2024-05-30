function RevertingString(str){  // Reverts an array, used for study porpuse, could simple invert the order of addition for Bin|Hex strings.
    var splitString = str.split(""); 
    
    var reverseArray = splitString.reverse(); 
  
    var joinArray = reverseArray.join(""); 

   return joinArray
}

function Dec2Bin(Dec){

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

function Dec2Hex() {
    
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

function Bin2Dec (){

    let BinNumber = "101110011.11001";
    let WholeBinNumberLengh = 0;
    let WholeDecNumber = 0;
    let FracDecNumber = 0;
    var SplitBinNumber = BinNumber.split("");

    // WholeBin2Dec Sum:

    while (SplitBinNumber[WholeBinNumberLengh] != "."){   //Fiding the size of whole bin number. 
        WholeBinNumberLengh += 1;
    }

    for (i=0; i < WholeBinNumberLengh; i++) {
        let Bit = SplitBinNumber[WholeBinNumberLengh -1 -i];  //Runs the string starting from end position "7" to first position of array.
        if (Bit == 1){
            WholeDecNumber += Math.pow(2,i);
        }
    }    

    // FracBin2Dec Sum:  TO FIX

        
    for (i= WholeBinNumberLengh; i< BinNumber.length -1; i++){        // Iterate from the "." position until the end of array.
        let Bit = SplitBinNumber[i+1];              // "i+1" so the . can be ignored.
        if (Bit == 1){
            FracDecNumber += Math.pow(2,-(i+1 - WholeBinNumberLengh)) 
        }
    } 

    return console.log(WholeDecNumber+FracDecNumber);
}

function Bin2Hex(){

    let BinNumber = "111011.11111";
    let SplitBinNumber = Bin2Dec.split("");
    let HexNumber = "";

    let Bin2HexConversion = {
        "0000": 0,
        "0001": 1,
        "0010": 2,
        "0010": 3,
        "0011": 4,
        "0100": 5,
        "0101": 6,
        "0110": 7,
        "0111": 8,
        "1000": 9,
        "1001": A,
        "1010": B,
        "1011": C,
        "1100": D,
        "1101": E,
        "1111": F
    }


}

Bin2Hex();