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
"mt-8 w-full rounded-full bg-pink-600 hover:bg-pink-700 text-white py-4 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg";


    const foodOptions = [
    "Samgyupsal",
    "Coffee",
    "Ramen",
    "Burgers",
    "Chicken Dinner",
  ];

  const foodIcons = {
  "Samgyupsal": "🥩",
  "Coffee": "☕",
  "Ramen": "🍜",
  "Burgers": "🍔",
  "Chicken Dinner": "🍗",
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
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

        <img
          src={gif4}
          alt=""
          className="absolute top-6 right-6 w-16 md:w-20"
        />

        <motion.img
          src={gif1}
          alt="cute"
          className="w-72 md:w-96 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-pink-600 mb-12"
        >
          Hey, do you wanna go out with me? 💕
        </motion.h1>

        <div className="relative flex items-center justify-center gap-6 h-24 w-full">

          <button
            onClick={() => {
              const audio = new Audio(bgaudio);
              audio.play();
              setStep(2);
            }}
            className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-xl transition-all hover:scale-105"
          >
            YES ❤️
          </button>

          <button
            style={noButtonStyle}
            onMouseEnter={handleNoButtonHover}
            onTouchStart={handleNoButtonTouch}
            className="bg-gray-400 hover:bg-gray-500 text-white px-12 py-4 rounded-full text-2xl font-bold transition-all absolute"
          >
            NO 😝
          </button>

        </div>

      </div>
    ) : (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex justify-center items-center p-6">

        <div className="w-full max-w-2xl">

          {/* Progress */}

          <div className="mb-6">

            <p className="text-center text-pink-700 font-semibold">
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
          className="bg-white rounded-3xl shadow-2xl p-8"
        >

          {step === 2 && (

          <>
          <h1 className="...">
          Yayyy! can't wait to create unforgettable memories together!
          </h1>

          <img
            src={gif6}
            alt=""
            className="mx-auto w-60 mb-6"
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

          <div className="w-full max-w-md mx-auto">

          <h2 className="text-3xl text-pink-600 font-bold mb-6">
          When are we going? 💕
          </h2>

          <input
          type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          className="w-full p-3 rounded-xl border mb-4"
          />

          <select
          value={time}
          onChange={(e)=>setTime(e.target.value)}
          className="w-full p-3 rounded-xl border"
          >

          <option value="">Select Time</option>

          <option>Breakfast 🌞</option>

          <option>Lunch 🍜</option>

          <option>Dinner 🌙</option>

          <option>7:00 PM</option>

          <option>8:00 PM</option>

          <option>9:00 PM</option>

          </select>

          <button
          className={buttonClass}
          onClick={()=>setStep(4)}
          >

          Okay, Next

          </button>

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

          <div className="grid grid-cols-2 gap-4">

          {foodOptions.map(food=>(
            <div
              key={food}
              onClick={() => toggleFood(food)}
              className={`
                cursor-pointer
                rounded-2xl
                p-5
                text-lg
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
              <div className="text-5xl mb-3">
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

            <h2 className="text-4xl font-bold text-pink-600 text-center mb-8">
              ❤️ Our Date Plan ❤️
            </h2>

            <div className="space-y-4">

              <div className="bg-pink-50 rounded-2xl p-5 border border-pink-200">
                <p className="text-sm text-pink-500 font-semibold mb-1">📅 Date</p>
                <p className="text-xl font-bold text-gray-700">
                  {date || "-"}
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-5 border border-pink-200">
                <p className="text-sm text-pink-500 font-semibold mb-1">🕒 Time</p>
                <p className="text-xl font-bold text-gray-700">
                  {time || "-"}
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-5 border border-pink-200">
                <p className="text-sm text-pink-500 font-semibold mb-3">
                  🍽 Food
                </p>

                <div className="flex flex-wrap gap-2">
                  {foods.length > 0 ? (
                    foods.map((food) => (
                      <span
                        key={food}
                        className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
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
