import { Fragment, useEffect } from "react";
import WOW from "wowjs";

const PictureOne = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Fragment>
      <div className="main">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="image">
                <img src="./images/top-home-image.jpg" alt="home" />
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="content">
                <h2
                  className="wow slideInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="5s"
                >
                  We are here to pick you up anytime!
                </h2>
                <div class="ms-4">Driver Apps</div>
                <div className="anchor d-flex">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.driver"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="150"
                      src="images/badge/play-store.png"
                      alt="play store icon"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/forunpoint-driver/id1630196763"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="150"
                      src="images/badge/app-store.png"
                      alt="app store icon"
                    />
                  </a>
                </div>
                <div  class="ms-4">User Apps</div>
                <div className="anchor d-flex">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.user"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="150"
                      src="images/badge/play-store.png"
                      alt="play store icon"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.user"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="150"
                      src="images/badge/app-store.png"
                      alt="app store icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PictureOne;
