import React from "react";
import Addform from "./Addform";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Card from "./Card";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    alert("start your journey with Explore India's Heritage");
  }, []);

  const handleAddbutton = () => {
    setVisible(!visible);
  };

  const cardItem = useSelector((state) => state.cardItem.cardItem);
  console.log(cardItem);

  return (
    <div>
      <div className="container">
        <div className="row">
          {visible ? (
            <>
              {/* <Addform visible={handleAddbutton} addItem={addItem} /> */}
              <Addform visible={handleAddbutton} />
            </>
          ) : (
            <>
              {cardItem.map((cardItem) => {
                return <Card key={cardItem.id} cardItem={cardItem} />;
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
