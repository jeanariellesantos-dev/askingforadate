import React, { useState, useEffect } from 'react';
import gif1 from '../src/assets/gif1.gif';
import gif4 from '../src/assets/gif4.gif';
import gif3 from '../src/assets/gif3.gif';
import gif6 from '../src/assets/gif6.gif';
import bgaudio from '../src/assets/bg-audio.m4a';
import { motion } from 'framer-motion';
import '../src/index.css'; // Import the CSS file for heart animations

function App() {

  const [step, setStep] = useState(1);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [foods, setFoods] = useState([]);

  const buttonClass =
"mt-8 w-full rounded-full bg-pink-600 hover:bg-pink-700 text-white py-3 sm:py-4 text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg";

    const foodOptions = [
    "Samgyupsal",
    "Hotpot",
    "Coffee",
    "Ramen",
    "Burgers",
    "Chicken",
  ];

  const foodIcons = {
  "Samgyupsal": "🥩",
  "Hotpot": "🍲",
  "Coffee": "☕",
  "Ramen": "🍜",
  "Burgers": "🍔",
  "Chicken": "🍗",
};

  const toggleFood = (food) => {
    if (foods.includes(food)) {
      setFoods(foods.filter((f) => f !== food));
    } else {
      setFoods([...foods, food]);
    }
  };


  const handleCopy = async () => {
const message = `❤️ Our Date Plan ❤️

📅 Date: ${date}
🕒 Time: ${time}

🍽️ Food:
${foods
  .map((food) => `${foodIcons[food]} ${food}`)
  .join("\n")}
  Send me this in the chat box 😊
  See you soon! ❤️`;

      await navigator.clipboard.writeText(message);

      alert("Copied! Now send it to me in the chat box 😊");
    };

  const [noButtonStyle, setNoButtonStyle] = useState({
    position: 'static',
  });


  // Function to handle heart popping animation
  useEffect(() => {
    const loveInterval = setInterval(() => {
      const r_num = Math.floor(Math.random() * 40) + 1;
      const r_size = Math.floor(Math.random() * 65) + 10;
      const r_left = Math.floor(Math.random() * 100) + 1;
      const r_bg = Math.floor(Math.random() * 25) + 100;
      const r_time = Math.floor(Math.random() * 5) + 5;

      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.width = `${r_size}px`;
      heart.style.height = `${r_size}px`;
      heart.style.left = `${r_left}%`;
      heart.style.background = `rgba(255,${r_bg - 25},${r_bg},1)`;
      heart.style.animation = `love ${r_time}s ease`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, r_time * 1000); // Remove the heart after the animation duration
    }, 500);

    return () => clearInterval(loveInterval);
  }, []);

