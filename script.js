function mincost(arr)
{ 
/if (arr.length < 2) {
        return 0; // Minimum cost is 0 if there is only one rope or no ropes
    }

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Connect ropes until only one rope is left
    while (arr.length > 1) {
        // Get the two smallest ropes
        const first = arr.shift();
        const second = arr.shift();

        // Calculate the cost and add it to the total
        const cost = first + second;
        totalCost += cost;

        // Insert the connected rope back into the array
        arr.push(cost);

        // Re-sort the array to maintain order
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports=mincost;
