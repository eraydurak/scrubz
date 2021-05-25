import React from 'react'
import './../styles/MainPage.scss'
import Modal from './Modal'
import photo from './../styles/Group3.png'
import DownArrow from './../svgFolder/DownArrow'

const MainPage = () => {
  return (
    <div className="main-page">
      <nav>
        <ul>
          <li>
            <a className="active" href="#">Scrum</a>
          </li>
          <li>
            <a href="#">Impediments</a>
          </li>
        </ul>
        <div className="img-div" >
          <img style={{ borderRadius: "100%" }} src={photo} alt="asdasd" />
          <DownArrow />
        </div>
      </nav>
      <main>
        <svg id="bg-shape" xmlns="http://www.w3.org/2000/svg" width="1365" height="865" viewBox="0 0 1365 865">
          <g id="bg-shape-2" data-name="bg-shape" transform="translate(0 175.497) rotate(-8)">
            <path id="Path_8" data-name="Path 8" d="M136.01,57.091C183.192,14.667,319.518-16.984,396.717,10S675.682,153.17,793.034,182.338,1228.859,373.009,1231.9,436.562s-65.336,238.431-123.991,280.408S917.03,776.976,862.885,791.5s-595.253,22.364-736.6-53.419Q-15.056,662.3,1.8,554.188C91.163,223.3,88.829,99.515,136.01,57.091Z" transform="translate(0.08 0.51)" fill="rgba(233,233,243,0.5)" />
            <path id="Path_8-2" data-name="Path 8" d="M7.64,103.09C29.4,36.078,162.038-8.133,245.034,1.255s314.09,78.056,436.579,80.881,480.458,90.055,503.122,150.8,10.837,244.491-32.834,297.724S986.009,629.886,938.177,655.619s-568.455,150.23-728.6,107.548Q49.428,720.486,32.167,612.388C15.87,273.375-14.121,170.1,7.64,103.09Z" transform="translate(64.927 62.492)" fill="rgba(233,233,243,0.5)" />
            <path id="Path_8-3" data-name="Path 8" d="M30.039,88.635C66.272,10.853,195.408-10.727,277.077,4.627S581.7,105.009,703.385,116.7s469.045,124.38,485.271,186.412-14.741,243.827-63.79,293.576S949.3,683.29,898.986,705.4,317.217,813.5,162.2,759.448,1.277,596.692,1.277,596.692-6.193,166.416,30.039,88.635Z" transform="translate(33.66 16.508)" fill="rgba(233,233,243,0.5)" />
          </g>
        </svg>
      </main>
      <Modal />
    </div>
  )
}

export default MainPage
