/** Add any JavaScript you need to this file. */
const items = [
  {
    no: 1,
    gender: "MEN",
    type: "TEES",
  },
  {
    no: 2,
    gender: "MEN",
    type: "DENIM",
  },
  {
    no: 3,
    gender: "MEN",
    type: "OUTERWEAR",
  },
  {
    no: 4,
    gender: "MEN",
    type: "TEES",
  },
  {
    no: 5,
    gender: "MEN",
    type: "DENIM",
  },
  {
    no: 6,
    gender: "WOMEN",
    type: "TEES",
  },
  {
    no: 7,
    gender: "WOMEN",
    type: "OUTERWEAR",
  },
  {
    no: 8,
    gender: "WOMEN",
    type: "DENIM",
  },
  {
    no: 9,
    gender: "WOMEN",
    type: "SKIRT",
  },
  {
    no: 10,
    gender: "WOMEN",
    type: "DENIM",
  },
];
window.onload = function () {
  var dropdown = document.getElementsByClassName("sidemenu-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
};

function filterSide(s) {
  let select = s;
  if (select == "SHOP") {
    for (let i = 1; i <= 10; i++) {
      document.getElementById(i).style.display = "inline-block";
    }
  } else if (select == "MEN") {
    for (let i = 0; i < items.length; i++) {
      if (items[i].gender == s) {
        document.getElementById(i + 1).style.display = "inline-block";
      } else {
        document.getElementById(i + 1).style.display = "none";
      }
    }
  } else if (select == "WOMEN") {
    for (let i = 0; i < items.length; i++) {
      if (items[i].gender == s) {
        document.getElementById(i + 1).style.display = "inline-block";
      } else {
        document.getElementById(i + 1).style.display = "none";
      }
    }
  } else if (select == "TEES") {
    for (let i = 0; i < items.length; i++) {
      if (items[i].type == s) {
        document.getElementById(i + 1).style.display = "inline-block";
      } else {
        document.getElementById(i + 1).style.display = "none";
      }
    }
  } else if (select == "OUTERWEAR") {
    for (let i = 0; i < items.length; i++) {
      if (items[i].type == s) {
        document.getElementById(i + 1).style.display = "inline-block";
      } else {
        document.getElementById(i + 1).style.display = "none";
      }
    }
  } else if (select == "DENIM") {
    for (let i = 0; i < items.length; i++) {
      if (items[i].type == s) {
        document.getElementById(i + 1).style.display = "inline-block";
      } else {
        document.getElementById(i + 1).style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      if (items[i].type == s) {
        document.getElementById(i + 1).style.display = "inline-block";
      } else {
        document.getElementById(i + 1).style.display = "none";
      }
    }
  }
}
function onoff(v, id) {
  if (v === "3") {
    document.getElementById(id).style.display = "inline-block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}
