let box = 1;

for (let i = 1; i < 150; i++) {
  if ((i % 40) == 1) {

    console.log(`box: ${box} bot: ${i} (${ i % 40}) !!!`);
    box++;

  } else {
    console.log(`box: ${box} bot: ${i} (${ i % 40})`);
  }
}
