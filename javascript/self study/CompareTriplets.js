
function compareTriplets(a, b) {    
    // Write your code here
    let aliceScore = 0;
    let bobScore = 0;
    
    a[0] > b[0] ? aliceScore++ : a[0] < b[0] ? bobScore++ : "";
    a[1] > b[1] ? aliceScore++ : a[1] < b[1] ? bobScore++ : "";
    a[2] > b[2] ? aliceScore++ : a[2] < b[2] ? bobScore++ : "";
    
    let finalScore= [aliceScore, bobScore];

    console.log(finalScore);
}

compareTriplets([5,6,7], [3, 6,10]);