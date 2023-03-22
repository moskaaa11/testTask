let d1 = new Date("02/24/2022")
let d2 = new Date("03/21/2023")

const daysTo = (day1, day2) => {

let Difference_In_Time = day2.getTime() - day1.getTime();

let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

console.log(Difference_In_Days)
}

daysTo(d1 , d2)

