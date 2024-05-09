document.addEventListener("DOMContentLoaded", () => {
  const day = document.querySelector(".day-input");
  const dayLabel = document.querySelector(".day-label");
  const dayError = document.querySelector(".day-error");
  const dayInput = document.querySelector(".day-input");
  const month = document.querySelector(".month-input");
  const monthLabel = document.querySelector(".month-label");
  const monthError = document.querySelector(".month-error");
  const monthInput = document.querySelector(".month-input");
  const year = document.querySelector(".year-input");
  const yearLabel = document.querySelector(".year-label");
  const yearError = document.querySelector(".year-error");
  const yearInput = document.querySelector(".year-input");
  const calculate = document.querySelector(".calculate");
  const hr = document.querySelector("hr");
  const results = document.querySelector(".results");
  const yearResult = document.querySelector(".year-result");
  const monthResult = document.querySelector(".month-result");
  const dayResult = document.querySelector(".day-result");

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = new Date().getFullYear();

  function displayErrors() {
    if (day.value > 31 || month.value > 12 || year.value > currentYear) {
      results.classList.add("error");
      hr.style.marginTop = "25px";
    } else {
      results.classList.remove("error");
      hr.style.marginTop = "0px";
    }

    if (day.value > 31) {
      dayError.style.opacity = "1";
      dayLabel.classList.add("error");
      dayInput.classList.add("error");
    } else {
      dayError.style.opacity = "0";
      dayLabel.classList.remove("error");
      dayInput.classList.remove("error");
    }

    if (month.value > 12) {
      monthError.style.opacity = "1";
      monthLabel.classList.add("error");
      monthInput.classList.add("error");
    } else {
      monthError.style.opacity = "0";
      monthLabel.classList.remove("error");
      monthInput.classList.remove("error");
    }

    if (year.value > currentYear) {
      yearError.style.opacity = "1";
      yearLabel.classList.add("error");
      yearInput.classList.add("error");
    } else {
      yearError.style.opacity = "0";
      yearLabel.classList.remove("error");
      yearInput.classList.remove("error");
    }

    restrictInput();
  }

  function calculateAge() {
    const dayAge = parseInt(day.value);
    const monthAge = parseInt(month.value);
    const yearAge = parseInt(year.value);
    const previousDate = new Date(currentYear, currentMonth - 1, 0).getDate();

    let userDays = currentDay - dayAge;
    let userMonths = currentMonth - monthAge;
    let userYears = currentYear - yearAge;

    if (userDays < 0) {
      userMonths--;
      userDays = previousDate + userDays;
    }

    if (userMonths < 0) {
      userMonths = 12 + userMonths;
      userYears--;
    }

    dayResult.textContent = userDays;
    monthResult.textContent = userMonths;
    yearResult.textContent = userYears;

    if (day.value === "") {
      dayError.style.opacity = "1";
      dayLabel.classList.add("error");
      dayInput.classList.add("error");
      dayResult.textContent = "- -";
      results.classList.add("error");
      hr.style.marginTop = "25px";
    } else {
      dayError.style.opacity = "0";
      dayLabel.classList.remove("error");
      dayInput.classList.remove("error");
      results.classList.remove("error");
      hr.style.marginTop = "0px";
    }

    if (month.value === "") {
      monthError.style.opacity = "1";
      monthLabel.classList.add("error");
      monthInput.classList.add("error");
      monthResult.textContent = "- -";
      results.classList.add("error");
      hr.style.marginTop = "25px";
    } else {
      monthError.style.opacity = "0";
      monthLabel.classList.remove("error");
      monthInput.classList.remove("error");
      results.classList.remove("error");
      hr.style.marginTop = "0px";
    }

    if (year.value === "") {
      yearError.style.opacity = "1";
      yearLabel.classList.add("error");
      yearInput.classList.add("error");
      yearResult.textContent = "- -";
      results.classList.add("error");
      hr.style.marginTop = "25px";
    } else {
      yearError.style.opacity = "0";
      yearLabel.classList.remove("error");
      yearInput.classList.remove("error");
      results.classList.remove("error");
      hr.style.marginTop = "0px";
    }

    restrictInput();
  }

  function restrictInput() {
    day.value = day.value.replace(/[^0-9.]/g, "");
    month.value = month.value.replace(/[^0-9.]/g, "");
    year.value = year.value.replace(/[^0-9.]/g, "");
  }

  day.addEventListener("input", displayErrors);
  month.addEventListener("input", displayErrors);
  year.addEventListener("input", displayErrors);
  calculate.addEventListener("click", calculateAge);
});
