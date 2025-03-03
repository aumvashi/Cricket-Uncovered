/* -------------- STAGE 1 ------------ */

//------- 1.a Interaction Code ------ //
navigate('https://www.espncricinfo.com/records/tournament/team-match-results/icc-cricket-world-cup-2023-24-15338');


let links = parse().matchSummaryLinks;
for(let i of links) { 
  next_stage({url: i}) 
}

//------- 1.b Parser Code ------------//
let links = []
const allRows = $('table.ds-table > tbody > tr');
 allRows.each((index, element) => {
  const tds = $(element).find('td');
  const rowURL = "https://www.espncricinfo.com" +$(tds[6]).find('a').attr('href');
  links.push(rowURL);
 })
return {
  'matchSummaryLinks': links
}


/* -------------- STAGE 2 ------------ */

//------- 2.a Interaction Code ------ //
navigate(input.url);
collect(parse());

//------- 2.b Parser Code ------------//
// Find the div containing team1 and team2
var inningsDiv = $('div').filter(function () {
    return $(this).find('span.ds-inline-flex.ds-items-center.ds-bg-ui-fill.ds-text-typo-primary').length > 0 &&
           $(this).find('span.ds-inline-flex.ds-items-center.ds-bg-ui-fill-alternate.ds-text-typo').length > 0;
});

// Extract team information
team1 = inningsDiv.find('span.ds-inline-flex.ds-items-center.ds-bg-ui-fill.ds-text-typo-primary').first().text().replace(" Innings", "").trim();
team2 = inningsDiv.find('span.ds-inline-flex.ds-items-center.ds-bg-ui-fill-alternate.ds-text-typo').first().text().replace(" Innings", "").trim();

// Create matchInfo string
matchInfo = team1 + ' Vs ' + team2;

var tables = $('div > table.ci-scorecard-table');
var firstInningRows = $(tables.eq(0)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 8
})

var secondInningsRows = $(tables.eq(1)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 8
});


var battingSummary = []
firstInningRows.each((index, element) => {
  var tds = $(element).find('td');
  battingSummary.push({
  		"match": matchInfo,
  		"teamInnings": team1,
   		"battingPos": index+1,
  		"batsmanName": $(tds.eq(0)).find('a > span > span').text().trim(),
    	"dismissal": $(tds.eq(1)).find('span > span').text(),
  		"runs": $(tds.eq(2)).find('strong').text(), 
  		"balls": $(tds.eq(3)).text(),
  		"4s": $(tds.eq(5)).text(),
  		"6s": $(tds.eq(6)).text(),
 		"SR": $(tds.eq(7)).text()
  });
});

secondInningsRows.each((index, element) => {
  var tds = $(element).find('td');
   battingSummary.push({
  		"match": matchInfo,
  		"teamInnings": team2,
   		"battingPos": index+1,
  		"batsmanName": $(tds.eq(0)).find('a > span > span').text().trim(),
     	"dismissal": $(tds.eq(1)).find('span > span').text(),
  		"runs": $(tds.eq(2)).find('strong').text(), 
  		"balls": $(tds.eq(3)).text(),
  		"4s": $(tds.eq(5)).text(),
  		"6s": $(tds.eq(6)).text(),
 		"SR": $(tds.eq(7)).text()
  });
});

return {"battingSummary": battingSummary}