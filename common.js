/** ms秒間待つ */
export async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms);
  }) 
}