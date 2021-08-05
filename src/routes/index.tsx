import React from "react";
import { Switch } from "react-router-dom";

import Router from "./Router";
import { Layouts } from "@config/Layouts";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import Recover from "@pages/auth/Recover";
import Recovered from "@pages/auth/Recovered";
import Home from "@pages/main/Home";
import Deck from "@pages/main/Deck";
import About from "@pages/main/About";
import Help from "@pages/main/Help";
import MyAccount from "@pages/main/MyAccount";
import MyDecks from "@pages/main/MyDecks";
import AddDeck from "@pages/main/AddDeck";
import EditDeck from "@pages/main/EditDeck";
import SearchDeck from "@pages/main/SearchDeck";

import { PATH_FORGOT_PASSWORD, PATH_SIGN_IN, PATH_SIGN_UP, PATH_RECOVERED, PATH_ABOUT, PATH_HELP, PATH_MYACCOUNT, PATH_MYDECKS, PATH_ADDDECK, PATH_SEARCHDECK, PATH_EDITDECK, PATH_ADDCARD, PATH_EDITCARD, PATH_DECK, PATH_REVIEW } from "@services/Navigation";
import AddCard from "@pages/main/AddCard";
import EditCard from "@pages/main/EditCard";
import Review from "@pages/main/Review";

export default function Routes() {
    return (
        <Switch>         
            <Router path="/" exact component={Home} layout={Layouts.Main} />    
            
            <Router path={PATH_SIGN_IN} component={SignIn} layout={Layouts.Auth}/>    
            <Router path={PATH_FORGOT_PASSWORD} component={Recover} layout={Layouts.Auth}/>
            <Router path={PATH_SIGN_UP} component={SignUp} layout={Layouts.Auth}/>   
            <Router path={PATH_RECOVERED} component={Recovered} layout={Layouts.Auth}/>    

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
            <Router path={PATH_REVIEW} component={Review} layout={Layouts.Full}/>  
            
            <Router path="/" exact component={Home} />     
        </Switch>
    );
}