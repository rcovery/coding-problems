function main(tableInfo) {
    let currentRow = 1
    let currentColumn = 1
    let sum = 0

    let done = false;

    while (!done) {
        sum += currentRow * currentColumn
    
        if (currentColumn < tableInfo.columns) {
            currentColumn++
        } else {
            if (currentRow < tableInfo.rows) {
                currentRow++
            } else {
                done = true;
            }
        }
    }
    
    console.log(`Total: ${sum}`)
}

main({ rows: 5, columns: 5})