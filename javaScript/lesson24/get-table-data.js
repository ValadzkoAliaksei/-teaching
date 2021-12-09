import { insertTable } from "./insert-data";

export const getTableData = () => {
  const messageText = document.querySelector("h1");
  if (messageText) messageText.remove();
  try {
    button.setAttribute("disabled", true);
    setIsLoading();
    Promise.all([
      new Promise((resolve) => setTimeout(() => resolve(null), 1000)), // 1
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ])
      .then((response) => response[1].json())
      .then((result) => {
        setIsLoading();

        insertTable(result);
      });
  } catch (error) {
    setIsLoading();
    console.log(error);
  }
};
