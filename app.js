const generatecolor = () => {
  // 16772150
  const ran = Math.floor(Math.random() * 10000000);
  const ranc = "#" + ran.toString(16);
  // alert(ranc)
  document.getElementById("main").style.backgroundColor = ranc;
  document.getElementById("h3").innerHTML = ranc;

  navigator.clipboard.writeText(ranc); //  Clipbord
};

document.getElementById("btn").addEventListener("click", generatecolor);
// generatecolor();
