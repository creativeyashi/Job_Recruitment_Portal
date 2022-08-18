import { BaseHands, BaseEyes, BaseDependencies } from './robots/BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitWikipedia(){
        this.accessUrl('/');
    }
}
export class Dependency extends BaseDependencies {
   
    visitWikipedia(){
        this.accessUrl('/findJobs');
    }
}

export class SavedJobs extends BaseDependencies {
   
    visitWikipedia(){
        this.accessUrl('/savedJobCard');
    }
}

export class RobotEyes extends BaseEyes{
    seesMainPage(){
        this.seesDomVisible("Main page")
    }  
}

export class RobotHands extends BaseHands{

    searchtesting(){
        this.typeTextonDom("name", "search", "Automation Testing")
            .clickOnDomElement("[class='sprite svg-search-icon']")
    }
}