import React from "react";
import { FooterWrapper, FooterContainer } from "./FooterElements";
import {
  EmailShareButton,
  TelegramShareButton,
  FacebookShareButton,
  FacebookIcon,
  TelegramIcon,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  ViberShareButton,
  ViberIcon,
} from "react-share";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FooterContainer>
        <FooterWrapper>
          <h5>
            &copy; 2021. Developed by{" "}
            <span style={{ color: "yellow" }}> Shohzod Abdusamatov </span>
          </h5>
          <h5>
            <span>🔗Share</span>
            <FacebookShareButton
              url={window.location.href}
              quote={
                "Assalomu alaykum siz Shohzod Abdusamatovning portfolio websiteni ulashmoqdasz!"
              }
              hashtag="#Shohzod's Website"
              className="share-link"
            >
              <FacebookIcon
                size={30}
                style={{ borderRadius: "50%" }}
                style={{ borderRadius: "50%" }}
              />
            </FacebookShareButton>
            <TelegramShareButton
              url={window.location.href}
              hashtag="#Shohzod's Website"
              className="share-link"
              quote={
                "Assalomu alaykum siz Shohzod Abdusamatovning portfolio websiteni ulashmoqdasz!"
              }
            >
              <TelegramIcon size={30} style={{ borderRadius: "50%" }} />
            </TelegramShareButton>
            <EmailShareButton
              url={window.location.href}
              hashtag="#Shohzod's Website"
              className="share-link"
              quote={
                "Assalomu alaykum siz  Shohzod Abdusamatovning portfolio websiteni ulashmoqdasz!"
              }
            >
              <EmailIcon size={30} style={{ borderRadius: "50%" }} />
            </EmailShareButton>
            <TwitterShareButton
              url={window.location.href}
              hashtag="#Shohzod's Website"
              className="share-link"
              quote={
                "Assalomu alaykum siz  Shohzod Abdusamatovning portfolio websiteni ulashmoqdasz!"
              }
            >
              <TwitterIcon size={30} style={{ borderRadius: "50%" }} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={window.location.href}
              hashtag="#Shohzod's Website"
              className="share-link"
              quote={
                "Assalomu alaykum siz  Shohzod Abdusamatovning portfolio websiteni ulashmoqdasz!"
              }
            >
              <WhatsappIcon size={30} style={{ borderRadius: "50%" }} />
            </WhatsappShareButton>
            <ViberShareButton
              url={window.location.href}
              hashtag="#Shohzod's Website"
              className="share-link"
              quote={
                "Assalomu alaykum siz  Shohzod Abdusamatovning portfolio websiteni ulashmoqdasz!"
              }
            >
              <ViberIcon size={30} style={{ borderRadius: "50%" }} />
            </ViberShareButton>
          </h5>
        </FooterWrapper>
      </FooterContainer>
    );
  }
}

export default Footer;
