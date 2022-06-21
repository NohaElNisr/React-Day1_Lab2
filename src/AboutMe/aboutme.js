import { Component} from "react";
import jsPDF from "jspdf";
import logo from '../img/mangerdesk1.jpeg'
import footer from '../footer/footer'
import header from '../Header/header'
import portofolio from '../Portofolio/portofolio'
import skills from '../Skills/skills'

export default class About extends Component {
    pdfGenerate=()=>{

        var doc =new jsPDF('landscape','px','a4','false');
        doc.addImage(logo,'PNG',65,20,400,400)
        doc.save('mangerdesk1.pdf')
    }
render(){
    return(
    <>
    <hr></hr>
    <h1 className="container my-3">About Me</h1>
    <p className=" my-3">
    One of the modern communication sites and social mingling through the virtual medium of the internet is social media. Technology has reduced the distance between people; even if it across the two corners of the planet, individuals can interact still through social media. Social media has now become an important aspect of the human lifestyle.
    One of the modern communication sites and social mingling through the virtual medium of the internet is social media. Technology has reduced the distance between people; even if it across the two corners of the planet, individuals can interact still through social media. Social media has now become an important aspect of the human lifestyle.
    One of the modern communication sites and social mingling through the virtual medium of the internet is social media. Technology has reduced the distance between people; even if it across the two corners of the planet, individuals can interact still through social media. Social media has now become an important aspect of the human lifestyle.
    One of the modern communication sites and social mingling through the virtual medium of the internet is social media. Technology has reduced the distance between people; even if it across the two corners of the planet, individuals can interact still through social media. Social media has now become an important aspect of the human lifestyle.
    One of the modern communication sites and social mingling through the virtual medium of the internet is social media. Technology has reduced the distance between people; even if it across the two corners of the planet, individuals can interact still through social media. Social media has now become an important aspect of the human lifestyle.
    </p>
    <div style={{textAlign:'center'}}>
    <button className="btn btn-primary" onClick={this.pdfGenerate} >Download PDF</button>
    </div>
    <hr></hr>
    </>
);


}
}