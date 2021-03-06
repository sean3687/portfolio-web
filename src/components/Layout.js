import React from 'react';
import Routes from "../routes";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import './Layout.css';


function Layout(props) {
    return (
        <div>

            <div className ="wrapper">
                <div className="Side">
                    <Sidebar className = "Sidebar" history={props.history}/>
                
                </div>
                <div className="line"></div>
                
                <div className = "Page">
                    {props.children}
                </div>
                <div className = "Footer">
                    <Footer/>
                </div>
                
                
            </div>
        </div>
    );
}

export default Layout;
