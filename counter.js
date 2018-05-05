const counter = () => {
  let cash = document.getElementsByClassName('Cash');
  let count = parseInt(cash[0].innerHTML);
  cash[0].innerHTML = count + 1;
}
