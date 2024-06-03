import PageTitle from "../../../../Components/PageTitle";
import image1 from "../../../../assets/about/about1.jpg";
import image2 from "../../../../assets/about/about2.jpg";
import image3 from "../../../../assets/about/about3.jpg";
import image4 from "../../../../assets/about/about4.jpg";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div>
      <div>
        <Slide direction="up">
          <PageTitle
            heading={"About Us"}
            subHeading={"Read More About Planet Shoes"}
          ></PageTitle>
        </Slide>
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
          <div className="lg:p-0 px-3">
            <Slide>
              <h3 className="text-xl font-semibold text-fuchsia-500 mb-3">
                A short overview
              </h3>
            </Slide>
            <Fade delay={400}>
              <div>
                <p>
                  Of course, here's a more detailed paragraph for your online
                  planet shoes shop: Welcome to Planet Shoes Shop, the premier
                  online destination for stylish and comfortable footwear that
                  caters to the entire family. Our carefully curated collection
                  features a diverse range of shoes, from chic, elegant heels
                  and trendy sneakers to sturdy, practical boots and
                  eco-friendly choices that reflect our commitment to
                  sustainability. Each pair is meticulously crafted from
                  high-quality materials to ensure maximum comfort and
                  durability, so you can step out in confidence no matter the
                  occasion.
                </p>
                <p>
                  We pride ourselves on offering competitive prices, making
                  high-quality footwear accessible to everyone. Our intuitive,
                  user-friendly website ensures a seamless shopping experience,
                  allowing you to effortlessly find the perfect fit and style.
                  Additionally, by joining our community, you gain access to the
                  latest fashion trends, exclusive offers, and early
                  notifications on new arrivals. At Planet Shoes Shop, we’re not
                  just about selling shoes we’re about delivering exceptional
                  value and service, ensuring that every customer feels special
                  and satisfied. Explore our collection today and discover why
                  Planet Shoes Shop is the go-to destination for footwear that
                  perfectly blends style, comfort, and sustainability.
                </p>
              </div>
            </Fade>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4">
            <Slide direction="up" cascade fraction={0}>
              <img
                className="lg:h-[210px] md:w-full border p-3 border-fuchsia-600"
                src={image1}
                alt=""
              />
            </Slide>
            <Slide direction="up" cascade delay={200} fraction={0}>
              <img
                className="lg:h-[210px] md:w-full border p-3 border-fuchsia-600"
                src={image2}
                alt=""
              />
            </Slide>
            <Slide direction="up" cascade delay={400} fraction={0}>
              <img
                className="lg:h-[210px] md:w-full border p-3 border-fuchsia-600"
                src={image3}
                alt=""
              />
            </Slide>
            <Slide direction="up" cascade delay={600} fraction={0}>
              <img
                className="lg:h-[210px] md:w-full border p-3 border-fuchsia-600"
                src={image4}
                alt=""
              />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