const handleNoButtonHover = () => {
  const buttonWidth = 170;
  const buttonHeight = 70;
  const margin = 30;

  const x =
    Math.random() *
      (window.innerWidth - buttonWidth - margin * 2) +
    margin;

  const y =
    Math.random() *
      (window.innerHeight - buttonHeight - margin * 2) +
    margin;

  setNoButtonStyle({
    position: "fixed",
    left: x,
    top: y,
    transition: "all .25s ease",
  });
};

  const handleNoButtonTouch = () => {
    handleNoButtonHover();
  };

  return (
  <>
      {step === 1 ? (
        <div
          className="
            relative
            min-h-screen
            bg-gradient-to-br
            from-pink-200
            via-pink-300
            to-pink-400
            flex
            flex-col
            items-center
            justify-center
            text-center
            overflow-hidden
            px-6
            py-8
          "
        >
          {/* Floating GIF */}
          <img
            src={gif4}
            alt=""
            className="absolute top-5 right-5 w-14 sm:w-20"
          />

          {/* Main GIF */}
          <motion.img
            src={gif1}
            alt="cute"
            className="w-52 sm:w-64 md:w-80 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-6 text-center font-bold text-pink-600"
          >
            <span className="block text-2xl sm:text-3xl md:text-5xl leading-tight">
              Promise you won't
              <br className="sm:hidden" />
              {" "}overthink this? 🥹
            </span>

            <span className="block mt-4 text-3xl sm:text-4xl md:text-6xl leading-tight">
              But would you like
              <br className="sm:hidden" />
              {" "}to go out with me? 💕
            </span>
          </motion.h1>

          {/* Buttons */}
          <div className="relative flex items-center justify-center mt-10 h-24 w-full">

            <button
              onClick={() => {
                const audio = new Audio(bgaudio);
                audio.play();
                setStep(2);
              }}
              className="
                bg-pink-600
                hover:bg-pink-700
                text-white
                rounded-full
                px-10
                sm:px-12
                py-3
                text-lg
                sm:text-xl
                font-bold
                shadow-xl
                transition-all
                duration-300
                hover:scale-105
                mr-2
              "
            >
              YES ❤️
            </button>

            <button
              style={noButtonStyle}
              onMouseEnter={handleNoButtonHover}
              onTouchStart={handleNoButtonTouch}
              className="
                absolute
                bg-gray-400
                hover:bg-gray-500
                text-white
                rounded-full
                px-10
                py-3
                text-lg
                font-bold
                transition-all
              "
            >
              NO 😝
            </button>

          </div>
        </div>
      ) : (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex justify-center items-center p-6">

        <div className="w-full max-w-md sm:max-w-xl mx-auto">


          {/* Progress */}

          <div className="mb-6">

           <p className="text-center text-sm sm:text-base text-pink-700 font-semibold">
              Step {step} of 5
            </p>

            <div className="w-full h-3 bg-pink-100 rounded-full mt-2">

              <div
                className="h-3 bg-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${step * 20}%` }}
              />

            </div>

          </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
              bg-white
              rounded-3xl
              shadow-2xl
              p-5
              sm:p-8
              mx-2
              "
        >

          {step === 2 && (

          <>
          <h1 className="...">
          Yayyy! can't wait to create unforgettable memories together!
          </h1>

          <img
            src={gif6}
            alt=""
            className="mx-auto w-44 sm:w-60 mb-6"
            />

          <button
          onClick={()=>setStep(3)}
          className={buttonClass}
          >
          Let's plan a date ❤️
          </button>

          </>

          )}

          {step===3&&(
            <div className="w-full max-w-md mx-auto px-5">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 text-center">
                  When are we going? 💕
                </h2>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="
                    w-full
                    h-14
                    px-4
                    rounded-2xl
                    border border-pink-200
                    bg-white
                    text-base
                    focus:outline-none
                    focus:ring-2
                    focus:ring-pink-400
                    transition
                  "
                />

                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="
                    w-full
                    h-14
                    px-4
                    rounded-2xl
                    border border-pink-200
                    bg-white
                    text-base
                    focus:outline-none
                    focus:ring-2
                    focus:ring-pink-400
                    transition
                  "
                >
                  <option value="">🕒 Select Time</option>
                  <option>🌞 Breakfast</option>
                  <option>🍜 Lunch</option>
                  <option>🌙 Dinner</option>
                  <option>🕖 7:00 PM</option>
                  <option>🕗 8:00 PM</option>
                  <option>🕘 9:00 PM</option>
                </select>

                <button
                  onClick={() => setStep(4)}
                  className={`${buttonClass} w-full h-14 rounded-2xl text-lg font-semibold active:scale-95 transition-transform`}
                >
                  Okay, Next 💖
                </button>
              </div>
            </div>

          )}

          {step===4&&(

          <div className="w-full">

          <h2 className="text-3xl text-pink-600 font-bold mb-6">
          What should we eat? 🍽️ 
          </h2>

          <p className="text-pink-500 text-sm mb-6">
              💕 You can choose as many as you'd like!
            </p>

          <div className="grid
            grid-cols-2
            sm:grid-cols-3
            gap-3">

          {foodOptions.map(food=>(
            <div
              key={food}
              onClick={() => toggleFood(food)}
              className={`
                cursor-pointer
                rounded-2xl
                 p-4
                text-base
                sm:text-lg
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                border-2 text-center

                ${
                  foods.includes(food)
                    ? "bg-pink-500 text-white border-pink-500 shadow-lg"
                    : "bg-pink-50 border-pink-200 hover:bg-pink-100"
                }
              `}
            >
              <div className="text-4xl sm:text-5xl mb-3">
                {foodIcons[food]}
              </div>

              <div>
                {food}
              </div>
            </div>

          ))}

          </div>

          <button
          className={buttonClass}
          onClick={()=>setStep(5)}
          >

          Okay, Next

          </button>

          </div>

          )}

        {step === 5 && (
          <div className="w-full">

            <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 text-center mb-8">
              ❤️ Our Date Plan ❤️
            </h2>

            <div className="space-y-4">

              <div className="bg-pink-50 rounded-2xl p-4 sm:p-5 border border-pink-200">
                <p className="text-sm text-pink-500 font-semibold mb-1">📅 Date</p>
                <p className="text-xl font-bold text-gray-700">
                  {date || "-"}
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-4 sm:p-5 border border-pink-200">
                <p className="text-sm text-pink-500 font-semibold mb-1">🕒 Time</p>
                <p className="text-xl font-bold text-gray-700">
                  {time || "-"}
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-4 sm:p-5 border border-pink-200">
                <p className="text-sm text-pink-500 font-semibold mb-3">
                  🍽 Food
                </p>

                <div className="flex flex-wrap gap-2">
                  {foods.length > 0 ? (
                    foods.map((food) => (
                      <span
                        key={food}
                        className="bg-pink-500 text-white px-3 py-2 text-sm rounded-full text-sm font-semibold"
                      >
                        {food}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-400">No food selected.</p>
                  )}
                </div>
              </div>

            </div>

            <button
              onClick={handleCopy}
              className={buttonClass}
            >
              📋 Copy & Paste
            </button>

            <p className="text-center mt-4 text-pink-500">
              Send me this in the chat box 😊
            </p>

          </div>
        )}

        </motion.div>


        </div>

      </div>
    )}
  </>
);

}

export default App;
