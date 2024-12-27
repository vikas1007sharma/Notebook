function* simpleGenerator() {
        let i = 0;
        while (i < 3) {
            yield i++;
        }
    }
    let sG = simpleGenerator();
    console.log(sG)