class repository {
    constructor(name,author,languaje,Nofcommits,stars,forks,issues_open,issues_close){
        this.name=name
        this.author=author
        this.languaje=languaje
        this.Nofcommits=Nofcommits
        this.stars=stars
        this.forks=forks
        this.issues_open=issues_open
        this.issues_close=issues_close
    }
     get getTotalIssues(){
        return this.issues_open + this.issues_close
      }
     get getGeneralInfos(){
        return `This repository ${this.name} was created by ${this.author}`
      }
}

const repositorio = new repository("LaunchX","MoisesMenoozaS01","JavaScript",100,199,299,10,10)
console.log(repositorio)
console.log(repositorio.getGeneralInfos)
console.log(repositorio.getTotalIssues)