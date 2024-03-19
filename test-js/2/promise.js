import { dataSet } from "./data";
async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function getMonthSale({ YY, MM }) {
  return new Promise((resolve) => {
    (async function () {
      await sleep(3000);
      switch (true) {
        case !YY && !MM:
          resolve(dataSet);
          break;
        case YY && !MM:
          resolve(dataSet.filter((data) => data.YY === YY));
          break;
        case !YY && MM:
          resolve(dataSet.filter((data) => data.MM === MM));
          break;
        case YY && MM:
          resolve(
            dataSet.filter((data) => data.year === YY && data.month == MM)
          );
          break;
        default:
          resolve(dataSet);
          break;
      }
    })();
  });
}
