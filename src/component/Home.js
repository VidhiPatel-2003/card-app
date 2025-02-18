import React from "react";
import Addform from "./Addform";
import { useState, useEffect } from "react";
import Card from "./Card";
import Footer from "./Footer";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    alert("start your journey with Explore India's Heritage");
  }, []);

  class carditemlist {
    constructor(id, title, address, information, image) {
      this.id = id;
      this.title = title;
      this.address = address;
      this.information = information;
      this.image = image;
    }
  }

  const [carditem, setCardItem] = useState([
    new carditemlist(
      "1",
      "Rani ki vav",
      "Mohan Nagar Socity, Patan, Samalpati, Gujarat 384265",
      "Rani Ki Vav is a stepwell situated in the town of Patan in Gujarat, India. It is located on the banks of the Saraswati River.",
      "https://www.holidify.com/images/compressed/attractions/attr_1590.jpg"
    ),
    new carditemlist(
      "2",
      "Hutheesing Jain Temple",
      "Hutheesing Jain Temple, Shahibaug Rd., Bardolpura, Madhupura, Ahmedabad, Gujarat 380004",
      "Hutheesing Temple is a Jain temple in Ahmedabad in Gujarat, India. It was constructed in 1848 by the Hutheesing family. The temple blends the old Maru-Gurjara temple architecture style with new architectural elements of haveli in its design.",
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/hutheesing-jain-temple/gallery/Hutheesing%20Jain%20Temple%20(2).jpg"
    ),
    new carditemlist(
      "3",
      "Laxmi vilas palace",
      "J N Marg, Moti Baug, Vadodara, Gujarat 390001",
      "The Lakshmi Vilas Palace in Vadodara, Gujarat, India, was constructed in 1890 by the Gaekwad family, a prominent Maratha family, who ruled the Baroda State. Major Charles Mant was credited to be the main architect of the palace.",
      "https://image-tc.galaxy.tf/wijpeg-4ryg3h3na04hc4kwiqrta4qo5/laxmi-vilas-palace_standard.jpg?crop=134%2C0%2C1333%2C1000"
    ),
  ]);
  console.log(carditem);

  const addItem = ({ title, address, information, image }) => {
    let item = new carditemlist(
      carditem.length + 1,
      title,
      address,
      information,
      image
    );
    carditem.push(item);
    setCardItem(carditem);
  };

  const deleteItem = (id) => {
    let cardItemList = carditem.filter((item) => item.id !== id);
    setCardItem(cardItemList);
  };
  const handleAddbutton = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {visible ? (
            <>
              <Addform visible={handleAddbutton} addItem={addItem} />
            </>
          ) : (
            <>
              {carditem.map((item) => {
                return (
                  <Card key={item.id} item={item} deleteItem={deleteItem} />
                );
              })}{" "}
            </>
          )}
        </div>
      </div>

      <div className="addbutton">
        {!visible && (
          <button id="addbutton" onClick={handleAddbutton}>
            +Add
          </button>
        )}
      </div>
      {!visible && <Footer />}
    </div>
  );
}

export default Home;
