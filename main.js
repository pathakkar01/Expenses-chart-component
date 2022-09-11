const showAmount = (event) => {
  console.log(event.target.title);
  const targetEleday = event.target.title;
  document
    .getElementById(targetEleday + "-amount")
    .classList.add("visible-amount");
};
const hideAmount = (event) => {
  console.log(event.target.title);
  const targetEleday = event.target.title;
  document
    .getElementById(targetEleday + "-amount")
    .classList.remove("visible-amount");
};

fetch("data.json")
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    let maxAmount = 0;
    let maxAmountElement;
    for (let state in res) {
      const day = res[state].day;
      let dayElement = document.getElementById(day);
      if (res[state].amount > maxAmount) {
        maxAmount = res[state].amount;
        maxAmountElement = dayElement;
      }

      dayElement.setAttribute(
        "style",
        "height:" + res[state].amount * 2 + "px"
      );
      document.getElementById(day + "-amount").innerHTML =
        "$ " + res[state].amount;
      dayElement.addEventListener("mouseover", showAmount);
      dayElement.addEventListener("mouseout", hideAmount);
      console.log(state, dayElement, dayElement.style.height);
    }
    maxAmountElement.classList.add("max-ele");
  });
