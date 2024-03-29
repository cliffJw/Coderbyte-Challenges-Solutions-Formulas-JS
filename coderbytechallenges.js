
// ******** FIRST FACTORIAL ********

function FirstFactorial(num) {
    if ((num === 0) || (num === 1))
        return 1;
    else
        return (num * FirstFactorial(num - 1));
}

// keep this function call here 
console.log(FirstFactorial(8));




// ******** FIRST REVERSE ********

// Method - 1:
function FirstReverse(str) {
    var backwardString = "";
    var splitString = str.split("");
    for (var i = splitString.length - 1; i >= 0; i--) {
        backwardString += splitString[i];
    }
    return backwardString;
}
console.log(FirstReverse("coderbyte")); // etybredoc



// Method - 2:
function FirstReverse(str) {
    // code goes here  
    return str.split("").reverse().join("")
}






// ******** Find Intersection ********

function FindIntersection(strArr) {

    let arr1 = strArr[0].split(",")
    // console.log("arr1",arr1) // arr1 (5) ['1', ' 3', ' 4', ' 7', ' 13']

    let arr2 = strArr[1].split(",")
    // console.log("arr2",arr2) // arr2 (5) ['1', ' 2', ' 4', ' 13', ' 15']

    let filter = arr1.filter(x => arr2.includes(x))
    // console.log("filter", filter) // filter (3) ['1', ' 4', ' 13']

    // filter'ın farklı yazılışı :)
    // let filter = arr1.filter(function(value){ 
    //     return arr2.includes(value); 
    // });

    if (filter.length === 0) {
        return false;
    } else {
        return filter.join(",").replace(/\s/g, "");
    }

}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])) // 1,4,13
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])) // 1,9,10

// Aşağıdaki 3 farklı ornekte ise hata aldık? -6,11- ve -false- ve -4- sonuçları çıktı enteresan :D
// Burayı okuyan varsa beni de aydınlatsın plüz ;)
console.log(FindIntersection(["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"])) //  5,6,11
console.log(FindIntersection(["2, 3, 4", "3"])) // 3
console.log(FindIntersection(["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"])) // 2,4

// NOTE:
replace(/\s/g, ""); // virgülden önceki tüm boşlukları boş bir dize ile değiştirerek kaldırıyoruz.





// ******** Longest Word ********

function LongestWord(sen) {

    //regex2(digits + words) = /\d+|([a-zA-Z])\w+/g

    let res = sen.split(" ").toString().match(/\d+|([a-zA-Z])\w+/g)
    // console.log("res",res)


    let sort = res.sort(function (a, b) {
        return b.length - a.length
    })
    // console.log("s",sort)

    return sort[0]


}
console.log(LongestWord("Hello world123 567")); // world123
console.log(LongestWord("fun&!! time")); // time
console.log(LongestWord("x love dogs")); // love





// ******** Questions Marks ********

function QuestionsMarks(str) {
    result = false;

    for (let i = 0; i < str.length; i++) {
        for (let x = i + 1; x < str.length; x++) {

            if (Number(str[i]) + Number(str[x]) === 10) {
                result = true;

                if (str.slice(i, x).split("?").length - 1 != 3) {
                    return false;

                    // veya 
                    //if(str.slice(i,x).split("?").length -1 < 3){  
                    // dikkat => "<3"
                }
            }
        }
    }
    return result;
}
console.log(QuestionsMarks("arrb6???4xxbl5???eee5")) // true
console.log(QuestionsMarks("arrb6?4xxbl5?eee5")) // false
console.log(QuestionsMarks("acc?7??sss?3rr1??????5")) // true
console.log(QuestionsMarks("aa6?9")) // false





// ******** Prime Time ********

