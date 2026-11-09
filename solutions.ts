const multiplyValue=(value :number,multiplier?:number) : number=>{
    if(multiplier !==undefined){
        return value*multiplier
    }else{
        return value*2
    }
}


const processInput =(value:string|number|boolean) : string| number=>{
    if(typeof value ==="string"){
        return value.trim().toLowerCase();
    }else if(typeof value==="number"){
        return value*10;
    }else{
        if(value)
        {
            return "Active";
        }else{
            return "Inactive";
        }
    }
}


const formatCoordinate=(Location:readonly [number, number, string]) : string=>{
    return `Location: ${Location[2]} (${Location[0]}, ${Location[1]})`
} 


const concatenateArrays =<T> (...arrays:T[][]): T[]=>{
    let combinedArray: T[]=[]
    
    for(let x of arrays){
        combinedArray=combinedArray.concat(x);
    }

    return combinedArray;
}


interface Course{
    title: string;
    students :number;
    isPublished :boolean;
}

const getPopularCourses =(courses:Course[],minStudents:number) : Course[]=>{
    let courseArray:Course[]=[]

    for(let course of courses)
    {
        if(course.students>=minStudents && course.isPublished==true)
        {
            courseArray.push(course)
        }
    }

    return courseArray;
}



const pluckValues =<T ,k extends keyof T>(item: T[],key:k): T[k][]=>{
    let arrays : T[k][]=[]

    for(let x of item){
        arrays.push(x[key])
    }

    return arrays;
}



class Employee {
    constructor(
        protected name: string,
        private baseSalary : number
    ){}

    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    constructor(
        name: string,
        baseSalary : number,
        private department : string
    ){
        super(name,baseSalary)
    }


    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}



const validateAgeAsync=(age: number): Promise<string>=> {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } 
        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}
