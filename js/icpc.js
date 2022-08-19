const icpcURL = "icpc.json";

function generateICPCTable(json){
  const table = document.createElement("table");
  table.id = "icpc-history";
  
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  const label = ["Season", "Date", "Contest", "Standings", "Scoreboard"];
  for(let i = 0; i < label.length; i++){
    const th = document.createElement("th");
    th.innerHTML = label[i];
    trHead.appendChild(th);
  }
  thead.appendChild(trHead);
  
  let tbody = document.createElement("tbody");
  for(let i = 0; i < json.length; i++){
    let mark = false;
    if(i % 2 == 1){
      mark = true;
    }
    const trArray = generateContests(json[i], mark);
    for(let j = 0; j < trArray.length; j++){
      tbody.appendChild(trArray[j]);
    }
  }
  
  table.appendChild(thead);
  table.appendChild(tbody);
  const div = document.getElementById("icpc-table");
  div.innerHTML = table.outerHTML;
}

function generateContests(season, mark){
  const trArray = []
  for(let i = 0; i < season["Contests"].length; i++){
    const tr = document.createElement("tr");
    if(mark){
      tr.id = "mark";
    }
    let td = document.createElement("td");
    if(i == 0){
      td.innerHTML = season["Season"];
    }
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = season["Contests"][i]["Date"];
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = season["Contests"][i]["Contest"];
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = season["Contests"][i]["Standings"];
    tr.appendChild(td);

    td = document.createElement("td");
    if(season["Contests"][i]["Scoreboard"]){
      td.innerHTML = "<a href='" + season["Contests"][i]["Scoreboard"] + "'>Link</a>";
    }else{
      td.innerHTML = "N/A"
    }
    tr.appendChild(td);

    trArray[i] = tr;
  }
  return trArray;
}

$.getJSON(icpcURL)
  .done(function(json){
    generateICPCTable(json);
  })
  .fail(function(jqxhr, textStatus, error){
    console.log("Request to icpc.json failed. Error: " + error)
  })