// ***** Method: 1 => This is half true! :)
function PrimeTime(num) {

    if (num < 2) {
        return false
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    return true;
}
console.log(PrimeTime(19)) // true
console.log(PrimeTime(110)) // false
console.log(PrimeTime(2)) // true


// ***** Method: 2 => This is true!
function PrimeTime(num) {

    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(PrimeTime(19)) // true
console.log(PrimeTime(110)) // false
console.log(PrimeTime(2)) // true




// ******** Consonant Count  ********

function ConsonantCount(str) {

    // let vowel = "aeiouAEIOU"
    let Cons = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    let result = []

    for (let i = 0; i < str.length; i++) {
        for (let x = 0; x < Cons.length; x++) {
            if (str[i] === Cons[x]) {
                result.push(str[i])
                console.log(result)
            }
        }
    }
    return result.length;

};
console.log(ConsonantCount("Hello World")) // 7 
console.log(ConsonantCount("Alphabets")) // 6 
console.log(ConsonantCount("Sessiz Sessiz")) // 8 


// ******* Method: 2 

function ConsonantCount(str) {

    let count = 0
    let Cons = "bcdfghjklmnpqrstvwxyz"

    for (let i = 0; i < str.length; i++) {
        if (Cons.indexOf(str[i].toLowerCase()) > -1) {
            count++;
        }
    }
    return count;
};
console.log(ConsonantCount("Hello World")) // 7 
console.log(ConsonantCount("Alphabets")) // 6 
console.log(ConsonantCount("Sessiz Sessiz")) // 8 

//Note: 
Cons.indexOf(str[i].toLowerCase()) > -1
// -1'den büyük olanları getir dedim çünkü "Cons" ile eşleşmeyenleri -1 olarak getirecek, ben de direkt -1'den büyük olanları getir didim...




// ******** Consonant Count  ********

function CheckNums(num1, num2) {

    if (num2 > num1) {
        return true;
    } else if (num1 == num2) {
        return -1
    } else {
        return false;
    }
}
console.log(CheckNums(3, 122)) // true
console.log(CheckNums(67, 67)) // -1
console.log(CheckNums(3, 1)) // false




// ******** Palindrome Two ********

function PalindromeTwo(str) {
    let String = "aeioubcdfghjklmnpqrstvwxyzAEIOUBCDFGHJKLMNPQRSTVWXYZ"
    let result = []

    for (let i = 0; i < str.length; i++) {
        for (let x = 0; x < String.length; x++) {
            if (str[i] == String[x]) {
                result.push(str[i])
            }
        }
    }

    result = result.join("").toLowerCase()
    // console.log("result:", result) // result: helloworld

    let reverse = result.split("").reverse().join("")
    // console.log("reverse:", reverse) // reverse: dlrowolleh

    if (result == reverse) {
        return true;
    } else return false;

};

console.log(PalindromeTwo("Noel - sees Leon")) // true
console.log(PalindromeTwo("A war at Tarawa!")) // true
console.log(PalindromeTwo("Hello World")) // false


//Note: Nasıl? Uzattıkça uzatmışım dimi :D... Sıkıntılı bir anıma denk geldi, bir ara kısa yolunu da yazarık...


// ******** Method - 2:

function PalindromeTwo(str) {
    let re = /[a-zA-Z]/ // aA'dan zZ'ye kontrol et (Harf dışında başka bir şey içermez)
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).match(re)) { // str'yi regex ile eşleştiriyorum ve içindekileri arr'ye atacağum, böylece harf dışındaki karakterler gelmeyecek
            arr.push(str.charAt(i).toLowerCase())
        }
    }

    let x = arr.join("") // A ve Z harici değerleri "=?!_#" gibi almadık ve join ile aldıklarımı birleştiriyorum
    console.log(arr) // ["k","u","l","l","u","k"] => idü
    console.log(x) // kulluk => oldu

    arrjoin = arr.reverse().join("")
    console.log("arrjoin:", arrjoin) // kulluk (Tersi :D)

    if (arrjoin == x) {
        return true;
    } else {
        return false;
    }
};
console.log(PalindromeTwo("Kulluk!#?")) // true
console.log(PalindromeTwo("Kulluks!!?")) // false
console.log(PalindromeTwo("A war at Tarawa!")) // true
console.log(PalindromeTwo("Hello World")) // false


// ******** Ex Oh ********

function ExOh(str) {

    let x = []
    let o = []

    for (i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            x.push(str[i])
        } else if (str[i] === "o") {
            o.push(str[i])
        }
    }

    if (x.length === o.length) {
        return true;
    } else return false;




};
console.log(ExOh("xooxxo")) // true
console.log(ExOh("x")) // false
console.log(ExOh("xooxxxxooxo")) // false




// ******** Consecutive ********

// Minik Hatırlatma:
// let x = [5,10,15]
// console.log("x:",x[0]) // x: 5
// console.log("x:",x[x.length-1]) // x: 15


function Consecutive(arr) {

    let res = []

    // önce arr'yi güçükten büyüğe sıralayalum
    let sortNumbers = arr.sort((a, b) => a - b)

    // daha sonra sıraladıklarımızı for ile getirelim
    // Birinci index'ten başlasın, son index'e kadar olan sayıları bir getirsin bize
    // daha sonra da o sayıları "res" değişkenimize paketleyelim
    for (let i = sortNumbers[0]; i <= sortNumbers[sortNumbers.length - 1]; i++) {
        res.push(i)
    }

    // gerisi zaten easy peasy
    return res.length - arr.length;

}
console.log("result:", Consecutive([5, 10, 15])) // 8 
console.log("result:", Consecutive([-2, 10, 4])) // 10 
console.log("result:", Consecutive([4, 8, 6])) // 2 





// ******** Swap Case ********

function SwapCase(str) {
    let arr = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            arr.push(str[i].toUpperCase())
        } else {
            arr.push(str[i].toLowerCase())
        }
    }

    return arr.join("")

}
console.log(SwapCase("Hello-LOL")) // hELLO-lol
console.log(SwapCase("Hello World")) // hELLO wORLD
console.log(SwapCase("Sup DUDE!!?")) // sUP dude!!?



