import React from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import screenImg1 from "@/public/images/screenshots/screen1.jpg";
import screenImg2 from "@/public/images/screenshots/screen2.jpg";
import screenImg3 from "@/public/images/screenshots/screen3.jpg";
import screenImg4 from "@/public/images/screenshots/screen4.jpg";

const Screenshots = () => {
  return (
    <div className="screenshots-area bg-263238 ptb-100">
      <div className="container">
        <div className="section-title white-color">
          <span className="sub-title">Screenshots</span>
          <h2>
            Easily Customize within <br />
            One Minute
          </h2>
        </div>

        <div className="screenshots-tabs">
          <Tabs>
            <TabList>
              <Tab>
                <i className="bx bx-data"></i>
                Budget Overview
              </Tab>
              <Tab>
                <i className="bx bx-add-to-queue"></i>
                Create & Adjust
              </Tab>
              <Tab>
                <i className="bx bx-file"></i>
                View Reports
              </Tab>
              <Tab>
                <i className="bx bx-bookmark-plus"></i>
                Integrations
              </Tab>
            </TabList>

            <TabPanel>
              <Image src={screenImg1} alt="screenshots" />
            </TabPanel>

            <TabPanel>
              <Image src={screenImg2} alt="screenshots" />
            </TabPanel>

            <TabPanel>
              <Image src={screenImg3} alt="screenshots" />
            </TabPanel>

            <TabPanel>
              <Image src={screenImg4} alt="screenshots" />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Screenshots;
