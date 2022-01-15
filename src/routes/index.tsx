import React from "react";
import { Switch, useLocation } from "react-router-dom";
import Router from "./Router";

import { Layouts } from "@config/Layouts";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import Recover from "@pages/auth/Recover";
import Recovered from "@pages/auth/Recovered";
import Main from "@pages/main/Main";
import Deck from "@pages/main/Deck";
import About from "@pages/main/About";
import Help from "@pages/main/Help";
import MyAccount from "@pages/main/MyAccount";
import MyDecks from "@pages/main/MyDecks";
import AddDeck from "@pages/main/AddDeck";
import EditDeck from "@pages/main/EditDeck";
import Session from "@pages/main/Session";
import SearchDeck from "@pages/main/SearchDeck";
import PrivacyPolicy from "@pages/main/PrivacyPolicy";
import SessionCompleted from "@pages/main/SessionCompleted";
import Home from "@pages/public/Home";

import { PATH_FORGOT_PASSWORD, PATH_SESSION, PATH_SIGN_IN, PATH_SIGN_UP, PATH_RECOVERED, PATH_SESSION_COMPLETED, PATH_PRIVACY_POLICY, PATH_ABOUT, PATH_HELP, PATH_MYACCOUNT, PATH_MYDECKS, PATH_ADDDECK, PATH_SEARCHDECK, PATH_EDITDECK, PATH_ADDCARD, PATH_EDITCARD, PATH_DECK, PATH_REVIEW, PATH_MAIN, PATH_HOME, PATH_ACCOUNT, PATH_PROFILE, PATH_HISTORY, PATH_GALLERY } from "@services/Navigation";
import AddCard from "@pages/main/AddCard";
import EditCard from "@pages/main/EditCard";
import Review from "@pages/main/Review";
import Account from "@pages/main/Account";
import Profile from "@pages/main/Profile";
import History from "@pages/main/History";
import Gallery from "@pages/main/Gallery";

export default function Routes() {
    const location = useLocation();

    return (
        <Switch location={location}>         
            <Router path={PATH_MAIN} exact component={Main} layout={Layouts.Main} />    
            <Router path={PATH_ABOUT} component={About} layout={Layouts.Main}/>  
            <Router path={PATH_HELP} component={Help} layout={Layouts.Main}/>  
            <Router path={PATH_MYACCOUNT} component={MyAccount} layout={Layouts.Main}/>   
            <Router path={PATH_DECK} component={Deck} layout={Layouts.Main}/>  
            <Router path={PATH_MYDECKS} component={MyDecks} layout={Layouts.Main}/>  
            <Router path={PATH_ADDDECK} component={AddDeck} layout={Layouts.Main}/>  
            <Router path={PATH_EDITDECK} component={EditDeck} layout={Layouts.Main}/>              
            <Router path={PATH_SEARCHDECK} component={SearchDeck} layout={Layouts.Main}/>  
            <Router path={PATH_ADDCARD} component={AddCard} layout={Layouts.Main}/>  
            <Router path={PATH_EDITCARD} component={EditCard} layout={Layouts.Main}/>  
            <Router path={PATH_PRIVACY_POLICY} component={PrivacyPolicy} layout={Layouts.Main}/>  
            <Router path={PATH_SESSION} component={Session} layout={Layouts.Main}/>
            <Router path={PATH_ACCOUNT} component={Account} layout={Layouts.Main}/>
            <Router path={PATH_PROFILE} component={Profile} layout={Layouts.Main}/>
            <Router path={PATH_HISTORY} component={History} layout={Layouts.Main}/>
            <Router path={PATH_GALLERY} component={Gallery} layout={Layouts.Main}/>
                        
            <Router path={PATH_REVIEW} component={Review} layout={Layouts.Full}/>              
            <Router path={PATH_SESSION_COMPLETED} component={SessionCompleted} layout={Layouts.Full}/>                          
            
            <Router path={PATH_SIGN_IN} component={SignIn} layout={Layouts.Auth}/>    
            <Router path={PATH_FORGOT_PASSWORD} component={Recover} layout={Layouts.Auth}/>
            <Router path={PATH_SIGN_UP} component={SignUp} layout={Layouts.Auth}/>   
            <Router path={PATH_RECOVERED} component={Recovered} layout={Layouts.Auth}/>

            <Router path={PATH_HOME} exact component={Home} layout={Layouts.Public} />   
        </Switch>
    );
}