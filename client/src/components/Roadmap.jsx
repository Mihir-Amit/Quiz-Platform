import React, { useEffect } from 'react';
import flowchart from 'flowchart.js';

const Roadmap = ({ roadmapData }) => {
  useEffect(() => {
    const generateRoadmapCode = (data) => {
      let code = 'st=>start: Start\n';

      data.forEach(({ Skill, Roadmap, Link }) => {
        code += `${Skill}=>operation: ${Roadmap}\n`;
        code += `${Skill}(link)->${Link}\n`;
      });

      code += 'e=>end: End\n';

      return code;
    };

    const roadmapCode = generateRoadmapCode(roadmapData);

    const diagram = flowchart.parse(roadmapCode);
    const diagramContainer = document.getElementById('roadmap-container');
    // diagramContainer.innerHTML = '';
    // diagram.drawSVG('roadmap-container');
  }, [roadmapData]);

  return (
    <div>
      <style>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #000000;
          }
          
          .timeline {
            position: relative;
            width: 100%;
            max-width: 1140px;
            margin: 0 auto;
            padding: 15px 0;
            
          }
          
          .timeline::after {
            content: '';
            position: absolute;
            width: 2px;
            background: #000000;
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -1px;
            
          }
          
          .container {
            padding: 15px 30px;
            position: relative;
            background: inherit;
            width: 50%;
          }
          
          .container.left {
            left: 0;
          }
          
          .container.right {
            left: 50%;
          }
          
          .container::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: calc(50% - 8px);
            right: -8px;
            background: #000000;
            border: 2px solid #000000;
            border-radius: 16px;
            z-index: 1;
          }
          
          .container.right::after {
            left: -8px;
          }
          
          .container::before {
            content: '';
            position: absolute;
            width: 50px;
            height: 2px;
            top: calc(50% - 1px);
            right: 8px;
            background: #000000;
            z-index: 1;
          }
          
          .container.right::before {
            left: 8px;
          }
          
          .container .date {
            position: absolute;
            display: inline-block;
            top: calc(50% - 8px);
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: #000000;
            text-transform: uppercase;
            letter-spacing: 1px;
            z-index: 1;
          }
          
          .container.left .date {
            right: -75px;
          }
          
          .container.right .date {
            left: -75px;
          }
          
          .container .icon {
            position: absolute;
            display: inline-block;
            width: 40px;
            height: 40px;
            padding: 9px 0;
            top: calc(50% - 20px);
            background: #9333ea;
            border: 2px solid #000000;
            border-radius: 40px;
            text-align: center;
            font-size: 18px;
            color: #000000;
            z-index: 1;
          }
          
          .container.left .icon {
            right: 56px;
          }
          
          .container.right .icon {
            left: 56px;
          }
          
          .container .content {
            padding: 30px 90px 30px 30px;
            background: #9333ea;
            position: relative;
            border-radius: 0 500px 500px 0;
            background: linear-gradient(to right, #c355f6 0%, #c355f6 100%)
          }
          
          .container.right .content {
            padding: 30px 30px 30px 90px;
            border-radius: 500px 0 0 500px;
          }
          
          .container .content h2 {
            margin: 0 0 10px 0;
            font-size: 18px;
            font-weight: normal;
            color: #000000;
          }
          
          .container .content p {
            margin: 0;
            font-size: 16px;
            line-height: 22px;
            color: #000000;
          }
          
          @media (max-width: 767.98px) {
            .timeline::after {
              left: 90px;
            }
          
            .container {
              width: 100%;
              padding-left: 120px;
              padding-right: 30px;
            }
          
            .container.right {
              left: 0%;
            }
          
            .container.left::after, 
            .container.right::after {
              left: 82px;
            }
          
            .container.left::before,
            .container.right::before {
              left: 100px;
              border-color: transparent #000000 transparent transparent;
            }
          
            .container.left .date,
            .container.right .date {
              right: auto;
              left: 15px;
            }
          
            .container.left .icon,
            .container.right .icon {
              right: auto;
              left: 146px;
            }
          
            .container.left .content,
            .container.right .content {
              padding: 30px 30px 30px 90px;
              border-radius: 500px 0 0 500px;
            }
          }
        `}
      </style>
      
      <div id="roadmap-container"></div>
      <div class="timeline">
        <div class="container left">
          <div class="date">15 Dec</div>
          <i class="icon fa fa-home"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date">22 Oct</div>
          <i class="icon fa fa-gift"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="date">10 Jul</div>
          <i class="icon fa fa-user"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date">18 May</div>
          <i class="icon fa fa-running"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="date">10 Feb</div>
          <i class="icon fa fa-cog"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date">01 Jan</div>
          <i class="icon fa fa-certificate"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
