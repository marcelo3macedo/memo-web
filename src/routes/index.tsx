import { Layouts } from "@config/Layouts";
import Activate from "@pages/auth/Activate";
import Recover from "@pages/auth/Recover";
import Recovered from "@pages/auth/Recovered";
import Reset from "@pages/auth/Reset";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import Validation from "@pages/auth/Validation";
import About from "@pages/main/About";
import Account from "@pages/main/Account";
import CreateSession from "@pages/main/CreateSession";
import Deck from "@pages/main/Deck";
import EditSession from "@pages/main/EditSession";
import Featured from "@pages/main/Featured";
import Gallery from "@pages/main/Gallery";
import Help from "@pages/main/Help";
import History from "@pages/main/History";
import Integration from "@pages/main/Integration";
import IntegrationTelegram from "@pages/main/IntegrationTelegram";
import Main from "@pages/main/Main";
import MyAccount from "@pages/main/MyAccount";
import PlanType from "@pages/main/PlanType";
import PrivacyPolicy from "@pages/main/PrivacyPolicy";
import Profile from "@pages/main/Profile";
import Review from "@pages/main/Review";
import Session from "@pages/main/Session";
import SessionCompleted from "@pages/main/SessionCompleted";
import SessionPublic from "@pages/main/SessionPublic";
import Sessions from "@pages/main/Sessions";
import TermsConditions from "@pages/main/TermsConditions";
import Transaction from "@pages/main/Transaction";
import Tutorial from "@pages/main/Tutorial";
import TutorialCards from "@pages/main/TutorialCards";
import GalleryDeck from "@pages/public/GalleryDeck";
import Plans from "@pages/public/Plans";
import { PATH_ABOUT, PATH_ACCOUNT, PATH_ACTIVE, PATH_CREATESESSION, PATH_DECK, PATH_EDITSESSION, PATH_EMAIL_VALIDATION, PATH_FEATURED, PATH_FORGOT_PASSWORD, PATH_GALLERY, PATH_GALLERYDECK, PATH_HELP, PATH_HISTORY, PATH_HOME, PATH_INTEGRATION, PATH_INTEGRATION_TELEGRAM, PATH_MAIN, PATH_MYACCOUNT, PATH_PASSWORD_RESET, PATH_PLANS, PATH_PRIVACY_POLICY, PATH_PROFILE, PATH_RECOVERED, PATH_REVIEW, PATH_SESSION, PATH_SESSIONPUBLIC, PATH_SESSIONS, PATH_SESSION_COMPLETED, PATH_SIGN_IN, PATH_SIGN_UP, PATH_TERMS_CONDITIONS, PATH_TRANSACTIONS, PATH_TUTORIAL, PATH_TUTORIAL_CARDS } from "@services/Navigation";
import { RootState } from "@store/modules/rootReducer";
import { useSelector } from "react-redux";
import { Switch, useLocation } from "react-router-dom";
import Router from "./Router";

export default function Routes() {
    const location = useLocation();
    const { signed } = useSelector((state:RootState) => state.auth);
    const dynamicLayout = signed ? Layouts.Main : Layouts.Visitor;

    return (
        <Switch location={location}>
            <Router path={PATH_SESSIONPUBLIC + "/:path/:id"} component={SessionPublic} layout={Layouts.Main} isPublic={true}/>
            <Router path={PATH_MAIN} exact component={Main} layout={Layouts.Main} />
            <Router path={PATH_SESSIONS} component={Sessions} layout={Layouts.Main}/>     
            <Router path={PATH_GALLERY + "/:search"} component={Gallery} layout={Layouts.Main}/>
            <Router path={PATH_GALLERY} component={Gallery} layout={Layouts.Main}/>            
            <Router path={PATH_GALLERYDECK + "/:path"} component={GalleryDeck} layout={dynamicLayout} public />
            <Router path={PATH_ABOUT} component={About} layout={Layouts.Main}/>  
            <Router path={PATH_HELP} component={Help} layout={Layouts.Main}/>  
            <Router path={PATH_MYACCOUNT} component={MyAccount} layout={Layouts.Main}/>   
            <Router path={PATH_DECK + "/:path/:id"} component={Deck} layout={Layouts.Main}/>  
            <Router path={PATH_EDITSESSION} component={EditSession} layout={Layouts.Main}/>
            <Router path={PATH_PRIVACY_POLICY} component={PrivacyPolicy} layout={Layouts.Main}/>  
            <Router path={PATH_TERMS_CONDITIONS} component={TermsConditions} layout={Layouts.Main}/> 
            <Router path={PATH_SESSION + "/:id"} component={Session} layout={Layouts.Main}/>
            <Router path={PATH_FEATURED + "/:id"} component={Featured} layout={Layouts.Main}/>
            <Router path={PATH_ACCOUNT} component={Account} layout={Layouts.Main}/>
            <Router path={PATH_PROFILE} component={Profile} layout={Layouts.Main}/>
            <Router path={PATH_HISTORY} component={History} layout={Layouts.Main}/>
            <Router path={PATH_CREATESESSION} component={CreateSession} layout={Layouts.Main}/>  
            <Router path={PATH_INTEGRATION_TELEGRAM + "/:id"} component={IntegrationTelegram} layout={Layouts.Main}/>  
            <Router path={PATH_INTEGRATION_TELEGRAM} component={IntegrationTelegram} layout={Layouts.Main}/>
            <Router path={PATH_INTEGRATION} component={Integration} layout={Layouts.Main}/>  
            <Router path={PATH_TUTORIAL_CARDS} component={TutorialCards} layout={Layouts.Main}/>  
            <Router path={PATH_TUTORIAL} component={Tutorial} layout={Layouts.Main}/>            
            <Router path={PATH_PLANS + "/:type"} component={PlanType} layout={Layouts.Main} />
            <Router path={PATH_PLANS} component={Plans} layout={Layouts.Main} />
            <Router path={PATH_TRANSACTIONS} component={Transaction} layout={Layouts.Main} />
                                    
            <Router path={PATH_REVIEW} component={Review} layout={Layouts.Full}/>              
            <Router path={PATH_SESSION_COMPLETED} component={SessionCompleted} layout={Layouts.Review}/>
            
            
            <Router path={PATH_SIGN_IN} component={SignIn} layout={Layouts.Auth}/>    
            <Router path={PATH_FORGOT_PASSWORD} component={Recover} layout={Layouts.Auth}/>
            <Router path={PATH_SIGN_UP} component={SignUp} layout={Layouts.Auth}/>
            <Router path={PATH_RECOVERED} component={Recovered} layout={Layouts.Auth}/>
            <Router path={PATH_ACTIVE} component={Activate} layout={Layouts.Auth}/>
            <Router path={PATH_EMAIL_VALIDATION} component={Validation} layout={Layouts.Auth}/>
            <Router path={PATH_PASSWORD_RESET} component={Reset} layout={Layouts.Auth}/>

            <Router path={PATH_HOME} exact component={Main} layout={Layouts.Main}  />
        </Switch>
    );
}