// *** Another Solution:
function SwapCase(str) {

    let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let Lower = "abcdefghijklmnopqrstuvwxyz"
    let result = "";

    for (let i = 0; i < str.length; i++) {

        if (Upper.indexOf(str[i]) !== -1) {
            result += Lower.charAt(Upper.indexOf(str[i]));
        }

        else if (Lower.indexOf(str[i]) !== -1) {
            result += Upper.charAt(Lower.indexOf(str[i]));
        }

        if (!str[i].match(/[a-zA-Z]/)) {
            result += str[i]
        }

    }

    return result;
};
console.log(SwapCase("Hello-LOL")) // hELLO-lol
console.log(SwapCase("Hello World")) // hELLO wORLD
console.log(SwapCase("Sup DUDE!!?")) // sUP dude!!?


// *** Another Solution-2:
function SwapCase(str) {

    strUp = str.split("").map(x =>
        x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
    ).join("")

    return strUp;

};
console.log(SwapCase("Hello-LOL")) // hELLO-lol
console.log(SwapCase("Hello World")) // hELLO wORLD
console.log(SwapCase("Sup DUDE!!?")) // sUP dude!!?








// ******** ThreeFive Multiples ********

function ThreeFiveMultiples(num) {

    // code goes here  
    let arr = []

    for (let i = 0; i < num; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            arr.push(i)
        }
    }

    return arr.reduce((a, b) => a + b)

}
console.log(ThreeFiveMultiples(6)); // 8
console.log(ThreeFiveMultiples(1)); // 0



// Method - 2:
function ThreeFiveMultiples(num) {

    let arr = [];
    let sum = 0;

    for (let i = 0; i < num; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            arr.push(i);
            //    console.log("arr:",arr)
            //    arr: [0]
            //         [0, 3]
            //         [0, 3, 5]
        }
    }

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        //   console.log("sum:",sum)
        //   sum: 0
        //   sum: 3
        //   sum: 8
    }

    return sum;
}
console.log(ThreeFiveMultiples(6)); // 8
console.log(ThreeFiveMultiples(1)); // 0





// ******** Power Set Count ********

function PowerSetCount(arr) {

    let result = Math.pow(2, arr.length)
    return result;

}
console.log(PowerSetCount([5, 6])) // 4
console.log(PowerSetCount([1, 2, 3])) // 8
console.log(PowerSetCount([1, 2, 3, 4])) // 16




// ***********************************
// Shall we show you the power set too ? ? ? 
function PowerSet(arr) {

    let result = []

    // Power Set'in içereceği toplam Set sayısı
    let total = Math.pow(2, arr.length);
    // console.log("total:",total) // total: 16 > (PowerSetCount'ın cevabı: 2**n)

    // 0 - 2**n'e kadar her bir değer arasında döngü
    for (let i = 0; i < total; i++) {

        let resultSet = [];
        // Power Set'e eklediğimiz kümemiz

        let num = i.toString(2) // tam sayıyı ikiliye çevirecek
        // console.log("num:",num) // 0 1 10 11 100 101 110 111 1000 1001 1010 1011 1100 1101 1110 1111

        //ikili sayıyı doldur, böylece 1 örneğin 001 olucek
        while (num.length < arr.length) {
            num = "0" + num;
        }

        // ikili sayıdaki 1"lerle eşleşen kümeyi oluştur
        for (let x = 0; x < num.length; x++) {
            if (num[x] === "1") {
                resultSet.push(arr[x])
            }
        }
        result.push(resultSet);
        // console.log("resultSet:",resultSet) 
        // [] [4] [3] [3,4] [2] [2, 4] [2, 3] [2, 3, 4] [1] [1, 4] [1, 3] [1, 3, 4] [1, 2]  [1, 2, 4] [1, 2, 3] [1, 2, 3, 4]

        //şimcik bu seti sonucumuza ekleyelüm 
    }

    return result;
};
console.log(PowerSet([1, 2, 3, 4]))




// ******** Even Pairs ********

function EvenPairs(str) {

    let result = false;
    let counter = 0;

    for (let i = 0; i < str.length; i++) {

        // isNaN kullanmamın sebebi sadece numaraları almak istediğimden dolayı.
        if (isNaN(str[i])) {
            counter = 0;
        } else if (str[i] % 2 !== 0) {
        } else if (str[i] % 2 === 0) {
            counter++;
        }

        if (counter === 2) {
            result = true;
        }
    }

    return result;

};
console.log(EvenPairs("3gy41d216")) // true
console.log(EvenPairs("f09r27i8e67")) // false
console.log(EvenPairs("f178svg3k19k46")) // true





// ******** Simple Evens  ********

