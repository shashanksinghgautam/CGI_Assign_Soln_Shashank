function product(id, name, price, qua) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.qua = qua;
}

var proArr = [];
let i = 0;

function store() {
  let balances = document.getElementsByClassName("balances");
  console.log(balances);
  let obj = new product(
    balances[0].value,
    balances[1].value,
    balances[2].value,
    balances[3].value
  );
  proArr[i] = obj;
  i = i + 1;

  document.getElementById("sta").innerText = i + " Products Added";
  document.getElementById("sta").style.color = "green";
}

function res() {
  document.getElementById("r").value = "";
  document.getElementById("s").value = "";
  document.getElementById("t").value = "";
  document.getElementById("u").value = "";
}

function show() {
  if (proArr.length == 0) {
    document.getElementById("sta").innerText = "  NO DATA FOUND";
    document.getElementById("sta").style.color = "red";
  } else {
    document.getElementById("sta").innerText = " Details Printed Successfully";
    document.getElementById("sta").style.color = "green";

    document.getElementById("int10").value = proArr[0].id;
    document.getElementById("int11").value = proArr[0].name;
    document.getElementById("int12").value = proArr[0].price;
    document.getElementById("int13").value = proArr[0].qua;

    document.getElementById("int20").value = proArr[1].id;
    document.getElementById("int21").value = proArr[1].name;
    document.getElementById("int22").value = proArr[1].price;
    document.getElementById("int23").value = proArr[1].qua;

    document.getElementById("int30").value = proArr[2].id;
    document.getElementById("int31").value = proArr[2].name;
    document.getElementById("int32").value = proArr[2].price;
    document.getElementById("int33").value = proArr[2].qua;

    document.getElementById("int40").value = proArr[3].id;
    document.getElementById("int41").value = proArr[3].name;
    document.getElementById("int42").value = proArr[3].price;
    document.getElementById("int43").value = proArr[3].qua;

    document.getElementById("int50").value = proArr[4].id;
    document.getElementById("int51").value = proArr[4].name;
    document.getElementById("int52").value = proArr[4].price;
    document.getElementById("int53").value = proArr[4].qua;

    
  }
}
  function del() {
    if (proArr.length == 0) {
      document.getElementById("sta").innerText = "  NO DATA FOUND";
      document.getElementById("sta").style.color = "red";
    }
    else {
      proArr = [];
      document.getElementById("sta").innerText = "  Deletion Succesfull";
      document.getElementById("sta").style.color = "crimson";
      document.getElementById("int10").value = "";
      document.getElementById("int11").value = "";
      document.getElementById("int12").value = "";
      document.getElementById("int13").value = "";
  
      document.getElementById("int20").value = "";
      document.getElementById("int21").value = "";
      document.getElementById("int22").value = "";
      document.getElementById("int23").value = "";
  
      document.getElementById("int30").value = "";
      document.getElementById("int31").value = "";
      document.getElementById("int32").value = "";
      document.getElementById("int33").value = "";
  
      document.getElementById("int40").value = "";
      document.getElementById("int41").value = "";
      document.getElementById("int42").value = "";
      document.getElementById("int43").value = "";
  
      document.getElementById("int50").value = "";
      document.getElementById("int51").value = "";
      document.getElementById("int52").value = "";
      document.getElementById("int53").value = "";
    }
  }

