import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-44238765/original/f9ab2331-d196-4a02-b58b-4f2ff8cb5a32.png?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/85804702/53772106_original.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-588179027388191749/original/f35a025d-fa24-4723-bfe8-d962744d39be.jpeg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/68aba7d3-70f3-4df7-8f32-6bc291f0bc66.jpg?im_w=720"
          title="Stylish Apartment in Berlin"
          description="Superhost with an extraordinary located in between Alexanderplatz and Hacksche Höfe."
          price="€60/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a4e84be2-c120-4194-b336-459ab3b693b4.jpg?im_w=720"
          title="Elegant Cultural House in València"
          description="Carefully designed for your comfort is in the heart of El Carmen, the authentic historical center."
          price="€66/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a377db53-0fb0-44e5-915b-41c12be2ea81.jpg?im_w=720"
          title="Shiny Living Room"
          description="Explore City Centre, West End & Finnieston with stunning city panorama."
          price="€75/night"
        />
      </div>
    </div>
  );
}

export default Home;