function SimpleEvens(num) {

    let string = num.toString()
    let result = true

    for (let i = 0; i < string.length; i++) {
        if (string[i] % 2 !== 0) {
            return result = false;
        }
    }

    return result;
}
console.log(SimpleEvens(4602225)) // false
console.log(SimpleEvens(22222022)) // true
console.log(SimpleEvens(208646464652)) // false



// Method - 2:
function SimpleEvens(num) {

    let result = num.toString().split("").map((num) => {
        return (Number(num) % 2 === 0);
    });

    return result.every((e) => e === true)

};
console.log(SimpleEvens(4602225)) // false
console.log(SimpleEvens(22222022)) // true
console.log(SimpleEvens(208646464652)) // false





// ********  Happy Numbers  ********

function HappyNumber(num) {

    let single = num.toString().split("").map(m => m ** 2)
    console.log(single)
    // HappyNumber(1) => [1]
    // HappyNumber(10) => (2) [1, 0]
    // HappyNumber(20) => (2) [4, 0]
    // HappyNumber(22) => (2) [4, 4]
    // HappyNumber(101) => (3) [1, 0, 1]

    let arr = single.reduce(
        (a, b) => a + b
    );

    if (arr == 1) {
        return true
    } else {
        return false
    }

};
console.log(HappyNumber(1)) // true
console.log(HappyNumber(10)) // true
console.log(HappyNumber(20)) // false
console.log(HappyNumber(22)) // false
console.log(HappyNumber(101)) // false






// ******** Fibonacci Checker  ********

function FibonacciChecker(num) {

    let arr = [];
    let res;

    for (let i = 0; ; i++) {
        arr.push(i < 2 ? i : arr[i - 2] + arr[i - 1]) //Fibonacci
        if (arr[i] === num) {
            res = "yes";
            break;
        }
        if (arr[i] > num) {
            res = "no";
            break;
        }
    }
    return res;

}
console.log(FibonacciChecker(5)) // yes
console.log(FibonacciChecker(34)) // yes
console.log(FibonacciChecker(54)) // no




// Method - 2 ( "Sorry for the mess :)" )

function FibonacciChecker(num, a = 0, b = 1) {

    if (num === 0 || num === 1) {
        return "yes";
    }

    let nextNumber = a + b;

    // example : FibonacciChecker(5)
    console.log("a+b=", a, "+", b)
    // a+b= 0 + 1
    // a+b= 1 + 1
    // a+b= 1 + 2
    // a+b= 2 + 3

    // FibonacciChecker(5) => console.log("nextNumber:",nextNumber) // 1 2 3 5 
    // FibonacciChecker(6) => console.log("nextNumber:",nextNumber) // 1 2 3 5 8

    if (nextNumber === num) {
        return "yes";
    }
    else if (nextNumber > num) {
        return "no";
    }

    return FibonacciChecker(num, b, nextNumber)
};
console.log(FibonacciChecker(5)) // yes
console.log(FibonacciChecker(6)) // no
console.log(FibonacciChecker(34)) // yes
console.log(FibonacciChecker(54)) // no







// ******** Number Reverse ********
function NumberReverse(str) {

    return str.toString().split(" ").reverse().join(" ")

}
console.log(NumberReverse("1 2 3")) // 3 2 1
console.log(NumberReverse("10 20 50")) // 50 20 10





// ******** Nearest Smaller Values ********
function NearestSmallerValues(arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        for (x = i - 1; x >= 0; x--) {
            if (arr[x] <= arr[i]) {
                result.push(arr[x])
                break;
            }
        }

        if (x == -1) {
            result.push(-1)
        }
    }
    return result.join(" ")

};
console.log(NearestSmallerValues([5, 2, 8, 3, 9, 12])) // [-1, -1, 2, 2, 3, 9] => -1 -1 2 2 3 9
console.log(NearestSmallerValues([2, 4, 5, 1, 7])) // -1 2 4 -1 1
console.log(NearestSmallerValues([5, 3, 1, 9, 7, 3, 4, 1])) // -1 -1 -1 1 1 1 3 1





// ********  Largest Four  ********

function LargestFour(arr) {

    let largestFour = []
    let result = []

    let arrSort = arr.sort((a, b) => b - a)
    console.log("arrSort:", arrSort)
    // arrSort: (4) [1, 1, 1, -5]
    // arrSort: (6) [7, 3, 2, 1, 0, 0]
    // arrSort: (8) [6, 6, 5, 4, 3, 2, 1, -2]


    //{bu for döngüsünü kofi içtikten sonra düzelttim,
    // yürümeyi seviyorum diye sanırım yolları uzatmakta üstüme yok :D...}
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // for (let i = 0; i < 1; i++) {
    //     // largestFour.push(arrSort.find(x => x == arrSort[0]))
    //     // largestFour.push(arrSort.find(x => x == arrSort[1]))
    //     // largestFour.push(arrSort.find(x => x == arrSort[2]))
    //     // largestFour.push(arrSort.find(x => x == arrSort[3]))
    //     console.log("largestFour:",largestFour)
    //     // largestFour: (4) [1, 1, 1, -5]
    //     // largestFour: (4) [7, 3, 2, 1]
    //     // largestFour: (4) [6, 6, 5, 4]
    // }
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    if (arrSort.length < 5) { // length 5'ten küçükse hepisini topla
        result.push(arrSort.reduce((a, b) => a + b))
    } else {
        largestFour.push(arrSort[0] + arrSort[1] + arrSort[2] + arrSort[3])
        result.push(largestFour.reduce((a, b) => a + b))
    }

    return result.toString();
}
console.log(LargestFour([1, 1, 1, -5])) // -2
console.log(LargestFour([0, 0, 2, 3, 7, 1])) // 13
console.log(LargestFour([4, 5, -2, 3, 1, 2, 6, 6])) // 21






