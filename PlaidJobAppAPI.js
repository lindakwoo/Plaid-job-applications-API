//standardizes all US-based phone numbers to: "1-xxx-xxx-xxxx" format.
let standardizePhoneNumber = (phoneEntry)=>{
    let digits = [];
    let final = "1-";
    //create array of only the digits from the input text
    for(let i = 0;i<phoneEntry.length;i++){
        //simple regular expression that filters out anything but digits.
        if(/\d/.test(phoneEntry[i])){
            digits.push(phoneEntry[i]);
        }
    }
    //check to make sure there is a valid number of digits (10 or 11)
    if(digits.length!==10&&digits.length!==11){
        return "invalid";
    }
    //remove the redundant "1" if applicant has entered a "1" in front of their number
    if(digits.length===11&& digits[0]==="1"){
        digits.shift();
    }
    //otherwise if 11 characters and first character is not a "1", invalid.  
    // Or if 10 characters and first character is "1", invalid
    else if((digits.length===11)||(digits.length===10&&digits[0]=="1")){
        return "invalid";
    }
    //cycle through digits array to format final string
    for(let i = 0;i<digits.length;i++){
        if(i===2||i===5){
            final +=`${digits[i]}-`;
        }else{
            final += `${digits[i]}`;
        }
    }
    return final;
}


// let text = "(415) 751.9823";
// console.log(standardizePhoneNumber(text)); => "1-415-751-9823"


//returns an array of all favorite candies from most popular to least popular
//where input data is an array of all applicants' json data.
let mostPopularCandy = (allApplicants)=>{
    let candyCount = {};
    let sortedCandy = [];
    for(applicant of allApplicants){
        let candy = applicant["favorite_candy"].toLowerCase();
        if(candyCount[candy]){
            candyCount[candy]++;
        }else{
            candyCount[candy]=1;
        }
    }
    for(candy in candyCount){
        sortedCandy.push([candy,candyCount[candy]]);
    }
    sortedCandy.sort((a,b)=>{
        return a[1]>b[1]?-1:1;
    })
    return sortedCandy;
}

// let data = [{name: "Linda",favorite_candy:"snickers"},
//             {name: "Stan", favorite_candy:"m&m"},
//             {name: "Casper", favorite_candy:"Skor"},
//             {name: "Cynthia", favorite_candy:"Skor"},
//             {name: "Peter", favorite_candy:"skor"},
//             {name: "George", favorite_candy:"milky way"},
//             {name: "KAthy", favorite_candy:"snickers"},
//             {name: "Debbie", favorite_candy:"SKOR"},
//             {name: "Jane", favorite_candy:"SKOR"},
//             {name: "KAtherine", favorite_candy:"Snickers"},
//             {name: "Joan", favorite_candy:"SKOR"},
//             {name: "Carter", favorite_candy:"Snickers"},
//             {name: "Steve", favorite_candy:"Milky Way"}]

// console.log(mostPopularCandy(data)); => [ [ 'skor', 6 ], [ 'snickers', 4 ], [ 'milky way', 2 ], [ 'm&m', 1 ] ]