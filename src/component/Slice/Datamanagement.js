import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardItem: [
    {
      id: 1,
      title: "Rani ki vav",
      address: "Mohan Nagar Socity, Patan, Samalpati, Gujarat 384265",
      information:
        "Rani Ki Vav is a stepwell situated in the town of Patan in Gujarat, India. It is located on the banks of the Saraswati River.",
      image:
        "https://www.holidify.com/images/compressed/attractions/attr_1590.jpg",
    },
    {
      id: 2,
      title: "Hutheesing Jain Temple",
      address:
        "Hutheesing Jain Temple, Shahibaug Rd., Bardolpura, Madhupura, Ahmedabad, Gujarat 380004",
      information:
        "Hutheesing Temple is a Jain temple in Ahmedabad in Gujarat, India. It was constructed in 1848 by the Hutheesing family. The temple blends the old Maru-Gurjara temple architecture style with new architectural elements of haveli in its design.",
      image:
        "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/hutheesing-jain-temple/gallery/Hutheesing%20Jain%20Temple%20(2).jpg",
    },
    {
      id: 3,
      title: "Laxmi vilas palace",
      address: "J N Marg, Moti Baug, Vadodara, Gujarat 390001",
      information:
        "The Lakshmi Vilas Palace in Vadodara, Gujarat, India, was constructed in 1890 by the Gaekwad family, a prominent Maratha family, who ruled the Baroda State. Major Charles Mant was credited to be the main architect of the palace.",
      image:
        "https://image-tc.galaxy.tf/wijpeg-4ryg3h3na04hc4kwiqrta4qo5/laxmi-vilas-palace_standard.jpg?crop=134%2C0%2C1333%2C1000",
    },
  ],
};

console.log(initialState.cardItem);

const cardSlice = createSlice({
  name: "cardItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const cardItemList = {
        id: state.cardItem.length + 1,
        title: action.payload.title,
        address: action.payload.address,
        information: action.payload.information,
        image: action.payload.image,
      };
      state.cardItem.push(cardItemList);
    },

    delteItem: (state, action) => {
      state.cardItem = state.cardItem.filter(
        (cardItem) => cardItem.id !== action.payload
      );
    },
  },
});

export const { addItem, delteItem } = cardSlice.actions;
export default cardSlice.reducer;
