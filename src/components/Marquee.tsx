import GradientText from "./Generic/GradientText";
import { Box, Text } from "@chakra-ui/react";

export default function Marquee() {
  return (
    <div className="marquee-layout" id="marquee">
      <div className="marquee-content" style={{ overflow: "hidden" }}>
        <section className="marquee" style={{ overflow: "hidden" }}>
          <div className="marquee-content">
            <div className="marquee-main">
              <Box
                alignItems={{ base: 'center', sm: "flex-start" }}
                flexDirection="column"
                d="flex"
                className="marquee-header"

              >
                <Text as="h1" fontSize={{ base: '10vw' }}>
                  Coming <GradientText fontSize="3.5vw">soon</GradientText>
                </Text>
                <Text p="1rem 7rem">
                  Only <GradientText fontSize="1vw">11</GradientText> spots left
                  this year. Grab yours now.
                </Text>
              </Box>
              <div className="marquee-carousel -v1" data-cursor="-opaque">
                <div className="marquee-items">
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                </div>
              </div>
              <div className="marquee-carousel -v2" data-cursor="-opaque">
                <div className="marquee-items">
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                  <div className="marquee-item">
                    <img
                      src="https://dummyimage.com/1080x1080/fafafa/a9a9a9.png&text=Your+project+here"
                      alt="alt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
