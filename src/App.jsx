import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // คะแนนแต่ละระดับและจำนวนคนที่ได้รับการประเมิน
  const [scoreCounts, setScoreCounts] = useState([
    { score: 5, count: 0 },
    { score: 4, count: 0 },
    { score: 3, count: 0 },
    { score: 2, count: 0 },
    { score: 1, count: 0 }
  ]);

  // ฟังก์ชันสำหรับเปลี่ยนค่าจำนวนคนที่ได้แต่ละคะแนน
  const handleCountChange = (index, value) => {
    const newScoreCounts = [...scoreCounts];
    newScoreCounts[index].count = parseInt(value);
    setScoreCounts(newScoreCounts);
  };

  // คำนวณค่า x̄ (x-bar)
  const totalScore = scoreCounts.reduce((acc, curr) => acc + (curr.score * curr.count), 0);
  const totalPeople = scoreCounts.reduce((acc, curr) => acc + curr.count, 0);
  const xBar = totalScore / totalPeople;

  // คำนวณค่าส่วนเบี่ยงเบนมาตรฐาน (standard deviation)
  const sumSquaredDiff = scoreCounts.reduce((acc, curr) => acc + (Math.pow(curr.score - xBar, 2) * curr.count), 0);
  const standardDeviation = Math.sqrt(sumSquaredDiff / totalPeople);

  // ฟังก์ชันสำหรับคัดลอกค่า x̄ (x-bar)
  const copyResult = () => {
    navigator.clipboard.writeText(xBar.toFixed(2));
  };

  // ฟังก์ชันสำหรับคัดลอกค่า standard deviation
  const copyStandardDeviation = () => {
    navigator.clipboard.writeText(standardDeviation.toFixed(2));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li><a>Sidebar Item 1</a></li>
                  <li><a>Sidebar Item 2</a></li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className="mockup-code container">
        <pre data-prefix="1"><code>npm i daisyui</code></pre>
        {scoreCounts.map((item, index) => (
          <div key={index}>
            <label>{item.score} คะแนน: </label>
            {/* <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" /> */}
            <input placeholder="Type here" className="input input-bordered input-success w-full max-w-xs"
              type="number"
              value={item.count}
              onChange={(e) => handleCountChange(index, e.target.value)}
            />
          </div>
        ))}
        <div>
          <h1>ค่า x̄ (x-bar) คือ: {xBar.toFixed(2)}</h1>
          <button className="btn btn-accent" onClick={copyResult}>คัดลอก</button>
        </div>
        <div>
          <h1>ค่า Standard Deviation คือ: {standardDeviation.toFixed(2)}</h1>
          <button className="btn btn-accent" onClick={copyStandardDeviation}>คัดลอก</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p>Jame Nattasit CO.<br />สร้างเพื่อเพื่อนๆที่ต้องการหาค่าเหลี่ยและค่าเบี่ยงเบน 2020-2024 Com-sci</p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a href='https://www.facebook.com/Jame.Nattasit.4508'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer>
    </div>

  );
}
export default App;