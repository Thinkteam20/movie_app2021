import PropTypes from "prop-types";

function Food({name,picture, rating}) {
    return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

//list of object only JS object and render food com
const foodILike = [
  {
  id:1,
  name: "GSP",
  image:
  "https://media.contentapi.ea.com/content/dam/ufc/images/2017/10/ufc167-st-pierre-v-hendricks-1920x1080.jpg.adapt.crop16x9.1455w.jpg",
  rating:5
  },

  {
  id:2,  
  name: "khabib",
  image:
  "https://sportshub.cbsistatic.com/i/r/2019/09/06/5b3f6cf9-2a2d-4a9a-8b4e-3957cac770bc/thumbnail/770x433/48d7f39b8e331c55741acb1bab7451cc/khabib-weighin.jpg",
  rating:5.4
},

  {
    id:3,
    name: "CM",
  image:
  "https://www.tabloidxo.com/images/news/4812/1.jpg",
  rating:1.1
  },
  
  {
    id:4,
    name: "Masvidal",
  image:
  "https://sportshub.cbsistatic.com/i/r/2019/07/11/c4b2f654-a4d2-4014-8934-e7d86af16419/thumbnail/770x433/0debb87ebd0d9ac6f51a91da0f6f05a1/jorge-masvidal.jpg",
  rating:1.4
}
]
function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;