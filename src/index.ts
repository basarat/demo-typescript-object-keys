type Prizes = {
  first: string,
  second: string,
};

function logPrizes(prizes: Prizes) {
  let key: keyof Prizes;
  for (key in prizes) {
    console.log(key, prizes[key].toUpperCase());
  }
}

let prizes: Prizes = {
  first: 'gold',
  second: 'silver',
};
logPrizes(prizes); // ✅