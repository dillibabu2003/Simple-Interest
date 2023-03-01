import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import styles from '@/styles/Home.module.css';
import Input from '../Components/Input.jsx';
import LineChart from '../Components/LineChart.jsx';
import DoughnutChart from '@/Components/DoughnutChart.jsx';
import CollapsibleBox from '@/Components/CollapsibleBox.jsx';

import { FaChartPie, FaChartLine } from 'react-icons/fa';
import { MdOutlineShowChart } from 'react-icons/md';




export default function Home() {

  const [totalInvestment, settotalInvestment] = useState(100000);
  const [interestRate, setinterestRate] = useState(5);
  const [timePeriod, settimePeriod] = useState(5);
  
  let simpleInterest = 0;
  const [output, setOutput] = useState(25000);
  const [totalAmount, settotalAmount] = useState(125000);

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([5000, 10000, 15000, 20000, 25000]);


  function calculate() {
    simpleInterest = (totalInvestment*interestRate*timePeriod)/100;
    if (simpleInterest === Infinity || isNaN(simpleInterest)) {
      setOutput('-');
    }
    else {
      setOutput(simpleInterest);
    }
    settotalAmount(simpleInterest+totalInvestment);
    
    calculateGraphPoints();
  }

  function calculateGraphPoints() {
    let points = [];
    for (let i = 1; i <= timePeriod; i++) {
      points.push((totalInvestment*interestRate*i)/100);
    }
    setGraphPoints(points);
  }




  return (
    <>
      <Head>
        <title>simpleInterest calculator</title>
        <link rel="icon" href='./logo.png' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" as="font" data-href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap" />
        <meta name="description" content="simpleInterest Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <Image className={styles.image} src='/app-background.png' width={1080} height={500}></Image>
      <main >

        <div>
          <div className={styles.heading}><span className={styles.bluecolor}>Simple Interest</span> Calculator</div>
          <p className={styles.subheading}>Simple interest is a method of calculating interest over a deposit for a definite period of time.FundsIndia Simple Interest Calculator
          can be used to calculate your returns or the interest you owe</p>
        </div>


        <div className={styles.calculatorWrapper}>

          <div className={styles.calculator}>
            {/*wrapper*/}
            <div className={styles.inputWrapper}>
              <div className={styles.input_container}>
                {/*input boxes*/}
                <div>
                  {/*Total investment block*/}
                  <div>Total investment</div>
                  <Input
                    id='initialInvestment'
                    type='rupees'
                    min={1000}
                    max={10000000}
                    step={1000}
                    value={totalInvestment}
                    setValue={settotalInvestment}
                  />
                </div>

                <div>
                  {/*Interest rate block*/}
                  <div>Interest rate(p.a.)</div>
                  <Input
                    id='finalInvestment'
                    min={1}
                    max={20}
                    step={1}
                    value={interestRate}
                    setValue={setinterestRate}
                  />
                </div>

                <div>
                  {/*Time Period block*/}
                  <div>Time Period(Yrs)</div>
                  <Input
                    id='timePeriod'
                    min={1}
                    max={40}
                    value={timePeriod}
                    setValue={settimePeriod}
                  />
                </div>
              </div>

              <div className={styles.control_container}>
                {/*control boxes*/}
                <div className={styles.buttonBorder}>
                  <div className={`${styles.calculate} ${styles.button}`} onClick={calculate}>Calculate</div>
                </div>
              </div>
            </div>

            {/* vertical line */}
            <div className={styles.verticalline}></div>

            {/* Charts */}
            <div className={styles.chartContainer}>

              <div className={styles.toggle}>
                <button className={isLineChart ? styles.icon2 : styles.icon1} onClick={() => { setCheck(true) }}><MdOutlineShowChart /></button>
                <button className={isLineChart ? styles.icon1 : styles.icon2} onClick={() => { setCheck(false) }}><FaChartPie /></button>
              </div>

              <div className={styles.chart}>
              {isLineChart ? <LineChart points={graphPoints} />: <DoughnutChart simpleInterestAmount={output} totalInvestmentAmount={totalInvestment} dependency={output} />}
              </div>
              <div>
              {isLineChart ? <div id="simpleInterest_output">{(output === '-') ? 
                output :<> <div>For an investment of  <b>Rs.{totalInvestment}</b> at {interestRate}% simple interest for a period of <b>{timePeriod} years</b>,
                the simple interest earned will be <b>Rs.{output}</b></div></>}</div>: 
               
               <div id="simpleInterest_output">{(output === '-') ? output : 
                <div>
                  <div className={styles.doughnutOutput}>
                    <p>Principal</p><p><b>₹{totalInvestment}</b></p>
                  </div>
                  <div className={styles.doughnutOutput}>
                    <p>Total Interest</p><p><b>₹{output}</b></p>
                  </div>
                  <div className={styles.doughnutOutput}>
                    <p>Total Amount </p><p><b>₹{totalAmount}</b></p>
                  </div>
                  </div>
                    }</div>
                }
              </div>

            </div>
          </div>

          {/* Side Pannel */}
          <div className={styles.sidePannel}>
            <h3>How to use this calculator?</h3>
            <CollapsibleBox
              heading={'Simple Interest'}
              content={'Simple interest is a method of calculating the interest on a loan or deposit. It is calculated as the product of the principal amount, interest rate, and time period'}
            />
            <CollapsibleBox
              heading={'Uses of Simple Interest'}
              content={'Simple interest is more advantageous for borrowers than compound interest, as it keeps overall interest payments lower'}
            />
            <CollapsibleBox
              heading={'Calculating simple interest'}
              content={'To calculate simple interest, multiply the principal amount by the interest rate and the time'}
            />

          </div>

        </div>

        <div className={styles.faq}>

          <CollapsibleBox
            heading={'What is simpleInterest?'}
            content={'Simple interest is a method of calculating the interest on a loan or deposit.It is calculated as the product of the principal amount,interest rate,and time period.'}
          />

          <CollapsibleBox
            heading={'When can this calculator be used?'}
            content={'Calculating simple interest can be beneficial in a variety of scenarios, such as when borrowing money, investing money, saving money, or carrying a balance on a credit card. By calculating the amount of interest involved, you can make more informed financial decisions and better understand the actual cost or benefit of different financial transactions. FundsIndia SI Calculator can be used in all these situations for an accurate calculation.'}
          />

          <CollapsibleBox
            heading={'How can you use the Simple Interest Calculator?'}
            content={'FundsIndia Simple Interest Calculator is very easy to use. Just plugin the principal amount, interest rate, and tenure. The calculator will give you accurate results regardless of currency.'}
          />

          <CollapsibleBox
            heading={'How does the Simple Interest calculator work?'}
            content={
            <>
            It uses the following logic<br></br><br></br> <b>I = P * R * T <br></br>where: <br></br>I = Interest<br></br> P = Principal (the initial amount) <br></br>R = Interest Rate (as a decimal) <br></br>T = Time Period (in years)</b></>}
          />

          <CollapsibleBox
            heading={'Why should I use FundsIndia Simple Interest Calculator?'}
            content={'FundsIndia SI Calculator is an intuitive and easy to use application that can save the time of manually calculating simple interest. It can visualise the interest with principal amount in an easily understandable manner.'}
          />
        </div>

        <div className={styles.relatedCalculators}>
          <h4>Related Calculators</h4>
        </div>
      </main>
    </>
  )
}
