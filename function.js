// function search() {
//   let search = document.getElementById("srch");
//   let srchArray = [];
// }
// class card {
//   constructor(nameF, nameL, pass, date, gend, wl, id) {
//     this.firstName = nameF;
//     this.lastName = nameL;
//     this.password = pass;
//     this.date = date;
//     this.gender = gend ? "Male" : "Female";
//     this.wishList = [...wl];
//     this.id = id;
//   }
// }

// let Ucard = [
//   {
//     firstName: "Frodo",
//     lastName: "Baggins",
//     password: "1234567890-=",
//     date: "1990-03-24",
//     gender: "Male",
//     wishList: ["flower", "food", "friends"],
//     id: 0,
//   },
//   {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     password: "1234567890-=",
//     date: "2030-04-26",
//     gender: "Male",
//     wishList: ["quasedia", "Trolly", "job"],
//     id: 1,
//   },
//   {
//     firstName: "Leia",
//     lastName: "Organa",
//     password: "1234567890-=",
//     date: "1200-5-19",
//     gender: "Female",
//     wishList: [ "nothing", "no people", "pizza"],
//     id: 2,
//   },
// ];

// console.log(Ucard);

// function show(users) {
//   let c = ``;
//   let show = ``;

//   for (i = 0; i < users.length; i++) {
//     c = `<div onclick = "displayWL(${users[i].id})" class="useCard">
//   <p class="info" >${users[i].firstName} ${users[i].lastName}</p>
//   <p class="info" >${users[i].date}</p>
//   <p class="info" >${users[i].gender}</p>
//   <div>`
//   show = show + ` ${c}`;
//   }
//   document.getElementById("card").innerHTML = show;
// }
// show(Ucard)

//   function addNewUser() {

//   let nameF = document.getElementById("fN").value;
//   let nameL = document.getElementById("lN").value;
//   let pass = document.getElementById("Pass").value;
//   let date = document.getElementById("DT").value;
//   let gend = document.getElementById("G1").value;
//   let wl = document.getElementById("WL").value;

//   if (nameF !== "" && nameL !== "" && pass !== "" && date !== "" && gend !== "" && wl !== ""){
  
//   }

   
// }

// addBtn.addEventListener("click", createTodo);

// addInput.addEventListener("keypress", function(event){
//   if(event.key === "Enter"){
//     createTodo();
//   }
// });

//   if (nameF !== "" && nameL !== "" && pass !== "" && date !== "" && wl !== "") {
//     let wL = wl.split(",");
//     let input = new card(nameF , nameL, pass, date, gend, wL);

//     if (editId == -1) {
//       usecards.push(input);
//       id++;
//     } else {
//       for (let i = 0; i < Ucard.length; i++) {
//         if (editId == ucard[i].id) {
//           Ucard.splice(i, 1, input);
//           editId = -1;
//           delEdit = -1;
//         }
//       }
//     }

//     document.getElementById("SUForm").style.display = "none";
//     document.getElementById("new").style.display = "";
//     displaying(Ucard);
//     clearInput();
//     console.log(input);
//   } else {
//     console.log("form");
//   }
// }

// circle button 
// document.querySelector('.circle').addEventListener('click', () => {
//   document.querySelector('.vertical').classList.toggle('open');
//   document.querySelector('.line-wrapper').classList.toggle('open');
//   document.querySelector('.content').classList.toggle('open');
// });


// jQuery
// $('.circle').on('click', () => {
//   $('.line-wrapper').toggleClass('open');
//   $('.vertical').toggleClass('open');
//   $('.content').toggleClass('open');
// });

// for pop ups
// function onDelete() {
//   let confirmation = document.getElementById("confirmation");
//   if (!confirmation.classList.contains("modal-open")) {
//     confirmation.classList.add("modal-open");
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .getElementById("confirmation")
//     .addEventListener("click", onCancel);
//   document
//     .querySelector(".modal")
//     .addEventListener("click", (e) => e.stopPropagation());
// });

// onCancel()

// function passCheck () {
//   if (Pass === passCheck){
//     return true
//      } else { 
//       return false
//     }
//   }

// function inpCheck (){
//   if (fN !== null ) {
//     console.log( "first name");
//   } else if (lN !== null){
//     console.log( "last name");
//   } else if (G!== null){
//     console.log ("gender");
//   } else if (DT!== null){
//     console.log ("date");
//   } else if (WL!== null){
//     console.log ("wish list");
//   } else if (Pass!== null){
//     console.log ("password");
//   }else {
//     console.log ("all filled");
//   }
// }



window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});