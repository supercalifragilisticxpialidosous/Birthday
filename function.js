let people = [
    {
        id: 1,
        firstName: 'jose',
        lastName: '',
        birthday: '2022',
        gender: 'male',
        wishlist: [],
        password: '1'
    },
    {},
    {},
]

let peopleCount = people.length;
console.log("1", peopleCount)
console.log("2", people.length)
            
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

 peopleCount = peopleCount + 1;
 newRow.id = peopleCount ;

 let idd;
        for(let i=0;i<newRow.length;i++){
            idd+=i
        }
    console.log(idd)

 let anun= document.getElementById("anun").value;
 let maganun= document.getElementById("maganun").value;
 let whish = document.getElementById("whish").value;
 let passkey = document.getElementById("passkey").value;



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
cell4.innerHTML = `<button id="ed"  onclick="editTableRow(${peopleCount});">Edit</button>` ;
cell5.innerHTML = `<button id="del" onclick="removeSelectedRow();"> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5H21M9.00002 10V15M13 10V15M3 5H19L17.42 19.22C17.3659 19.7094 17.1331 20.1616 16.7663 20.49C16.3995 20.8184 15.9244 21 15.432 21H6.56801C6.07565 21 5.60057 20.8184 5.23376 20.49C4.86694 20.1616 4.63417 19.7094 4.58 19.22L3 5ZM6.34501 2.147C6.50676 1.80397 6.76271 1.514 7.08301 1.31091C7.40331 1.10782 7.77475 0.999996 8.15401 1H13.846C14.2254 0.999806 14.5971 1.10755 14.9176 1.31064C15.2381 1.51374 15.4942 1.80381 15.656 2.147L17 5H5.00001L6.34501 2.147Z" stroke="#995D53" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>`;

people.push(
    {
        id: peopleCount,
        firstName: anun,
        lastName: maganun,
        birthday: darik,
        gender: male,
        wishlist: whish,
        password: passkey
    }
 )
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

function editTableRow(el){
    let anun = document.getElementById("anun").value,
     maganun = document.getElementById("maganun").value,
     darik = document.getElementById("darik").value,
     passkey = document.getElementById("passkey").value,
     whish = document.getElementById("whish").value,
     
     form = document.getElementById("")

    console.log('this', table, el.parentElement.parentElement)
  
    // table.rows[rIndex].cells[0].innerHTML = "anun";
    // table.rows[rIndex].cells[1].innerHTML = "maganun";
    // table.rows[rIndex].cells[2].innerHTML = "darik"; 
    // table.rows[rIndex].cells[3].innerHTML = "passkey";
    // table.rows[rIndex].cells[4].innerHTML = "whish";
}

function removeSelectedRow(){
    for (var i=1;i<table.rows.length;i++){
        table.rows[i].cells[4].onclick = function sisi (){
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

    
