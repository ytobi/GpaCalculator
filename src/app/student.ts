
export class Student
{
    private level: number;
    private department = '';
    constructor( private name: string, department: string, private courses: Course[] )
    {
      this.level = 100;
      this.department = department;
    }
    public setName( _name )
    { this.name = _name; }
    public addCourses( course: Course )
    {
         this.courses.push( course );
    }
    public setLevel( level )
    { this.level = level; }
    public getName(): string
    { return this.name; }
    public getCourses(): Course[]
    { return this.courses; }
    public getLevel(): number
    { return this.level; }
    public getDepartment()
    { return this.department; }
    public calculateGpa(): string
    {
        let course: Course;
        let totalGp = 0;
        let totalCv = 0;
        // tslint:disable-next-line:whitespace
        for( course of this.getCourses() )
        {
            totalGp = totalGp + course.calculateGp();
            totalCv = totalCv + course.getCv();
        }
        return (totalGp / totalCv).toPrecision(2);
    }
}

export class Course
{
    private name: string;
    private code: string;
    private mark: number;
    private cv: number;
    private ca: number;
    private gradeLetter = '';

    constructor( name: string, code: string, mark: number, cv: number )
    {
        this.name = name;
        this.code = code;
        this.mark = mark;
        this.cv = cv;
        this.ca = 0;
    }

    public getName(): string
    { return this.name; }
    public getCode(): string
    { return this.code; }
    public getMark(): number
    { return this.mark; }
    public getCv(): number
    { return this.cv; }
    public getCa(): number
    { return this.ca; }
    public getGradeLetter(): string
    { return this.gradeLetter; }
    public calculateGp()
    {
        const totalMark: number  = Number(this.mark) + Number(this.ca);
        if( totalMark >= 80 )
        {
            this.gradeLetter = 'A';
            return 4 * this.cv;
        }
        else if( totalMark >= 70 )
        {
            this.gradeLetter = 'B+';
            return 3.5 * this.cv;
        }
        else if( totalMark >= 60 )
        {
            this.gradeLetter = 'B';
            return 3 * this.cv;
        }
        else if( totalMark >= 55 )
        {
            this.gradeLetter = 'C+';
            return 2.5 * this.cv;
        }
        else if( totalMark >= 50 )
        {
            this.gradeLetter = 'C';
            return 2 * this.cv;
        }
        else if( totalMark >= 45 )
        {
            this.gradeLetter = 'D+';
            return 1.5 * this.cv;
        }
        else if( totalMark >= 40 )
        {
            this.gradeLetter = 'D';
            return 1 * this.cv;
        }
        else if( totalMark < 40 )
        {
            this.gradeLetter = 'F';
            return 0 * this.cv;
        }
    }

    public setName( value )
    { this.name = value; }
    public setCode( value )
    { this.code = value; }
    public setMark( value )
    { this.mark = value; }
    public setCv( value )
    { this.mark = value; }
    public setCa( value )
    { this.mark = value; }
    public setGradeLetter( letter )
    { this.getGradeLetter = letter; }
}
