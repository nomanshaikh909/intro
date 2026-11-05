//addition of elements using foreach

let age =[10,20,5,15,30];
let result=0;
age.forEach((params)=>{
	result +=params
});
console.log(result);


//addinton usind reduce()

let age2=[10,20,30,40,50];
let result2=age2.reduce((acc,cv)=>{
	 acc=acc+cv
	 return acc
});
console.log(result2)

//addition    

let num1=[212,323,12,42,12,46,12]
let result3=num1.reduce((acc,cv)=>{
	return acc=acc+cv
});
console.log(result3);


//addition 

let num2=[122,4,64,2335,778,43,7,,32]
let result4=num2.reduce((acc,cv)=>{
	return acc=acc+cv
});
console.log(result4);


//addition 

let num3=[1,3,5,6,75,4,3,2,1]
let result5=num3.reduce((acc,cv)=>{
	return acc=acc+cv
});
console.log(result5);


//addition 

let num4=[3,5,7,6,4,3,5,6,7,8,9,8,7,6,]
let result6=num4.reduce((acc,cv)=>{
	return acc=acc+cv
});
console.log(result6);

//=======================================================MULTIPLICATION =====================================

//using reduce
var num=[2,12,3,4,5,6,6]
var result0=num.reduce((acc,cv)=>{
	return acc=acc*cv
});
console.log(result0);

//reduce 

var num=[3,2,3,4,5,56,6]
var result0=num.reduce((acc,cv)=>{
	return acc=acc*cv
});
console.log(result0);

//================================================DOUBLE VALUE ========================================

var num =[10,20,30,40,50];
var result0=num.reduce((acc,cv)=>{
	acc.push(cv*2)
	return acc
},[]);
console.log(result0);

//double value 

var num=[5,4,3,2,1];
var result0=num.reduce((acc,cv)=>{
	acc.push(cv*2);
	return acc
},[])
console.log(result0);



//==========================================reduce ()-2===========================================

let array=[10,20,30,40,50];

//task :- [`the value is 10` , `the value is 20` ,...................]

let result01=array.reduce((acc,cv)=>{
	acc.push(`the value is ${cv},`)
	return acc
},[]);
console.log(result01)



// find sqare root --------------------------------------------------------------------------------

let result02=array.reduce((acc,cv)=>{
    acc.push(+Math.sqrt(cv).toFixed(2))
	return acc
},[]);
console.log(result02);


//add (.)at the end of the array -----------------------------------------------------------------

let result03=array.reduce((acc,cv,i)=>{
    if (i===array.length-1){
		acc +=`the value is ${cv}.`
	}else{
		acc +=`the value is ${cv},`
	}
	return acc;
},'');
console.log(result03);




//=======================================================================================================

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

//total age of the comapanies 

let result04=companies.reduce((acc,cv)=>{
    acc =acc+(cv.end - cv.start);
	return acc;
},0);
console.log(result04)


//["comapany one" , "company two"..................................]

let result05=companies.reduce((acc,cv)=>{
    acc.push(cv.name);
	return acc;
},[])

console.log(result05);


// [company name -22 ,company two -16...............................]


let result06=companies.reduce((acc,cv)=>{
	acc.push(`${cv.name} - ${cv.end - cv.start}`)
	return acc;
},[]);

console.log(result06)


//company name and lifespan 
//[company one (1981 - 20003)........................................]

let result07=companies.reduce((acc,cv)=>{
    acc.push(`${cv.name}(${cv.start} - ${cv.end} )`)
	return acc;
},[])

console.log(result07);


//==========================================MAKING OBJECT ================================================

//task :- [
//{company name:company ,life span:1981 - 2003},............................]


let result08=companies.reduce((acc,cv)=>{
    let obj={
		company_name:cv.name,
		life_span:`${cv.start} - ${cv.end}`
	}
	acc.push(obj)
	return acc;
},[]);

console.log(result08);


//DIRECT PUSH WITHOUT CREATING OBJECT -----------------------------------------------------------------

let result09=companies.reduce((acc,cv)=>{
    acc.push({
		company_name:cv.name,
		life_span:`${cv.start} - ${cv.end}`
	})
	return acc;
},[]);

console.log(result09)





