// -------------------------------------------------------------
// JUST A REMINDER:

let strArr = "[1, 2, 3, 4, 5]"

let str = strArr.toString().match(/\d+/g).join()
console.log("str:", str) // str: 1,2,3,4,5

let str2 = strArr.toString().match(/\d+/g)
console.log("str2:", str2) // str2: (5) ['1', '2', '3', '4', '5']

console.log("str3:", str[0]) // str3: 1
console.log("str4:", str[str.length - 1]) // str4: 5

// -------------------------------------------------------------




// ********  Matrix Spiral  ********

function MatrixSpiral(strArr) {

    let number1 = []
    let number2 = []
    let number3 = []
    // let number4 = []

    let result = []

    if (strArr.length == 1) {

        number1.push(strArr[0])
        let number1String = number1.toString().match(/\d+/g)
        result.push(number1String)
    }
    else if (strArr.length == 2) {

        number1.push(strArr[0])
        number2.push(strArr[1])

        let number1String = number1.toString().match(/\d+/g)
        let number2String = number2.toString().match(/\d+/g).reverse()

        result.push(number1String)
        result.push(number2String)
    }
    else if (strArr.length == 3) {
        number1.push(strArr[0])
        number2.push(strArr[1])
        number3.push(strArr[2])

        let number1String = number1.toString().match(/\d+/g)
        let number2String = number2.toString().match(/\d+/g)
        let number3String = number3.toString().match(/\d+/g).reverse()

        result.push(number1String)
        result.push(number2String[number2String.length - 1])
        result.push(number3String)
        result.push(number2String.slice(0, number2String.length - 1))
    }

    return result.toString()


}
// 1
console.log(MatrixSpiral(["[4, 2]"])) // 4,2
console.log(MatrixSpiral(["[1, 2, 3]"])) // 1,2,3
console.log(MatrixSpiral(["[9]"])) // 9
// 2
console.log(MatrixSpiral(["[1, 2]", "[10, 14]"])) // 1,2,14,10
console.log(MatrixSpiral(["[1, 2, 3, 4, 2, 10, 12, 2]", "[1, 1, 2, 2, 6, 7, 8, 1]"])) // 1,2,3,4,2,10,12,2,1,8,7,6,2,2,1,1
// 3
console.log(MatrixSpiral(["[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]"])) // 1,2,3,6,9,8,7,4,5
console.log(MatrixSpiral(["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"])) // 4,5,6,5,2,9,2,4,5,1,1,2





// ********  Math Challenge  ********

function MathChallenge(num1, num2) {

    let res = []

    for (let i = 1; i < 1000; i++) {

        if (num1 % i === 0 && num2 % i === 0) {
            res.push(i)
        } else {
            res.push(false)
        }
    }

    let sort = res.sort((a, b) => b - a)
    let Largest = sort.find((x) => x > sort[1])

    return Largest;
};
console.log(MathChallenge(7, 3)) // 1
console.log(MathChallenge(12, 16)) // 4
console.log(MathChallenge(36, 54)) // 18
console.log(MathChallenge(8, 8)) // 8




// ********  Array Challenge  ********
function ArrayChallenge(arr) {

    let res = []

    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] === arr[x]) {
                res.push(arr[i])
            }
        }
    }

    if (res.length === 0) {
        return -1
    } else {
        return res[0]
    }

}
console.log(ArrayChallenge([5, 5, 2, 2, 1])) // 5
console.log(ArrayChallenge([3, 4, 1, 6, 10])) // -1
console.log(ArrayChallenge([5, 10, 10, 6, 5])) // 5
console.log(ArrayChallenge([10, 4, 5, 2, 4])) // 4
console.log(ArrayChallenge([10, 9, 8, 7, 6])) // -1
console.log(ArrayChallenge([2, 9, 9, 8, 2])) // 2

console.log(ArrayChallenge([1, 2, 2, 3])) // 2
console.log(ArrayChallenge([100, 200, 100, 45, 3])) // 100
console.log(ArrayChallenge([4, 5, 1, 6, 7, 8, 100, 200, 1000, 5])) // 5
console.log(ArrayChallenge([4, 5, 6, 1, 2, 4])) // 4

