import { dataSet } from "./data";
async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function getMonthSale({ YY, MM }) {
  return new Promise((resolve) => {
    (async function () {
      await sleep(3000);
      resolve(dataSet.filter((data) => data.year === YY && data.month == MM));
    })();
  });
}
