class issue {
    constructor(tittle, repositoryNameAssociated,statuse, numberOfComments, labels, autor,dateCreated,lastUpdated){
        this.tittle=tittle
        this.repositoryNameAssociated=repositoryNameAssociated
        this.statuse=statuse
        this.numberOfComments=numberOfComments
        this.labels=labels
        this.autor=autor
        this.dateCreated=dateCreated
        this.lastUpdated=lastUpdated
    }
    get getTitleAndAuthor(){
        console.log("El titulo del issue es: "+this.tittle+". Autor: "+this.autor)
    }
    get getGeneralInfo(){
        return `This issue ${this.tittle} was created by ${this.autor} asociate to the repository ${this.repositoryNameAssociated}`
    }
}

const issues= new issue('"Issue ejercicios"', "PLAYBOOK_LUNCHX","activo",20,["question", "help wanted", "invalid","bug", "documentation"],"MoisesMEndozaS01","13 abril","14 abril")
console.log(issues)
console.log(issues.getTitleAndAuthor)
console.log(issues.getGeneralInfo)