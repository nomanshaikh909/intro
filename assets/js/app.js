let  oldies=[40,30,40,56,76,54,65]

//find is teenager 

let isteenager=oldies.some((params)=>{
	return (params >=13 && params <=19)
});
console.log(isteenager)


//find if old agers

let oldage=oldies.some((params)=>{
	return params >18
});
console.log(oldage);

//find kids

let kids=oldies.some((params)=>{
	return params <12
});
console.log(kids)




var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

 //is thre any compan y who run atleast for 20 years

//  let result1=companies.some((params)=>{
// 	return (params.end -params.start >=20);
//  });
//  console.log(result1);

//refactor 

 let result1=companies.some(params=>params.end -params.start >=20);
 console.log(result1);


 //find any one comapany who runs for atleast 12 years and atars in 90s

 let result2=companies.some((params)=>{
	return (params.end -params.start >=12) &&(params.start >= 1990 && params.start < 1999)
 });
 console.log(result2);