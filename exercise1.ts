// 1. Area of rectangle
    //Area of Rectangle formula is : Area = width * length

    let Length: number = 5;
    let Width: number = 3;
    const area: number = Length * Width;
console.log(area);


// 2. Perimeter of rectangle.
    //Perimeter of rectangle formula is : P = 2 * (width + length)

    const perimeter: number = 2* (Length + Width);
console.log(perimeter);

// 3. Find diameter, circumference and area of a circle.

    const r: number = 5;
    const pi: number = Math.PI
    //Output : diameter = 10, circumference = 31.4159, area = 78.539

// Diameter
// formula of Diameter is: D = 2 * r
    const Diameter: number = 2 * r;
console.log(Diameter);

// Circumference
// formula of Circumference is: C = 2 * pi * r

    const Circumference: number = 2 * pi * r;
console.log(Circumference);

// Area
// formula of Area is: A = pi * r2
    const Area: number = pi * Math.pow(r , 2);
console.log(Area)

// 4. Find angles of triangle if two angles are given.
    // Formula: 180 - (angle1 + angle2)

    let anlge1: number = 80;
    let angle2: number = 65;
    const angle3: number = 180 - (anlge1 - angle2);
console.log(angle3);


/* 5. Write a code to convert days to years, months and days 
    (Notes: 1 year : 365 days, 1 month : 30 days).
    Example : 400 days → 1 year, 1 month, 5 days
    Example: 366 days → 1 year, 0 month, 1 day
*/

const exdays1: number = 400;
const exdays2: number = 366;
const oneYear: number = 365;
const oneMonth: number = 30;

const years: number = Math.floor(exdays1 / oneYear);
const months: number = Math.floor((exdays1 % oneYear) / oneMonth);
const days: number = Math.floor((exdays1 % oneYear) % oneMonth);
console.log(`${exdays1} days = ${years} year, ${months} month, ${days} day`);

const years2: number = Math.floor(exdays2 / oneYear);
const months2: number = Math.floor((exdays2 % oneYear) / oneMonth);
const days2: number = Math.floor((years2 % oneYear) % oneMonth);
console.log(`${exdays2} days = ${years2} year, ${months2} month, ${days2} day`)

/* 6. Write a code to get difference between dates in days.
    Example : date1 = 2022-01-20, date2 = 2022-01-22
    Output : 2 
*/

const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-01-22");
const difBetween = (date2.getTime() - date1.getTime());
console.log(difBetween);

//converting milisecond to day
const difBetweenDays = difBetween / (1000 * 3600 * 24);
console.log(difBetweenDays);