// But this answer is wrong? ? ? 
console.log(ArrayChallenge([4, 4, 5, 6, 7, 8, 8, 8, 8, 8])) // 8


// ************************************
// Method - 2 : long way i guess :D...
function ArrayChallenge(arr) {

    let res = []

    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] === arr[x]) {
                res.push(arr[i])
            }
        }
    }

    res.sort((a, b) => a - b)

    let final = []

    for (let i = 0; i < res.length; i++) {
        for (let x = i + 1; x < res.length; x++) {
            if (res[i] === res[x]) {
                final.push(res[i])
            }
        }
    }

    final.sort((a, b) => a - b)
    console.log("final:", final)

    if (final.length === 0) {
        return -1
    } else {
        return final[0]
    }

};
console.log(ArrayChallenge([4, 4, 5, 6, 7, 8, 8, 8, 8, 8])) // 8






// ********  Prime Mover  ********
function PrimeMover(num) {

    let primeNumbers = []

    for (let i = 1; i <= 10000; i++) {
        let mark = 0;

        for (let x = 2; x < i; x++) {
            if (i % x == 0) {
                mark = 1;
                break;
            }
        }

        if (i > 1 && mark == 0) {
            primeNumbers.push(i)
        }
    }

    return primeNumbers[num - 1]

};
console.log(PrimeMover(9)) // 23
console.log(PrimeMover(100)) // 541
console.log(PrimeMover(16)) // 53
console.log(PrimeMover(3)) // 5
console.log(PrimeMover(1)) // 2

console.log(PrimeMover(400)) // 2741
console.log(PrimeMover(565)) // 4099
console.log(PrimeMover(312)) // 2069
console.log(PrimeMover(567)) // 4127




// ********  Simple Adding  ********
function SimpleAdding(num) {

    let res = []

    for (let i = 0; i <= num; i++) {
        res.push(i)
    }

    return res.reduce((a, b) => a + b)
};
console.log(SimpleAdding(4)) // 10
console.log(SimpleAdding(12)) // 78
console.log(SimpleAdding(140)) // 9870



// ********  Searching Challenge (or Letter Count)  ********
function SearchingChallenge(str) {

    let res = []

    let strSplit = str.toString().split(" ")
    // console.log(strSplit)
    // strSplit (3) ['Hello', 'apple', 'pie']
    // strSplit (2) ['No', 'words']

    for (let i = 0; i < strSplit.length; i++) {
        let str2 = strSplit[i].toString().split("")

        for (let x = 0; x < str2.length; x++) {
            for (let y = x + 1; y < str2.length; y++) {
                if (str2[x] === str2[y]) {
                    res.push(strSplit[i])
                }
            }
        }
    }

    if (res.length === 0) {
        return -1
    } else {
        return res[0]
    }

};
console.log(SearchingChallenge("Hello apple pie")) // Hello
console.log(SearchingChallenge("No words")) // -1
console.log(SearchingChallenge("Today, is the greatest day ever!")) // greatest 




// ******** Front-end Challenge  ********

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
    return (
        <h2>code goes here</h2>
    );
}

const data = [
    { name: 'Daniel', age: 25 },
    { name: 'John', age: 24 },
    { name: 'Jen', age: 31 },
];

ReactDOM.render(
    <DataList data={data} />,
    document.getElementById('root')
);

//-----

<ul>
    {
        data.map((item) => (
            <li key={item}>
                <span>{item.name} {item.age}</span>
            </li>
        ))
    }
</ul>






// ******** Letter Changes  ********

function LetterChanges(str) { //example: abcd

    let newStr = str.replace(/[a-zA-Z]/gi, function (LC) {
        if (LC == "Z" || LC == "z") {
            return "A"
        } else {
            return String.fromCharCode(LC.charCodeAt(0) + 1);
        }
    });
    // console.log("newstr:",newStr) // bcde

    let res = newStr.replace(/[aeiou]/gi, function (LC) {
        return LC.toUpperCase()
    });
    // console.log("res:",res) // res: bcdE

    return res;
};
console.log(LetterChanges("abcd")) // bcdE
console.log(LetterChanges("aeiou")) // bfjpv
console.log(LetterChanges("zdhnt")) // AEIOU
console.log(LetterChanges("Ali Kartal")) // Bmj LbsUbm



// Method - 2:
function LetterChanges(str) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newAlphabet = "bcdEfghIjklmnOpqrstUvwxyzA";
    var result = [];

    for (i = 0; i < str.length; i++) {

        if (alphabet.indexOf(str[i].toLowerCase()) !== -1) {
            result.push(newAlphabet.charAt(alphabet.indexOf(str[i].toLowerCase())))
        } else {
            result.push(str[i])
        }
    }
    return result.join("");

};
console.log(LetterChanges("abcd")) // bcdE
console.log(LetterChanges("aeiou")) // bfjpv
console.log(LetterChanges("zdhnt")) // AEIOU
console.log(LetterChanges("zdhnt!!?")) // AEIOU!!?
console.log(LetterChanges("Ali Kartal")) // bmj lbsUbm
console.log(LetterChanges("abcdefghijklmnopqrstuvwxyz")) // bcdEfghIjklmnOpqrstUvwxyzA









