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
    let SplitBinNumber = BinNumber.split("");
    let Bin2HexConversion = {  // find out how to make his library global (can be used by other functions)
        "0000": 0,
        "0001": 1,
        "0010": 2,
        "0011": 3,
        "0100": 4,
        "0101": 5,
        "0110": 6,
        "0111": 7,
        "1000": 8,
        "1001": 9,
        "1010": "A",
        "1011": "B",
        "1100": "C",
        "1101": "D",
        "1110": "E",
        "1111": "F"
    }

    // Preparing Bin Number to conversion:

    //  Whole Bin Conversion:

    let BinNumberLengh = BinNumber.length;
    let WholeBinNumberLengh = SplitBinNumber.findIndex (ele => ele == ".")    // find the index of "." in the array.
    let Bin2Hex = "";

    while (WholeBinNumberLengh%4 != 0) {        // making sure WholeBinNumber has a lengh multiple of 8 prior to conversion.
        
        SplitBinNumber.unshift("0");
        WholeBinNumberLengh += 1; 
    }
    //  Hex Frac Bin Conversion:

    let FracBinNumberLengh = BinNumberLengh - WholeBinNumberLengh +1; // +1 added in order to compensate the lengh used by "."

    while( FracBinNumberLengh%4 != 0 ){
        SplitBinNumber.push("0");
        FracBinNumberLengh += 1;
    }

    //Joining array (BinNumberReady4Convertion):

    BinNumber = SplitBinNumber.join("");
    let Index = SplitBinNumber.findIndex (ele => ele == "."); // Stores the location of "." in the array (to be added after conversion). 
    SplitBinNumber.splice(Index,1)

    // Whole Bin2Hex:

    for (i = 0; i < BinNumber.length -1; i += 4) {    // -1 to consider the removal of "." from the array
        Aux = SplitBinNumber.slice(i, i+4);
        Bin2Hex += Bin2HexConversion[Aux.join("")];
    };  

    let Bin2HexSplit = Bin2Hex.split("");              // Adding back the "."
    Bin2HexSplit.splice(2,0,".");                       // Why 2??? REVIEW!!!!!!!!!!!!!!!!!!!!!!!
    Bin2Hex = Bin2HexSplit.join("");

    return console.log (Bin2Hex);

}

function Hex2bin(){

    let HexNumber = "1B.A";
    let SplitHexNumber = HexNumber.split("");
    let CommaIndex = SplitHexNumber.findIndex(ele => ele == ".");
    SplitHexNumber.splice(CommaIndex,1);  // removing "." from array
    let BinNumber = "";

    let Hex2BinConversion = {  // find out how to make his library global (can be used by other functions).
        0 : "0000",
        1 : "0001",
        2 : "0010",
        3 : "0011",
        4 : "0100",
        5 : "0101",
        6 : "0110",
        7 : "0111",
        8 : "1000",
        9 : "1001",
        "A" : "1010",
        "B" : "1011",
        "C" : "1100",
        "D" : "1101",
        "E" : "1110",
        "F" : "1111"
    }

    for( i=0; i < SplitHexNumber.length; i++ ){
        BinNumber += Hex2BinConversion[SplitHexNumber[i]];      // whith no ".".
    }

    BinNumber = BinNumber.split("");        // Adding "." back.
    BinNumber.splice(CommaIndex*4,0,".");                       
    BinNumber = BinNumber.join("");     // remove 

    // Removing 0s from Extremities of Bin: 

    BinNumber = BinNumber.split("");

    for (i = 0 ; i < 4; i++) {          // Whole BinNumber 0s removal.
        if( BinNumber[0] == 0  ){
            NewBinNumber = BinNumber.shift();
        }else{
            break;
        }
    }

    for (i = 0; i < 4 ; i++){    // Frac BinNumber 0s removal.
        if ( BinNumber[BinNumber.length - 1] == 0 ){
            NewBinNumber = BinNumber.pop();
        } else {
            break;
        }
    }

    BinNumber = BinNumber.join("");
    
    return console.log(BinNumber)

}

Hex2bin();