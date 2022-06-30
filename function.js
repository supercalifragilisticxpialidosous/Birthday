
            
let rIndex,
    table= document.getElementById("top"),
    ed=document.getElementById("edit"),
     del=document.getElementById("del");


function checkEmptyInput(){
  let isEmpty = false,
     anun = document.getElementById("anun").value,
     maganun = document.getElementById("maganun").value,
     darik = document.getElementById("darik").value,
     passkey = document.getElementById("passkey").value,
     whish = document.getElementById("whish").value,
     gender=document.getElementById("male").value;
     

  if(anun === ""){
    alert(" empty  first name");
    isEmpty = true;}

    else if(maganun === ""){
    alert(" empty last name");
    isEmpty = true;}

    else if(darik === ""){
    alert(" empty age");
    isEmpty = true;}

    if(passkey === ""){
    alert("empty password");
    isEmpty = true;}
    return isEmpty;
}
 

function addTable(){
    if (!checkEmptyInput()){
 let table = document.getElementById("top"),
 newRow = table.insertRow(table.length),
 cell1= newRow.insertCell(0),
 cell2= newRow.insertCell(1),
 cell3= newRow.insertCell(2),
 cell4= newRow.insertCell(3),
 cell5= newRow.insertCell(4);

 let idd;
        for(let i=0;i<newRow.length;i++){
            idd+=i
        }
    console.log(idd)

 let holeNames = document.getElementById("anun").value + "";
 holeNames += document.getElementById("maganun").value;
 let darik = document.getElementById("darik").value;
 let isMale = document.getElementById("male").checked;
 let gender
 if (isMale) {
    gender = "Male"
 } else {
    gender = "Female"
 }

cell1.innerHTML = holeNames;
cell2.innerHTML = darik;
cell3.innerHTML = gender;
cell4.innerHTML = '<button id="ed"  onclick="editTableRow();">Edit</button>' ;
cell5.innerHTML = '<button id="del" onclick="removeSelectedRow();">Remove</button>';
 }
}

function selectedRowToInput(){
    let rIndex,table= document.getElementById("top");
    for (let i = 1; i < top.rows;i++)
    {table.rows[i].onclick = function ()
    {rIndex = this.rowIndex;
     document.getElementById("anun").value = this.cells[0].innerHTML;
 holeNames += document.getElementById("maganun").value = this.cells[0].innerHTML;
 darik = document.getElementById("darik").value = this.cells[1].innerHTML,
 passkey = document.getElementById("passkey").value = this.cells[2].innerHTML,
 whish = document.getElementById("whish").value = this.cells[3].innerHTML;
    };
  }  
}

selectedRowToInput();

function editTableRow(){
    let anun = document.getElementById("anun").value,
     maganun = document.getElementById("maganun").value,
     darik = document.getElementById("darik").value,
     passkey = document.getElementById("passkey").value,
     whish = document.getElementById("whish").value;
  
    table.rows[rIndex].cells[0].innerHTML = "anun";
    table.rows[rIndex].cells[1].innerHTML = "maganun";
    table.rows[rIndex].cells[2].innerHTML = "darik";
    table.rows[rIndex].cells[3].innerHTML = "passkey";
    table.rows[rIndex].cells[4].innerHTML = "whish";
}

function removeSelectedRow(){
    for (var i=1;i<table.rows.length;i++){
        table.rows[i].cells[4].onclick=function(){
        rIndex=this.parentElement.rowIndex;
        table.deleteRow(rIndex);
        console.log(rIndex)
    } ;
};
}

function Cancel(cancel){

    if(cancel=='cancel'){
        document.getElementById('anun').value='';
        document.getElementById('maganun').value='';
        document.getElementById('darik').value='';
        document.getElementById('wish').value='';
    }

}

    function plus(){
        document.getElementById("circle").style.display="";
        document.getElementById("ids").style.display="none";
    }

    function ids(){
        document.getElementById("circle").style.display="none";
        document.getElementById("ids").style.display="block";
    }

    document.getElementById('circle').addEventListener('click', () => {
    document.querySelector('.vertical').classList.toggle('open');
    document.querySelector('.line-wrapper').classList.toggle('open');
    document.querySelector('.table2').classList.toggle('open');
     }
    );

    function searchTable(){
        let filter, input, Table, tr, td, i, tableValue;
    }