// ******** Two Sum  ********

function TwoSum(arr) {

    let res = []

    for (let i = 1; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] === arr[0]) {
                res.push(`${arr[i]},${arr[x]}`)
                // console.log(res)
            }
        }
    }

    if (res.length !== 0) {
        return res.join(" ")
    } else {
        return -1
    }

}
console.log(TwoSum([7, 3, 5, 2, -4, 8, 11])) // 5,2 -4,11
console.log(TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7])) // 6,11 10,7 15,2
console.log(TwoSum([7, 6, 4, 1, 7, -2, 3, 12])) // 6,1 4,3

console.log(TwoSum([100, 90, 90, 90, 90, 11])) // -1
console.log(TwoSum([6, 2])) // -1
console.log(TwoSum([4, 5, 2, 1])) // -1







// ******** Distinct List ********

// Method-1:
function DistinctList(arr) {

    let res = []

    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] == arr[x]) {
                res.push(arr[i])
                arr.splice(arr.indexOf(arr[i]), 1)
            }
        }
    }


    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] == arr[x]) {
                res.push(arr[i])
                arr.splice(arr.indexOf(arr[i]), 1)
            }
        }
    }

    return res.length

}
console.log(DistinctList([1, 2, 2, 2, 3])) // 2 
console.log(DistinctList([0, -2, -2, 5, 5, 5])) // 3
console.log(DistinctList([100, 2, 101, 4])) // 0
console.log(DistinctList([1, 2, 3, 4])) // 0
console.log(DistinctList([1, 1, 1, 2, 2, 3, 3, 3])) // 5
console.log(DistinctList([1, 1, 1])) // 2
console.log(DistinctList([2, 2])) // 1

// Başarısız - Fail :)
console.log(DistinctList([5, 5, 5, 5, 5, 5, 5, 7])) //  output: 5 ( but the expected answer was 6 )



// Method-2:
function DistinctList(arr) {

    let res = []

    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] == arr[x]) {
                res.push(arr[x])
                break;
            }
        }
    }

    return res.length

}
console.log(DistinctList([1, 2, 2, 2, 3])) // 2 
console.log(DistinctList([0, -2, -2, 5, 5, 5])) // 3
console.log(DistinctList([100, 2, 101, 4])) // 0
console.log(DistinctList([1, 2, 3, 4])) // 0
console.log(DistinctList([1, 1, 1, 2, 2, 3, 3, 3])) // 5
console.log(DistinctList([1, 1, 1])) // 2
console.log(DistinctList([2, 2])) // 1
console.log(DistinctList([5, 5, 5, 5, 5, 5, 5, 7])) //  6






// ******** Letter Capitalize ********

// Method-1:
function LetterCapitalize(str) {

    return str.split(" ").map(x =>
        x[0].toUpperCase().concat(x.slice(1))
    ).join(" ")

}
console.log(LetterCapitalize("hello world")) // Hello World
console.log(LetterCapitalize("i ran there")) // I Ran There




// Method-2:
function LetterCapitalize(str) {

    return str.split(" ").map(x =>
        x.charAt(0).toUpperCase() + x.slice(1)
    ).join(" ")

}
console.log(LetterCapitalize("hello world")) // Hello World
console.log(LetterCapitalize("i ran there")) // I Ran There





// Method-3:
function LetterCapitalize(str) {

    let strSplit = str.split(" ")

    for (let i = 0; i < strSplit.length; i++) {
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1)

    }

    return strSplit.join(" ")
}
console.log(LetterCapitalize("hello world")) // Hello World
console.log(LetterCapitalize("i ran there")) // I Ran There







// ******** Math Challenge (2) ********

function MathChallenge(num) {

    let res = []

    for (let i = 0; i <= num; i++) {
        res.push(i)
    }

    return res.reduce((a, b) => a + b)

}
console.log(MathChallenge(12)) // 78









// ******** String Challenge ********

function StringChallenge(num) {

    var hour = Math.floor(num / 60);
    var min = num % 60;

    return hour + ":" + min;

}
console.log(StringChallenge(126)) // 2:6
console.log(StringChallenge(45)) // 0,45
console.log(StringChallenge(63)) // 1:3








// ******** Caesar Cipher ********


