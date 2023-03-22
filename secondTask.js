let arrOfSales = [
    {amount: 10000, quantity: 10},
    {amount: 11234, quantity: 4},
    {amount: 154647, quantity: 2},
    {amount: 14, quantity: 7},
    {amount: 135637, quantity: 3},
    {amount: 112341, quantity: 17},
    {amount: 112341234, quantity: 11},
  ];
  
  let newArrOfSales = []
  
  arrOfSales.forEach(el=>{
    let total = +(el.amount) * +(el.quantity)
    newArrOfSales.push({
      amount: el.amount,
      quantity: el.quantity,
      total: total
    })
  })
  
  let sortedArrOfSales = newArrOfSales.sort((a, b) => a.total - b.total)
  
  console.log(sortedArrOfSales)