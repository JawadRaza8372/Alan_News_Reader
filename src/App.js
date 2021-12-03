import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import wordsToNumbers from "words-to-numbers";
import CustomCard from "./Components/CustomCard/CustomCard";
import SecondCard from "./Components/SecondCard/SecondCard";
import logo from "./Assets/download.webp";
function App() {
  const [state, setstate] = useState([]);
  const [activeArtcl, setactiveArtcl] = useState(-1);
  const alanKey =
    "5d445801b6b9c0aded41cd4e00f1b7c62e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setstate(articles);
          setactiveArtcl(-1);
        } else if (command === "highlight") {
          setactiveArtcl((pre) => pre + 1);
        } else if (command === "open") {
          const parsedNumber =
            number?.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const newArticle = state[parsedNumber];
          if (parsedNumber > 20) {
            alanBtn().playText("Sorry. You can only access 20 articles only.");
          } else {
            window.open(newArticle?.url, "_blank");
          }
        }
      },
    });
  }, [state]);

  const otherArray = [
    { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
    {
      color: "#1565c0",
      title: "News by Categories",
      info: "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me news about Business",
    },
    {
      color: "#4527a0",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
      text: "What about PlayStation 5",
    },
    {
      color: "#283593",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
      text: "Give me the news from CNN",
    },
    {
      color: "rgba(21, 101, 192)",
      title: "For going back",
      text: "Go back",
    },
    {
      color: "#283593",
      title: "For opening specific article",
      text: "Open 5 , Open Article 5 , Open Article Number 5",
    },
  ];
  return (
    <>
      <div className="logoContainer">
        <img src={logo} alt="logo" />
        <div className="colm">
          <h3> Alan.</h3>
          <p> A.I based news reading website.</p>
        </div>
      </div>
      <div className="newsContainer">
        {state?.length > 0
          ? state?.map((dat, index) => (
              <CustomCard
                key={index}
                imglink={dat?.urlToImage}
                source={dat?.source?.name}
                title={dat?.title}
                pdate={dat?.publishedAt}
                i={index}
                url={dat?.url}
                isActive={activeArtcl}
              />
            ))
          : otherArray.map((dat, index) => (
              <SecondCard
                key={index}
                bg={dat?.color}
                title={dat?.title}
                info={dat?.info}
                text={dat?.text}
              />
            ))}
      </div>
    </>
  );
}

export default App;
