import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Paper, InputBase, IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import axios from "axios";

function Dictionary() {
  const [text, setText] = useState(undefined);
  const [dictData, setDictData] = useState([]);

  const playAudio = (audioFile) => {
    let audio = new Audio(audioFile);
    audio.play();
  };

  useEffect(() => {
    Search();
  }, []);

  const Search = (enteredText) => {
    if (enteredText != undefined) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${enteredText}`)
        .then((res) => setDictData(res.data))
        .catch((err) => console.log(err));

      return enteredText;
    }
  };

  console.log(dictData);
  return (
    <div className="dictionary">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="150px"
        minHeight="150px"
        p="30px 150px"
        bgcolor="#52b788"
        borderRadius="10px"
        border="none"
        m={"20px 0"}
      >
        <Paper className="input-container" elevation={10}>
          <InputBase
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text-input"
            placeholder="Search Dictionary"
          />
          <IconButton onClick={() => Search(text)}>
            <SearchIcon />
          </IconButton>
        </Paper>

        {text !== undefined
          ? dictData.map((item) => (
              <Paper className="meaning" elevation={10}>
                <Box width="300px">
                  <h1>
                    {item.word}{" "}
                    <IconButton
                      onClick={() => playAudio(item.phonetics[0].audio)}
                    >
                      <VolumeUpIcon />
                    </IconButton>
                  </h1>
                </Box>

                <p>{item.meanings[0].definitions[0].definition}</p>
                <p>
                  <b>Example:</b> {item.meanings[0].definitions[0].example}
                </p>
              </Paper>
            ))
          : " "}
      </Box>
    </div>
  );
}

export default Dictionary;