function CaesarCipher(str, num) {

    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = []

    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) !== -1) {
            result.push(alphabet.charAt((alphabet.indexOf(str[i])) + num))
        } else if (alphabet.indexOf(str[i]) == -1) {
            result.push(str[i])
        }
    }
    return result.join("");
}
console.log(CaesarCipher("Caesar Cipher23 %+$#", 2)) // Ecguct Ekrjgt23 %+$#
console.log(CaesarCipher("Caesar Cipher", 2)) // Ecguct Ekrjgt2
console.log(CaesarCipher("Hello", 4)) // Lipps
console.log(CaesarCipher("abc", 0)) // abc

// Wrong answers...
console.log(CaesarCipher("coderBYTE", 2)) // eqfgtDAVG // wrong  =>  eqfgtDVG
console.log(CaesarCipher("dogs", 8)) // lwoa  // wrong  =>  lwoA
console.log(CaesarCipher("byte", 13)) // olgr // wrong  =>  oLGr







// Method - 2 (😀 ...)
function CaesarCipher(str, num) {

    // burayı regex ile halledebilürük, bir ara bakacağım :D...
    let alphabetB = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    let alphabetL = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let result = []


    for (let i = 0; i < str.length; i++) {
        if (alphabetB.indexOf(str[i]) !== -1) {
            result.push(alphabetB.charAt((alphabetB.indexOf(str[i])) + num))
        } else if (alphabetL.indexOf(str[i]) !== -1) {
            result.push(alphabetL.charAt((alphabetL.indexOf(str[i])) + num))
        } else if (alphabetB.indexOf(str[i]) == -1 || alphabetL.indexOf(str[i]) == -1) {
            result.push(str[i])
        }
    }

    return result.join("");
}
console.log(CaesarCipher("Caesar Cipher23 %+$#", 2)) // Ecguct Ekrjgt23 %+$#
console.log(CaesarCipher("Caesar Cipher", 2)) // Ecguct Ekrjgt2
console.log(CaesarCipher("Hello", 4)) // Lipps
console.log(CaesarCipher("abc", 0)) // abc

console.log(CaesarCipher("coderBYTE", 2)) // eqfgtDAVG 
console.log(CaesarCipher("dogs", 8)) // lwoa  
console.log(CaesarCipher("byte", 13)) // olgr 





// ******** Math Challenge (3) ********

function MathChallenge(num1, num2) {

    // METHOD-1:

    // if ( num1 < num2){
    //     return true;
    // } else if (num1 > num2){
    //     return false;
    // } else return -1;


    // METHOD-2:
    return num1 > num2 ? false : num2 > num1 ? true : -1;

}
console.log(MathChallenge(3, 122)) // true
console.log(MathChallenge(122, 3)) // false
console.log(MathChallenge(67, 67)) // -1






// ******** String Challenge (2) ********

// METHOD - 1:
function StringChallenge(str) {

    let result = []

    let arr = str.toLowerCase().split("").join("").match(/(.)\1*/g)
    // console.log("arr:",arr); // arr: (3) ['www', 'bbb', 'w']

    if (arr !== null) {
        arr.map(e => {
            result.push(e.length + e[0])
        });
    }

    return result.join("")
}
console.log(StringChallenge("wwwbbbw")); // 3w3b1w
console.log(StringChallenge("wwwggopp")); // 3w2g1o2p
console.log(StringChallenge("aabbcde")); // 2a2b1c1d1e




// METHOD - 2:
function StringChallenge(str) {

    let result = []

    let arr = str.toLowerCase().split("").join("").match(/(.)\1*/g)

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].length + arr[i][0])
    }

    return result.join("")
}
console.log(StringChallenge("wwwbbbw")); // 3w3b1w
console.log(StringChallenge("wwwggopp")); // 3w2g1o2p
console.log(StringChallenge("aabbcde")); // 2a2b1c1d1e





// ******** Meandering Array ********

function MeanderingArray(arr) {

    arr.sort((a, b) => a - b);
    // console.log("arr",arr); // arr (5) [-5, -1, 1, 2, 3]

    let startIndex = 0, endIndex = arr.length - 1, x = true;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (x) {
            // result[i] = arr[endIndex--];
            result.push(arr[endIndex--])
        } else {
            // result[i] = arr[startIndex++];
            result.push(arr[startIndex++])
        }

        x = !x;
    }

    return result;

}
console.log(MeanderingArray([-1, 1, 2, 3, -5])); // [3, -5, 2, -1, 1]
console.log(MeanderingArray([1, 2, 3, 4, 5])); // [5, 1, 4, 2, 3]
console.log(MeanderingArray([5, 2, 7, 8, -2, 25, 25])); // [25, -2, 25, 2, 8, 5, 7]






// ********  Generator Primes  ********
function getPrimes(n) {

    let primeNumbers = []

    for (let i = 1; i < n; i++) {
        let mark = 0;

        for (let x = 2; x < i; x++) {
            if (i % x == 0) {
                mark = 1;
                break;
            }
        }


        if (i > 1 && mark == 0) {
            primeNumbers.push(i)
        }
    }

    return primeNumbers.join(" ")

};
console.log(getPrimes(10)) // 2 3 5 7
























