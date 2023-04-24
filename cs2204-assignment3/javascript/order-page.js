//////////////////order page
const ticket = document.getElementById("menu_ticket");
const dinings = document.getElementById("menu_dinings");
const hotel = document.getElementById("menu_hotel");
const ticketLabel = document.getElementById("ticketLabel");
const diningLabel = document.getElementById("diningLabel");
const hotelLabel = document.getElementById("hotelLabel");
ticket.style.display = "none";
dinings.style.display = "none";
hotel.style.display = "none";

////after page loading, this only show once
(function () {
  ticket.style.display = "block";
  ticketLabel.style.backgroundColor = "rgb(206, 204, 204)";
})();

ticketLabel.addEventListener("click", function () {
  ticket.style.display = "block";
  dinings.style.display = "none";
  hotel.style.display = "none";
  ticketLabel.style.backgroundColor = "rgb(206, 204, 204)";
  diningLabel.style.backgroundColor = "white";
  hotelLabel.style.backgroundColor = "white";
});

diningLabel.addEventListener("click", function () {
  dinings.style.display = "block";
  ticket.style.display = "none";
  hotel.style.display = "none";

  diningLabel.style.backgroundColor = "rgb(206, 204, 204)";
  ticketLabel.style.backgroundColor = "white";
  hotelLabel.style.backgroundColor = "white";
});

hotelLabel.addEventListener("click", function () {
  hotel.style.display = "block";
  dinings.style.display = "none";
  ticket.style.display = "none";
  hotelLabel.style.backgroundColor = "rgb(206, 204, 204)";
  ticketLabel.style.backgroundColor = "white";
  diningLabel.style.backgroundColor = "white";
});
////////////////////////////
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");

const t1q = document.getElementById("t1-qty");
const t2q = document.getElementById("t2-qty");
const t3q = document.getElementById("t3-qty");
const d1q = document.getElementById("d1-qty");
const d2q = document.getElementById("d2-qty");
const h1q = document.getElementById("h1-qty");
const h2q = document.getElementById("h2-qty");
const h3q = document.getElementById("h3-qty");
const h4q = document.getElementById("h4-qty");

const quantity = document.querySelectorAll(".quantity"); //for all numbers

const totalqty = document.getElementById("totalqty"); //total
const tr1 = document.getElementById("tr1");

const button = document.getElementById("button");

t1.onclick = eventHandler;
function eventHandler() {
  getMenuItem("t1");
}

t2.addEventListener("click", function () {
  getMenuItem("t2");
});
t3.addEventListener("click", function () {
  getMenuItem("t3");
});
d1.addEventListener("click", function () {
  getMenuItem("d1");
});
d2.addEventListener("click", function () {
  getMenuItem("d2");
});
h1.addEventListener("click", function () {
  getMenuItem("h1");
});
h2.addEventListener("click", function () {
  getMenuItem("h2");
});
h3.addEventListener("click", function () {
  getMenuItem("h3");
});
h4.addEventListener("click", function () {
  getMenuItem("h4");
});
let totalArray = [];
let total = 0;

function recal() {
  let sum = totalArray.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  totalqty.innerHTML = sum;
}

function getMenuItem(incode) {
  let array = [
    {
      code: "t1",
      desc: "1-Day Ticket",
      numOfItem: t1q.value,
    },
    {
      code: "t2",
      desc: "1-Day Ticket (Child) ",
      numOfItem: t2q.value,
    },
    {
      code: "t3",
      desc: "2-Day Ticket",
      numOfItem: t3q.value,
    },
    {
      code: "d1",
      desc: "Explorer's Semi Buffet",
      numOfItem: d1q.value,
    },
    {
      code: "d2",
      desc: "3-in-1 Park Meal Voucher",
      numOfItem: d2q.value,
    },
    {
      code: "h1",
      desc: "Standard Room",
      numOfItem: h1q.value,
    },
    {
      code: "h2",
      desc: "Deluxe Room",
      numOfItem: h2q.value,
    },
    {
      code: "h3",
      desc: "Sea View Room",
      numOfItem: h3q.value,
    },
    {
      code: "h4",
      desc: "Kingdom Club Room",
      numOfItem: h4q.value,
    },
  ];

  let result = array.map((a) => a.code);
  let number = array.map((a) => a.numOfItem);
  let desc = array.map((a) => a.desc);

  for (let i = 0; i < array.length; i++) {
    if (result[i] == incode) {
      // rmb to add plus sign to convert string to number

      totalArray.push(+number[i]);
      recal();

      let markup = `
      <tr >
      <td class="description" >${desc[i]}</td>
      <td class="quantity" >${number[i]}</td>
      </tr>
      `;
      if (number[i] != "" && number[i] > 0) {
        tr1.insertAdjacentHTML("beforebegin", markup);
      }
    }
  }
}
const table = document.getElementById("tablee");

undo.addEventListener("click", function (e) {
  e.preventDefault();
  let rowCount = table.rows.length;
  table.deleteRow(rowCount - 3);

  totalArray.splice(-1);
  recal();
});
