"use strict";

// A view of rows already present in the lesson. No network or SQL execution.
document.querySelectorAll("[data-column-preview]").forEach((lab) => {
  const choices = [...lab.querySelectorAll("input[type=checkbox]")];
  const table = lab.querySelector("table");
  const output = lab.querySelector("[data-query]");
  const status = lab.querySelector("[data-preview-status]");

  function updatePreview() {
    const columns = choices.filter((choice) => choice.checked).map((choice) => choice.value);
    table.hidden = columns.length === 0;
    table.querySelectorAll("[data-column]").forEach((cell) => {
      cell.hidden = !columns.includes(cell.dataset.column);
    });
    if (columns.length === 0) {
      output.textContent = "Choose at least one column to build this query.";
      status.textContent = "No columns selected. Choose ID, CODE, or NAME.";
      return;
    }
    output.textContent = `SELECT ${columns.join(", ")}\nFROM ${lab.dataset.table}\nORDER BY ID\nFETCH FIRST 3 ROWS ONLY;`;
    status.textContent = `Preview: 3 rows, ${columns.length} ${columns.length === 1 ? "column" : "columns"}. The stored table is unchanged.`;
  }

  choices.forEach((choice) => choice.addEventListener("change", updatePreview));
  updatePreview();
});

document.querySelectorAll("[data-quiz]").forEach((form) => {
  const feedback = form.querySelector("[data-feedback]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = form.querySelector("input:checked");
    if (!answer) {
      feedback.dataset.state = "retry";
      feedback.textContent = "Choose an answer first, then check it.";
      return;
    }
    const correct = answer.value === form.dataset.answer;
    feedback.dataset.state = correct ? "correct" : "retry";
    feedback.textContent = correct ? form.dataset.correct : form.dataset.retry;
  });
  form.addEventListener("change", () => {
    feedback.textContent = "";
    delete feedback.dataset.state;
  });
});
