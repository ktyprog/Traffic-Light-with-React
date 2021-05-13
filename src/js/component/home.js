import React from "react";

import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";


//create your first component
export function Home() {
	return (
        <div>
            <Navbar/>
		     <div className="container mt-5">
            <Jumbotron 
            title="Hello World" 
            description "It uses utility classes for typography and spacing to space content out within the larger container."
            buttonLabel= "Learn more"
            buttonUrl={"www.dot.com"}  }
            />
            
			<div className="row mt-3">
                <div className="col-sm-3">
                <Cards/>
            <div/>
            <div className="row mt-3">
                <div className="col-sm-3">
                <Cards/>
            <div/>
            <div className="row mt-3">
                <div className="col-sm-3">
                <Cards/>
            <div/>
            <div className="row mt-3">
                <div className="col-sm-3">
                <Cards/>
            <div/>
            <div className="row mt-3">
                <div className="col-sm-3">
                <Cards/>
            <div/>
        </div>
    </div>

	);
}
