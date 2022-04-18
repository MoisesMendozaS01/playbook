class pullrequest{
    constructor(title,barnchName,dateCreated,status,repositoryNameAssociated,autor){
    this.title=title
    this.barnchName=barnchName
    this.dateCreated=dateCreated
    this.status=status
    this.repositoryNameAssociated=repositoryNameAssociated
    this.autor=autor
    }
    get getStatus(){
        console.log("Estado del Pull Request "+this.title+" es "+this.status)
    }
    get getTitleAndAutor(){
        console.log("EL nombre del Pull Request es "+this.title+" y su autor es "+this.autor)
    }
}
const pull=new pullrequest('"lunchX aporte"',"main","13 abril","CI build Succeeded","Playbook","MoisesMendozaS01",)
console.log(pull)
console.log(pull.getTitleAndAutor)
console.log(pull.getStatus)