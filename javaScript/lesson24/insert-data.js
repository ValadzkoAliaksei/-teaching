export const insertTable = (posts) => {
  Object.keys(posts[0]).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<th>${item}</th>`);
  });
  table.append(tr);
  posts.forEach((post, indexTD) => {
    table.append(setTR(post, indexTD));
  });
  form.append(table);
  form.append(submitButton);
  document.body.append(form);
};
