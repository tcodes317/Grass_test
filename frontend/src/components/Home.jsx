import { useState } from "react";
import { Link } from "react-router-dom";
import "./../style/index.css";
import grass from "./../assets/dad35a63f668244ee312b1524fc3776e.jpg";

const Home = () => {
  const img = [
    "https://grass365.com/wp-content/uploads/2024/01/grass365-synthetic-grass-landscape-design-and-installation-logo-black-800x471.png",
    "https://grass365.com/wp-content/uploads/2025/02/austin-artificial-grass-playground-scaled.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/daycare-lawn-in-fall-austin-texas-200x250.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/shool-play-lawn-austin-texas-200x260.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/daycare-playground-austin.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/synthetic-grass-backyard-austin-with-swing.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/backyard-playground-artificial-grass-austin.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/playsettrampoline.jpeg",
    "https://grass365.com/wp-content/uploads/2024/05/artificial-turf-backyard-lawn-playground.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/artificial-grass-play-lawn-at-pizza-restaurant-austin.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/daycare-lawn-in-fall-austin-texas.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/playsettrampoline.jpeg",
    "https://grass365.com/wp-content/uploads/2025/02/residential-backyard-artificial-turf-playground-austin.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/daycare-playground-austin.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/Pizza-Lawn-Austin-Turf.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/Austin-Artificial-Lawn-Bubble.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/Austin-Artificial-Turf-Playgrounds-Bubble.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/Austin-Backyard-Putting-Green-Bubble.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/Austin-Artificial-Dog-Turf-Bubble.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/Austin-Synthetic-Turf-Sports-Fields-Bubble.jpg",
    "https://grass365.com/wp-content/uploads/2025/02/Austin-Commercial-Artificial-Turf-Bubble.jpg",
    "https://grass365.com/wp-content/uploads/2024/01/grass365-synthetic-grass-landscape-design-and-installation-logo-white-300x177.png",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOp, setIsOp] = useState(false);
  const [isOpe, setIsOpe] = useState(false);
  const [isOpener, setIsOpener] = useState(false);

  const toggleFaq = () => {
    setIsOp(!isOp);
  };
  const toggleFaqii = () => {
    setIsOpe(!isOpe);
  };
  const hToggle = () => {
    setIsOpen((p) => !p);
  };
  const toggleFaqiii = () => {
    setIsOpener(!isOpener);
  };

  return (
    <>
      <div className="relative">
        {/** Header */}
        <div className="fixed z-10 bg-white w-full">
          <div className="bg-orange-400 px-4 flex nav-content items-center justify-between">
            {/** top */}
            <div className="w-[100px] nav-left"></div>
            <nav className="nav-right call nav-flex text-white space-x-5 font-medium">
              <a>Call (512) 689-2274</a>
              <br />
              <a>Request a Quote</a>
              <a>Austin</a>
            </nav>
          </div>
          <div className="flex relative items-center px-8 py-4 shadow-lg justify-between">
            <img className="w-[120px]" src={img[0]} alt="" />
            <button className="pr-2 me">
              <i
                className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}
                onClick={hToggle}
              ></i>
            </button>

            {isOpen && (
              <nav
                id="menu"
                className={`absolute none bg-white w-full left-0 top-[100px] block ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <a className="block p-3 text-center">
                  <Link to="/">Design</Link>
                </a>
                <a className="block p-3 text-center">
                  <Link to="/">Synthetic Grass</Link>
                </a>
                <a className="block p-3 text-center">
                  <Link to="/">Installation</Link>
                </a>
                <a className="block p-3 text-center">
                  <Link to="/">Why Us</Link>
                </a>
                <a className="block p-3 text-center">
                  <Link to="/">Franchise</Link>
                </a>
              </nav>
            )}
            <nav className="tab-nav">
              <a>
                <Link to="/">Design</Link>
              </a>
              <a>
                <Link to="/">Synthetic Grass</Link>
              </a>
              <a>
                <Link to="/">Installation</Link>
              </a>
              <a>Why Us</a>
              <a>Franchise</a>
            </nav>
          </div>
        </div>

        {/** Main */}

        <main className="relative">
          <section className="h-screen relative bg-center" id="sec-i">
            <div
              id="artificial"
              className="absolute nesthub-absolute asus adjust-ipad-absolute -bottom-[27%] left-[10%]"
            >
              <div
                id="artificial-content"
                className="adjust asus-cont artifi-contain nesthub-abs surf-duo-one adj-rts flex-absolute adjust-ipad-height adjust-ipad text-white font-bold bg-green-700 w-[270px] mx-auto rounded-3xl p-4 text-center"
              >
                <h1 className="text-4xl box-header surf-h1 heading-content-1 w-[220px] block mx-auto">
                  Artificial Turf Playground Installations Austin, TX
                </h1>
                <p className="font-normal box-header surf-p w-[200px] mt-4 mb-4 mx-auto paragraph-content-1">
                  Austin and San Antonio Artificial Grass Playgrounds Grass!365
                </p>
              </div>
            </div>
          </section>
          <section className="">
            <div className="">
              <div
                id="artificial-content"
                className="adjust nesthub-width asus-cont adj-cont surf-duo-width adj-width-1 adj-width adjust-width box pt-[280px] w-[270px] mx-auto"
              >
                <div className="cartified-flex nesthub-flex">
                  <div className="cartified-flex-left surf-duo-left nesthub-flex-left">
                    <h1 className="font-bold text-[26px] mx-auto text-center">
                      Certified Playgrounds by Certified Installers
                    </h1>
                    <div className="mt-4">
                      <p>
                        The areas where our children play are of utmost
                        importance. Schools, churches, parks, and numerous
                        commercial entities feature playgrounds where kids can
                        swing, climb, and slide. The ground beneath this
                        equipment must be safe and tested. Grass!365 Austin has
                        extensive experience in providing safety surfaces for
                        children's play areas. Our playground system is both
                        Certified and Tested, ensuring that in the event of a
                        fall or trip, there's engineered padding beneath the
                        turf to mitigate impact.
                      </p>
                      <br />
                      <p>
                        It's not just about using the right materials for our
                        children's playgrounds; the installation team needs to
                        be equally qualified. Grass!365 Austin employs Certified
                        Turf Installer who understand exactly what's needed to
                        create a Certified Playground Surface.
                      </p>
                      <br />
                      <p>
                        We use SealTuft artificial grass, which binds each blade
                        together for a more durable surface while leaving spaces
                        between the stitch rows for excellent drainage. This
                        ensures your playground will last for years and dry out
                        quickly after rain.
                      </p>
                      <br />
                      <p>
                        Allow the Experts at Grass!365 Austin to demonstrate our
                        superior turf options and certififed playground
                        surfaces. Let our certified installers help you design
                        the safest and best possible playground.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 cartified-flex-right space-y-2 image-cont nesthub-flex-right">
                    <div className="w-full">
                      <img src={img[2]} alt="" className="w-full" />
                    </div>
                    <div className="w-full">
                      <img src={img[3]} alt="" className="w-full" />
                    </div>
                    <div className="">
                      <img alt="" className="h-[150px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={grass} alt="" className="h-[30px] w-full bg-cover" />
              </div>
              <div
                id="artificial-content"
                className="pt-12 nesthub-width nesthub-flex adj-width-2 asus-cont asus-flex surf-duo-width artificial-dash artificial-content-flex adj-conte art-flex adjust-width artificial-content-width adjust w-[290px] mx-auto"
              >
                <div class="artificial-dash-left nesthub-flexx-left asus-flex-left">
                  <h1 className="text-xl heading-2 font-bold">
                    Artificial Grass for Daycares
                  </h1>
                  <p className="mt-2 mb-5">
                    Even our youngest children require a space to exlore
                    outdoors. I wish we knew the exact number of kids who've
                    taken their first steps on our artificial grass over the
                    years. We offer a secure and attractive surface that allows
                    your teachers and students to enjoy their time outside, in
                    the fresh air, on safe and beautiful artificial playground
                    surfaces.
                  </p>
                </div>
                <div>
                  <img src={img[4]} alt="" />
                </div>
              </div>
              <div className="mt-10">
                <img src={grass} alt="" className="h-[30px] w-full bg-cover" />
              </div>
              <div
                id="artificial-content"
                className="adjust nesthub-width asus-container surf-duo-width adj-width-2 adj-conte adjust-tab w-[290px] adjust-width mb-20 mx-auto"
              >
                <h1 className="text-2xl heading-3 nesthub-h1 heading-4 adjust-header font-normal text-center mt-12 mb-4">
                  Austin Grass!365 and Children
                </h1>
                <div className="space-y-10 nesthub-fflex-cont asus-container-flex austin adjust-top austin-flex">
                  <div className="austin-content nesthub-fflex-cont-left">
                    <p className="bg-gray-200 mt-4 p-4">
                      The kids wake up every morning wanting to run out and play
                      in the yard - it's legit the best money I've ever spent!
                      Now on to the GRass 365 team - the installation was
                      smooth, fast and professional.
                    </p>
                    <div className="flex mt-8 items-center space-x-2">
                      <img src={img[5]} className="w-[50px]" alt="" />
                      <p>
                        <b>Kelly K.,</b> Homeowner
                      </p>
                    </div>
                  </div>

                  <div className="austin-content austin-center nesthub-fflex-cont-center">
                    <p className="bg-gray-200 mt-4 p-4">
                      They were fast, respectful of our other landscaping and
                      great to work with. Now that we have the turf my kids and
                      dogs can play outside everyday without making a mess!
                    </p>
                    <div className="flex mt-8 items-center space-x-2">
                      <img src={img[6]} className="w-[50px]" alt="" />
                      <p>
                        <b>Callie H.,</b> Homeowner
                      </p>
                    </div>
                  </div>

                  <div className="austin-content nesthub-fflex-cont-right">
                    <p className="bg-gray-200 mt-4 p-4">
                      Alex and his team were extremely knowledgeable and fast.
                      He considered all my inputs and how I wanted the design
                      and created a perfect area for us. Reliable and responsive
                      company!
                    </p>
                    <div className="flex mt-8 items-center space-x-2">
                      <img src={img[7]} className="w-[50px]" alt="" />
                      <p>
                        <b>Marcella M.,</b> Homeowner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <img src={grass} alt="" className="h-[30px] w-full bg-cover" />
              </div>
              <div
                id="artificial-content"
                className="adjust nesthub-width surf-duo-width asus-container adj-width-2 adjust-ads adj-conte w-[290px] mb-20 adjust-width mx-auto"
              >
                <h1 className="text-center nesthub-d h1-asus-container heading-3 adjust-header adjust-bottom adjust-top text-2xl mt-14 font-medium">
                  Artificial Turf Playground Austin
                </h1>
                <div className="artificial-flex nesthub-f asus-container-content">
                  <div className="artificial-flex-content artificial-content-left asus-container-content-left nesthub-cont-cont-left nesthub-cont-cont">
                    <h1 className="mt-5 mb-2 text-xl">Daycare Playground</h1>
                    <p>
                      We had a wonderful time cleaning up this daycare
                      playground with new artificial grass. The reviews from the
                      staff and parents has been overwhelming and we look
                      forward to helping with more turf in the future.
                    </p>
                    <div className="w-full my-5">
                      <img src={img[2]} className="w-full" alt="" />
                    </div>
                  </div>
                  <div className="artificial-flex-content artificial-flex-content-center asus-container-content-center nesthub-cont-cont-center nesthub-cont-cont">
                    <h1 className="font-normal text-xl mb-4 mt-8">
                      Backyard Playground Turf
                    </h1>
                    <p>
                      Grass!365 Austin's Certified Playground Surfaces are not
                      just for the school or church, we install plenty of
                      artificial grass projects at home with playground
                      equipment. What your children fall on, no matter where
                      they are playing matters. This family wanted a great space
                      for sports and a small playground. Whether swinging,
                      sliding or climbing, Artificial Turf should be the only
                      place to fall whether at home or school.
                    </p>
                    <div className="w-full mt-3">
                      <img src={img[8]} alt="" className="w-full" />
                    </div>
                  </div>
                  <div className="artificial-flex-content artificial-flex-content-right asus-container-content-right nesthub-cont-cont-right nesthub-cont-cont">
                    <h1 className="font-normal text-xl pr-6 mb-4 mt-8">
                      Playground Turf for Business
                    </h1>
                    <p>
                      Attracting families to your business creates a great
                      revenue stream that will last for generations. Keeping
                      them on site and hanging out increases the revenue per
                      visit and they will come back more often if every owner
                      installed a play lawn this one. Plenty of sliding,
                      climbing and running can be done here. There is even a
                      tunnel for extra fun. if your business has a little space,
                      let us help you design a great artificial grass
                      playground.
                    </p>
                    <div className="w-full mt-3">
                      <img src={img[9]} alt="" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <img src={grass} alt="" className="h-[30px] w-full bg-cover" />
              </div>

              <div
                id="artificial-content"
                className="adjust nesthub-width-d asus-container-new surf-duo-width adj-conte adj-width-2 adjust-width-1 adjust-xyz w-[290px] mb-20 mx-auto mt-15"
              >
                <h1 className="text-2xl heading-3 font-bold text-center">
                  Frequently Asked Questions
                </h1>
                <div className="relative adjust-top margin-top">
                  {" "}
                  {/** FAQ */}
                  <div className="relative mt-4 mb-4 space-y-2">
                    <div className="faq-i">
                      <button
                        onClick={toggleFaq}
                        className="bg-gray-300 rounded-md w-full p-5 flex items-start justify-between"
                      >
                        <span className="w-[180px] surf-p turf faq-btn asus-w len text-left block">
                          How does playground turf differ from other turf?
                        </span>
                        <i
                          className={`fa ${
                            isOp ? "fa-minus" : "fa-plus"
                          } relative top-1 text-green-500`}
                        ></i>
                      </button>
                      {isOp && (
                        <div className="faq-content bg-gray-300 p-5">
                          <p>
                            Playground turf includes extra cushioning or padding
                            layers under the surface to comply with fall-height
                            standards, providing enhanced shook absorption and
                            greater safety for children.
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="faq-ii">
                      <button
                        onClick={toggleFaqii}
                        className="bg-gray-300 rounded-md w-full p-5 flex items-start justify-between"
                      >
                        <span className="w-[180px] asus-w surf-p turf faq-btn len text-left block">
                          What do you mean your playground Surface is Certified?
                        </span>
                        <i
                          className={`fa ${
                            isOpe ? "fa-minus" : "fa-plus"
                          } relative top-1 text-green-500`}
                        ></i>
                      </button>
                      {isOpe && (
                        <div className="bg-gray-300 p-5">
                          <p>
                            The largest independent testing angencies and other
                            independent testing facilities take our turf, infill
                            and padding and test them for fall height ratings
                            ensuring when a child falls they have protection.
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="faq-iii">
                      <button
                        onClick={toggleFaqiii}
                        className="bg-gray-300 rounded-md w-full p-5 flex items-start justify-between"
                      >
                        <span className="w-[180px] asus-w surf-p turf len faq-btn text-left block">
                          Does playground turf get hot?
                        </span>
                        <i
                          className={`fa ${
                            isOpener ? "fa-minus" : "fa-plus"
                          } relative top-1 text-green-500`}
                        ></i>
                      </button>
                      {isOpener && (
                        <div className="bg-gray-300 p-5">
                          <p>
                            Synthetic surface tend to get hot under direct
                            sunlight. However, technologies such as cooling
                            infills or light-colored turf can mitigate this by
                            lowering the surface temperature. It's advisable to
                            always check the temperature of the surface before
                            letting children play on it. Many municipalities
                            require shade structures on playgrounds to help with
                            the hotter temperatures.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative ads-cont mt-32 mb-24 adjust-top-faq">
                    <h1 className="text-center asus-h1 heading-8 surf-heading heading-5 font-bold text-2xl w-[150px] header-gras mx-auto">
                      Grass!365 Playgrounds
                    </h1>
                    <div className="grid-cols-2 ground-play grid-block surf-grid nest-grid grid gap-2 mt-8">
                      <img src={img[10]} alt="" />
                      <img src={img[11]} alt="" />
                      <img src={img[12]} alt="" />
                      <img src={img[4]} alt="" />
                      <img src={img[14]} alt="" />
                      <img src={img[1]} alt="" />
                      <img src={img[8]} alt="" />
                      <img src={img[10]} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14">
                <img src={grass} alt="" className="h-[30px] w-full bg-cover" />
              </div>
            </div>
          </section>
          <section className="">
            <div
              id="artificial-content"
              className="adjust nesthub-width asus-container-new surf-duo-width adj-width-1 adjust-1 adj-conte adjust-width arti-flex w-[280px] mx-auto space-y-14"
            >
              <div className="get-touch">
                <div className="get-touch-left space-y-6 mt-12">
                  <img src="https://grass365.com/wp-content/uploads/2025/02/Alex-Kroviak-Austin-Grass365-Owner.jpg" />
                  <h1 className="font-bold text-3xl">Get in touch with Alex</h1>
                  <p>
                    Grass!365 Austin Certified Synthetic Turf Installers and
                    Design Experts.
                  </p>
                  <nav className="flex flex-col space-y-4">
                    <a>
                      <b>Phone</b>: (512) 689-2274
                    </a>
                    <a>
                      <Link to="/">
                        <b>Email</b>: Alex@Grass365.com
                      </Link>
                    </a>
                  </nav>
                </div>
                <div className="adjust-top-faq get-touch-right">
                  <h1 className="font-bold text-2xl text-center">
                    Request a Free Consultation
                  </h1>
                  <form action="" method="post" className="space-y-2">
                    <div className="mt-3">
                      <div className="grid grid-cols-2 space-x-2 mt-2">
                        <input
                          type="text"
                          placeholder="First Name*"
                          className="p-4 shadow-lg"
                        />
                        <input
                          type="text"
                          placeholder="Last Name*"
                          className="p-4 shadow-lg"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-4 shadow-lg w-full"
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="grid grid-cols-2 space-x-2 mt-2">
                        <input
                          type="text"
                          placeholder="Email*"
                          className="p-4 shadow-lg"
                        />
                        <input
                          type="text"
                          placeholder="Phone*"
                          className="p-4 shadow-lg"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-4 shadow-lg w-full border-[#000]"
                          placeholder="Address*"
                        />
                        <input
                          type="text"
                          className="p-4 shadow-lg w-full border-[#000]"
                          placeholder="Project Details (minimum 20 characters)*"
                        />
                      </div>
                      <div className="flex items-center justify-center mt-12 space-x-4">
                        <button className="border-2 border-blue p-3 px-8">
                          Reset
                        </button>
                        <button className="p-3 px-8 bg-black border-black border-2 text-white hover:bg-white hover:text-black">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-42 asus-pop surf-duo-width mb-42 web-cont dash-width artificial-content">
                <h1 className="text-[25px] nest-height h-width increase h-text surf-h1 adjust w-[250px] mx-auto text-center font-bold">
                  Popular Synthetic Grass Solutions Austin, Texas
                </h1>
                <div className="mt-18 nesthub-grid w-[230px] asus-pop-flex surf-duo-width card-grid mx-auto space-y-10 data-grid">
                  <div>
                    <img src={img[15]} alt="" />
                    <div className="mt-4">
                      <h1 className="text-2xl pop-hash w-[120px] mb-2">
                        Austin, TX Artificial Grass
                      </h1>
                      <button className="bg-[#02c907] px-4 p-1.5 text-white">
                        <span className="text-sm">Learn More</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <img src={img[16]} alt="" />
                    <div className=" mt-4">
                      <h1 className="text-2xl pop-hash w-[150px] mb-2">
                        Certified Playground Surfaces for Austin
                      </h1>
                      <button className="bg-[#02c907] px-4 mt-4 p-1.5 text-white">
                        <span className="text-sm">Learn More</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <img src={img[17]} alt="" />
                    <div className=" mt-4">
                      <h1 className="text-2xl pop-hash w-[150px] mb-2">
                        Backyard Putting Greens Austin, TX
                      </h1>
                      <button className="bg-[#02c907] px-4 mt-4 p-1.5 text-white">
                        <span className="text-sm">Learn More</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <img src={img[18]} alt="" />
                    <div className=" mt-4">
                      <h1 className="text-2xl pop-hash w-[150px] mb-2">
                        Pet Grass Austin Texas
                      </h1>
                      <button className="bg-[#02c907] px-4 mt-4 p-1.5 text-white">
                        <span className="text-sm">Learn More</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <img src={img[19]} alt="" />
                    <div className=" mt-4">
                      <h1 className="text-2xl pop-hash w-[150px] mb-2">
                        Austin, TX Sports Turf and Fields
                      </h1>
                      <button className="bg-[#02c907] px-4 mt-4 p-1.5 text-white">
                        <span className="text-sm">Learn More</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <img src={img[20]} alt="" />
                    <div className=" mt-4">
                      <h1 className="text-2xl pop-hash w-[150px] mb-2">
                        Commercial Artificial Grass Austin
                      </h1>
                      <button className="bg-[#02c907] px-4 mt-4 p-1.5 text-white">
                        <span className="text-sm">Learn More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <img src={grass} alt="" className="h-[30px] w-full bg-cover" />
            </div>
          </section>
          <section className="relative wrapper" id="">
            <div className="data-container nesthub-dd surf-duo-width asus-connt surf-duo-width-mx">
              <div className="w-[280px] asus-connt-i nesthub-cont-i surf-duo-width d-w d data-adjust data-width artificial-content adjust mx-auto my-10">
                <div className="bg-[#274261] text-white p-10 rounded-2xl">
                  <h1 className="text-2xl my-3">Financing Available</h1>
                  <h1 className="text-2xl font-bold my-3">
                    Get 12 Months, <br />
                    0% Financing.
                  </h1>
                  <p className="my-3">No Payments, No Interest for 12 Months</p>
                  <button className="bg-[#02c907] font-bold text-xl p-3 mt-2 w-10/12 rounded-lg px-6 text-white">
                    <span>Get Details</span>
                  </button>
                </div>
              </div>
              <div className="w-[280px] asus-connt-ii nesthub-cont-ii surf-duo-width d-w space-y-4 p-12 mx-auto my-10">
                <h1 className="text-2xl w-[100px]">Have Questions?</h1>
                <h1 className="font-bold text-2xl">Find Answers.</h1>
                <p className="w-[180px]">
                  Browse our Frequently Asked Questions
                </p>
                <div className="relative">
                  <button className="bg-[#02c907] w=11/12 font-medium px-8 text-xl p-3 text-white rounded-md">
                    <span>Visit FAQs</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="relative bg-[#1f331f]">
          <div className="p-8 footer-div-content">
            <div className="footer-flex">
              <div className="nest-img">
                <img src={img[21]} alt="" className="w-[150px]" />
              </div>
              <div className="space-y-6 footer-nav-flex">
                <nav className="mt-4 text-white flex text-md flex-col space-y-3">
                  <a>
                    <Link to="/">Design</Link>
                  </a>
                  <a>
                    <Link to="/">Synthetic Grass</Link>
                  </a>
                  <a>
                    <Link to="/">Installation</Link>
                  </a>
                  <a>
                    <Link to="/">Why Us</Link>
                  </a>
                  <a>
                    <Link to="/">Franchise</Link>
                  </a>
                </nav>
                <nav className="mt-4 text-white flex text-md flex-col space-y-3">
                  <a>
                    <Link to="/">(800) 490-2971</Link>
                  </a>
                  <a>
                    <Link to="/">Contact</Link>
                  </a>
                  <a>
                    <Link to="/">Areas We Serve</Link>
                  </a>
                  <a>
                    <Link to="/">FAQs</Link>
                  </a>
                  <a>
                    <Link to="/">Franchise</Link>
                  </a>
                  <a>
                    <Link to="/">Specifications</Link>
                  </a>
                  <a>
                    <Link to="/">Privacy Policy</Link>
                  </a>
                </nav>
              </div>
            </div>
            <div className="footer-conn">
              <div className="space-y-4 mt-12 mb-12 footer-init">
                <div className="text-white space-x-4">
                  <i className="fab fa-instagram text-2xl"></i>
                  <i className="fab fa-linkedin text-2xl"></i>
                  <i className="fab fa-vimeo text-2xl"></i>
                  <i className="fab fa-twitter text-2xl"></i>
                  <i className="fab fa-facebook text-2xl"></i>
                  <i className="fab fa-youtube text-2xl"></i>
                </div>
                <p className="text-white">
                  &copy; 2025 IntelliTurf, Inc. DBA Grass!365
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
