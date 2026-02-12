import React, { forwardRef } from "react";
import stylesPage from "../../styles/page.module.css";
import RnGWreathPic from "../../images/Cristmas_wreath_red_and_gold.JPEG";
import WreathWithOranges from "../../images/Wreath_with_oranges.JPEG";
import EmailForm from "../Forms/EmailForm";

const UpcomingWorkshop = forwardRef((props, ref) => {
  const wrapperStyles = [
    stylesPage.section_more__wrapper,
    stylesPage.wreath_details,
  ];

  return (
    <div className={wrapperStyles.join(" ")} ref={ref}>
      <div className={stylesPage.section_more}>
        <p className={stylesPage.section_more__intro}>
          Upcoming workshops will be announced soon! If you’d like to arrange a
          private workshop for your company, family, or friends, feel free to
          reach out to me. We’d love to create something special for you!
        </p>
        <div className={stylesPage.section_more__content}>
          <div>
            <img
              className={stylesPage.section_more__smallpic}
              src={WreathWithOranges}
              alt="Red and gold christmas wreath"
            ></img>
          </div>
          <div>
            <h3>What to Expect:</h3>
            <ul>
              <li>
                All necessary materials are provided, so you can focus entirely
                on creating your piece.
              </li>
              <li>
                A warm, cozy atmosphere with music and styling to inspire your
                creativity.
              </li>
              <li>
                Complimentary drinks and sweet treats to enjoy during the
                workshop.
              </li>
            </ul>
          </div>
        </div>
        <div className={stylesPage.section_more__content}>
          <div>
            <p>
              Ready to plan a workshop for your team or a cozy gathering with
              friends? Contact me to book your private session — we will create
              something beautiful together!
            </p>
            <EmailForm header="Send me a message to apply for a workshop!" />
          </div>
          <div>
            <img
              className={stylesPage.section_more__pic}
              src={RnGWreathPic}
              alt="Christmas wreath with oranges"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
});

export default UpcomingWorkshop;
