const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
  ];
  
  // Function to check if a row has a negative number
  const hasNegative = (row: number[]): boolean => {
    return row.some(num => num < 0);
  };
  
  // Function to log rows with negative numbers concurrently
  const logRowsWithNegatives = async () => {
    const promises = array2D_3.map(async (row, index) => {
      if (await hasNegative(row)) {
        console.log(`Row ${index} contains a negative number:`, row);
      }
    });
  
    await Promise.all(promises); // Wait for all promises to complete concurrently
  };
  
  logRowsWithNegatives();