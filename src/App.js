import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {useFormik} from "formik";

function App() {
  const [data, setdata] = useState()
  const [send, getsend] = useState()
  const sendData = async(e)=>{
    e.preventDefault()
    let rol = document.getElementById("rollno").value;
    let nam = document.getElementById("nam").value;
    let dbmarks = document.getElementById("dbmarks").value;
    let dbgrade = document.getElementById("dbgrade").value;
    let dbgpa = document.getElementById("dbgpa").value;

    let dblab = document.getElementById("labmarks").value;
    let dblabgrade = document.getElementById("dblabgrade").value;
    let dblabgpa = document.getElementById("dblabgpa").value;

    let ooadmarks = document.getElementById("ooadmarks").value;
    let ooadgrade = document.getElementById("ooadgrade").value;
    let ooadgpa = document.getElementById("ooadgpa").value;

    let toamarks = document.getElementById("toamarks").value;
    let toagrade = document.getElementById("toagrade").value;
    let toagpa = document.getElementById("toagpa").value;

    let osmarks = document.getElementById("osmarks").value;
    let osgrade = document.getElementById("osgrade").value;
    let osgpa = document.getElementById("osgpa").value;

    let flmarks = document.getElementById("flmarks").value;
    let flgrade = document.getElementById("flgrade").value;
    let flgpa = document.getElementById("flgpa").value;

    let pommarks = document.getElementById("pommarks").value;
    let pomgrade = document.getElementById("pomgrade").value;
    let pomgpa = document.getElementById("pomgpa").value;

    let datatosend = {"rollNo": rol, "nam": nam, "dbmarks": dbmarks, "dbgrade": dbgrade, "dbgpa": dbgpa, "dblab": dblab, "dblabgrade": dblabgrade, "dblabgpa": dblabgpa, "ooadmarks":ooadmarks, "ooadgrade": ooadgrade, "ooadgpa": ooadgpa, "toamarks": toamarks, "toagrade": toagrade, "toagpa": toagpa, "osmarks":osmarks, "osgrade":osgrade, "osgpa": osgpa, "flmarks":flmarks, "flgrade": flgrade, "flgpa": flgpa, "pommarks":pommarks, "pomgrade": pomgrade, "pomgpa": pomgpa}
    const da = await fetch("https://fifthsemres.herokuapp.com/get", {
      method: "POST",
      body: JSON.stringify({
        data: datatosend
      })
    })
    let res = await da.json()
    setdata(res)
  }
  const getData = async()=>{
    const fet = await fetch("https://fifthsemres.herokuapp.com/")
    let res = await fet.json()
  }
  useEffect(()=>{
    getData()
  },[]);
  return (
    <form method="post" onSubmit={sendData}>
      <div className="div1">
        <h1>GIGCCL</h1>
        <h2>5th Semester Result</h2>
        Enter College Roll No: <input type="number" id='rollno' name='rollno' placeholder="Enter Clg Roll_No" required /><br />
        Enter Your Name: <input type="text" id='nam' name='nam' placeholder="Enter Your Name" required/><br />
        </div>
        <div className="div">
            <h2>DBMS</h2>
            Enter DBMS Marks: <input type="number" id='dbmarks' name='dbmarks' placeholder="Enter DBMS Marks" required/><br />
            Enter DBMS Grade: <input type="text" id='dbgrade' name='dbgrade' placeholder="Enter DBMS Grade" required/><br />
            Enter GPA Of DBMS: <input type="number" id='dbgpa' name='dbgpa' placeholder="Enter GPA of DBMS" required/>
        </div>
          
        <div className="div">
            <h2>DBMS LAB</h2>
            Enter DBMS LAB Marks: <input type="number" id='labmarks' name='labmarks' placeholder="Enter DBMS LAB Marks" required/><br />
            Enter DBMS LAB Grade: <input type="text" id='dblabgrade' name='dblabgrade' placeholder="Enter DBMS LAB Grade" required/><br />
            Enter GPA Of DBMS LAB: <input type="number" id='dblabgpa' name='dblabgpa' placeholder="Enter GPA of DBMS LAB" required/>
        </div>
        
        <div className="div">
            <h2>OOAD</h2>
            Enter OOAD Marks: <input type="number" id='ooadmarks' name='ooadmarks' placeholder="Enter OOAD Marks" required/><br />
            Enter OOAD Grade: <input type="text" id='ooadgrade' name='ooadgrade' placeholder="Enter OOAD Grade" required/><br />
            Enter GPA Of OOAD: <input type="number" id='ooadgpa' name='ooadgpa' placeholder="Enter GPA of OOAD" required />
        </div>

        
        <div className="div">
         <h2>TOA</h2>
            Enter TOA Marks: <input type="number" id='toamarks' name='toamarks' placeholder="Enter TOA Marks" required/><br />
            Enter TOA Grade: <input type="text" id='toagrade' name='toagrade' placeholder="Enter TOA Grade" required/><br />
            Enter GPA Of TOA: <input type="number" id='toagpa' name='toagpa' placeholder="Enter GPA of TOA" required/>
        </div>
        
        <div className="div">
            <h2>OS</h2>
            Enter OS Marks: <input type="number" id='osmarks' name='osmarks' placeholder="Enter OS Marks" required/><br />
            Enter OS Grade: <input type="text" id='osgrade' name='osgrade' placeholder="Enter OS Grade" required/><br />
            Enter GPA Of OS: <input type="number" id='osgpa' name='osgpa' placeholder="Enter GPA of OS" required/>
        </div>
        
        <div className="div">
            <h2>FORMAL LOGIC</h2>
            Enter Formal Logic Marks: <input type="number" id='flmarks' name='flmarks' placeholder="Enter Formal Logic Marks" required/><br />
            Enter Formal Logic Grade: <input type="text" id='flgrade' name='flgrade' placeholder="Enter Formal Logic Grade" required/><br/>
            Enter GPA Of Formal Logic: <input type="number" id='flgpa' name='flgpa' placeholder="Enter GPA of Formal Logic" required/>
        </div>
        
        <div className="div">
            <h2>POM</h2>
            Enter POM Marks: <input type="number" id='pommarks' name='pommarks' placeholder="Enter POM Marks" required/><br/>
            Enter POM Grade: <input type="text" id='pomgrade' name='pomgrade' placeholder="Enter POM Grade" required/><br/>
            Enter GPA Of POM: <input type="number" id='pomgpa' name='pomgpa' placeholder="Enter GPA of POM" required/>
        </div>
        {console.log(data)}
        <div className="button">
        <input type="submit" value="SUBMIT"/>
        </div>
        </form>
  );
}

export default App;
