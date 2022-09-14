console.log('welcome aman manwani');

class Employee{
    constructor(name,division,experience){
        this.name=name;
        this.experience=experience;
        this.division=division;
    }

    slogan(){
        return `i am ${this.name} and this company is the best`;
    }

    joining_yar(){
        return 2022-this.experience;
    }

    static add(a,b){
        return a+b;
    }
}

//to inherit class from another class    use extends 
class Programmer extends Employee{
    constructor(name,division,experience,language){
        super(name,division,experience);
        this.language=language;
    }

    favorite_language(){
        if(this.language == 'python'){
            return 'python'
        }
        else{
            return 'javascript';
        }
    }

    static multiply(a,b){
        return a*b;
    }
}


harry=new Employee("harry","div",7);

