import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { loadButtons } from "./triggerTabs.js";
import { toDisplayValues } from "./timer.js";
import { sound } from "./sound.mp3";
import { style } from "./style.css";
loadButtons(); //регистрирует слушатели на кнопки
toDisplayValues(); //функция работы таймера из модуля таймера
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);

  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate); // 3
    dateCalcResult.innerHTML = diffToHtml(diff); // 4
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    ); // 5
}
