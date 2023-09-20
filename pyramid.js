//stone, marble, lapis lazuli, and gol//

function pyramid(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let rows = 0;
    let currnetBase = base;

    while (currnetBase > 2) {
        let marbel = currnetBase * 4 - 4;
        let stone = currnetBase * currnetBase - marbel;
        totalStone += stone;

        rows++
        if (rows % 5 === 0) {
            totalLapis += marbel;
        } else {
            totalMarble += marbel;
        }
        currnetBase -= 2;
    }
    rows++;
    let gold = currnetBase * currnetBase;

    stone = Math.ceil(totalStone * increment);
    marbel = Math.ceil(totalMarble * increment );
    lapis = Math.ceil(totalLapis * increment);
    totalGold = Math.ceil(gold * increment);
    totalHeight = Math.floor(rows * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marbel}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);

}
pyramid(11, 1);