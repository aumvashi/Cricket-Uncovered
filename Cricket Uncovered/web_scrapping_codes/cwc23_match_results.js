/* -------------- STAGE 1 ------------ */

//------- 1.a Interaction Code ------ //

navigate('https://www.espncricinfo.com/records/tournament/team-match-results/icc-cricket-world-cup-2023-24-15338');
collect(parse());




//------- 2.b Parser Code ------------//

// Step1: create an array to store all the records
let matchSummary = [];

// Step2: Selecting all rows we need from the target table
const allRows = $('table.ds-table > tbody > tr');

// Step3: Looping through each row and get the data from the cells (td)
allRows.each((index, element) => {
    const tds = $(element).find('td');   // find the td
    matchSummary.push({
        'team1': $(tds[0]).text().trim(),
        'team2': $(tds[1]).text().trim(),
        'winner': $(tds[2]).text().trim(),
        'margin': $(tds[3]).text().trim(),
        'ground': $(tds[4]).text().trim(),
        'matchDate': $(tds[5]).text().trim(),
        'scorecard': $(tds[6]).text().trim()
    });
});

// Step4: Finally returning the data
return {
    "matchSummary": matchSummary
};
