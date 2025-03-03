/* -------------- STAGE 1 ------------ */
//------- 1.a Interaction Code ------ //

navigate('https://www.espncricinfo.com/records/tournament/team-match-results/icc-cricket-world-cup-2023-24-15338');

let links = parse().playersLinks;
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
  'playersLinks': links
};




/* ------------ STAGE 2 -------------- */
//------- 2.a Interaction Code ------ //
navigate(input.url);

let playersData = parse().playersData;
for(let obj of playersData) { 
  name = obj['name']
  team = obj['team']
  url = obj['link']
  next_stage({name: name, team: team, url: url}) 
}




//---------- 2.b Parser Code ---------//
// Initialize a set to track unique player names
const uniqueNames = new Set();

// to store all the players in a list
var playersLinks = [];

// Find the div containing team1 and team2
var inningsDiv = $('div').filter(function () {
  return $(this).find('span.ds-inline-flex.ds-items-center.ds-bg-ui-fill.ds-text-typo-primary').length > 0 &&
         $(this).find('span.ds-inline-flex.ds-items-center.ds-bg-ui-fill-alternate.ds-text-typo').length > 0;
});

// Extract team information
team1 = inningsDiv.find('span.ds-inline-flex.ds-items-center.ds-bg-ui-fill.ds-text-typo-primary').first().text().replace(" Innings", "").trim();
team2 = inningsDiv.find('span.ds-inline-flex.ds-items-center.ds-bg-ui-fill-alternate.ds-text-typo').first().text().replace(" Innings", "").trim();

// Function to clean player names
function cleanPlayerName(name) {
  // Remove extra spaces and make the name consistent
  const cleanedName = name.replace(/\s+/g, ' ').trim();

  // Return empty string if the cleaned name is empty
  return cleanedName.length > 0 ? cleanedName : 'Unknown Player';
}


// Function to add a player to the playersLinks array, avoiding duplicates
function addPlayer(playerName, team, link) {
  const cleanName = cleanPlayerName(playerName);
  const uniqueKey = `${cleanName}-${team}`;
  
  if (!uniqueNames.has(uniqueKey)) {
    uniqueNames.add(uniqueKey);
    playersLinks.push({
      "name": cleanName,
      "team": team,
      "link": link
    });
  }
}

// for batting players
var tables = $('div > table.ci-scorecard-table');
var firstInningRows = $(tables.eq(0)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 8;
});

var secondInningsRows = $(tables.eq(1)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 8;
});

firstInningRows.each((index, element) => {
  var tds = $(element).find('td');
  const playerName = $(tds.eq(0)).find('a > span > span').text().trim();
  const link = "https://www.espncricinfo.com" + $(tds.eq(0)).find('a').attr('href');
  
  if (playerName !== '') {
    addPlayer(playerName, team1, link);
  }
});

secondInningsRows.each((index, element) => {
  var tds = $(element).find('td');
  const playerName = $(tds.eq(0)).find('a > span > span').text().trim();
  const link = "https://www.espncricinfo.com" + $(tds.eq(0)).find('a').attr('href');
  
  if (playerName !== '') {
    addPlayer(playerName, team2, link);
  }
});

// for bowling players
var tablesBowling = $('div > table.ds-table');
var firstInningRowsBowling = $(tablesBowling.eq(1)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 11;
});

var secondInningsRowsBowling = $(tablesBowling.eq(3)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 11;
});

firstInningRows.each((index, element) => {
  var tds = $(element).find('td');
  const playerName = $(tds.eq(0)).find('a > span > span').text().trim();
  const link = "https://www.espncricinfo.com" + $(tds.eq(0)).find('a').attr('href');
  
  if (playerName !== '') {
    addPlayer(playerName, team1, link);
  }
});

secondInningsRows.each((index, element) => {
  var tds = $(element).find('td');
  const playerName = $(tds.eq(0)).find('a > span > span').text().trim();
  const link = "https://www.espncricinfo.com" + $(tds.eq(0)).find('a').attr('href');
  
  if (playerName !== '') {
    addPlayer(playerName, team2, link);
  }
});

return {"playersData": playersLinks};


 
 
/* ------------- STAGE 3 ------------ */

//------- 3.a Interaction Code ------ //
navigate(input.url);
final_data = parse()
collect(
{
 "name": input.name,
  "team": input.team,
  "battingStyle": final_data.battingStyle,
  "bowlingStyle": final_data.bowlingStyle,
  "playingRole":  final_data.playingRole,
  "description": final_data.content,
});
 
//---------- 3.b Parser Code ---------//
let battingStyle = $('div.ds-grid > div').filter(function(index){
    return $(this).find('p').first().text() === String('Batting Style');
});

let bowlingStyle = $('div.ds-grid > div').filter(function(index){
    return $(this).find('p').first().text() === String('Bowling Style');
});

let playingRole = $('div.ds-grid > div').filter(function(index){
    return $(this).find('p').first().text() === String('Playing Role');
});

return {
    "battingStyle": battingStyle.find('span').text(),
    "bowlingStyle": bowlingStyle.find('span').text(),
    "playingRole": playingRole.find('span').text(),
    "content": $('div.ci-player-bio-content').find('p').first().text()
};