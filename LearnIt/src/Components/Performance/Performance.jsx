import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Chart from "chart.js/auto";
import "./Performance.css";
import axios from "axios";
import { getstudentdata } from "../../service/quizapi";
const Performance = () => {

  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);
  const [Pmarks, setPmarks] = useState(0);
  const [subject, setsubject] = useState({});
  const [performance, setperformance] = useState("");
  const [cMarks, setcMarks] = useState([]);
  const [cMark, setcMark] = useState(0);
  const [marks, setmarks] = useState(0);
  const navigate = useNavigate();
  const navigatetohome = () => {

    navigate('/welcome')
  }
  const navigatetotest = () => {

    navigate('/DyTestScreen')
  }
  const loaddata = () => {
    setmarks(0);
  }
  useEffect(() => {
    const email = localStorage.getItem("email");
    let averageMarks = getstudentdata(email);
    averageMarks.then((data) => {
      console.log(data);
      setPmarks(data[0]);
      setsubject(data[1]);
      if (localStorage.getItem("Science") >= 0) {
        let m = parseInt(localStorage.getItem("Science"));
        setcMark(m);
        setcMarks({ "Science": m })
      }
      else {
        if (localStorage.getItem("Maths") >= 0) {
          let m = parseInt(localStorage.getItem("Maths"));
          setcMark(m + cMark)
          setcMarks({ "Maths": cMark });
        }
        else {
          if (localStorage.getItem("Social") >= 0) {
            let m = parseInt(localStorage.getItem("Social"));
            setcMark(m + cMark)
            setcMarks({ "Social": cMark });
          }
        }
      }
    })



    console.log(cMark);
    const dynamicMarks = 45;

    const result =
      0.4 * parseInt(Pmarks) + 0.25 * dynamicMarks + 0.35 * cMark;
    setmarks(result);
    if (result < 50) {
      setperformance("Slow Learner");
    } else if (result >= 50 && result < 70) {
      setperformance("Average Learner");
    } else {
      setperformance("Advance Learner");
    }

    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }

    // Data for the first chart
    const data1 = {
      labels: ["Science", "Maths", "English"],
      datasets: [
        {
          data: [subject["science"], subject["maths"], subject["english"]],
          backgroundColor: ["red", "blue", "green"],
        },
      ],
    };

    // Data for the second chart
    const data2 = {
      labels: ["Science", "Maths", "Social"],
      datasets: [
        {
          data: [parseInt(localStorage.getItem("Science")), parseInt(localStorage.getItem("Maths")), parseInt(localStorage.getItem("Social"))],
          backgroundColor: ["orange", "purple", "pink"],
        },
      ],
    };

    // Chart 1
    const ctx1 = chartRef1.current.getContext("2d");
    chartInstance1.current = new Chart(ctx1, {
      type: "pie",
      data: data1,
    });

    // Chart 2
    const ctx2 = chartRef2.current.getContext("2d");
    chartInstance2.current = new Chart(ctx2, {
      type: "bar",
      data: data2,
    });
  }, [marks]);

  return (
    <div className="Performance">
      <h2>Test Performance</h2>
      <button onClick={() => { loaddata() }} className="btn btn-primary">Load Data</button>
      <div className="chart-container">

        <h1>Past Test Performance</h1>
        <canvas
          style={{ border: "2px solid black", margin: "10px" }}
          ref={chartRef1}
        >
        </canvas>
        <h1>Current Test Performance</h1>
        <canvas style={{ border: "2px solid black" }} ref={chartRef2}></canvas>
      </div>
      <div>
        <h1>student categorization</h1>
        <div>{parseInt(marks)}</div>
        <div>Here is your Category</div>
        <div>{performance}</div>

      </div>
      <br />
      <div className="foot">

        <div onClick={() => { navigatetotest() }} className="btn btn-primary">Give Your Next Test</div>
        <div onClick={() => { navigatetohome() }} className="btn btn-primary">Home Page</div>
      </div>
    </div>
  );
};

export default Performance;
