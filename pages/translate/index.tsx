import {
  Button,
  Container,
  Card,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));

export default function Translate() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [langList, setLangList] = useState([]);
  const [selectedLang, setSelectedLang] = useState("");

  useEffect(() => {
    getLangList().then(res => {
      setLangList(res.langs);
    });
  }, []);

  return (
    <Container className={classes.container}>
      <h1>Translate API Tester</h1>
      <TextField
        variant="outlined"
        color="primary"
        autoFocus={true}
        fullWidth={true}
        onChange={e => setText(e.target.value)}
      />

      <FormControl>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLang}
          onChange={e => setSelectedLang(e.target.value as string)}
        >
          {Object.keys(langList).map((langKey, i) => (
            <MenuItem key={langKey} value={langKey}>
              {Object.values(langList)[i]}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={e =>
            getReq(text, selectedLang).then(data => {
              console.log(data);
              setTranslatedText(data.translateData.text[0]);
            })
          }
        >
          Translate
        </Button>
      </FormControl>
      <Card>{translatedText}</Card>
    </Container>
  );
}

async function getReq(text: string, target: string) {
  const request = await axios(
    `http://localhost:3000/api/translator?text=${text}&target=${target}`
  );
  const data: { translateData: TranslateData } = request.data;
  return data;
}

async function getLangList() {
  const key =
    "trnsl.1.1.20210425T183943Z.bc52f65182cd75b0.3a3dd388834fee3442ea491a8f8864f563feac79";

  const request = await axios(
    `https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${key}&ui=en`
  );
  return request.data;
}

type TranslateData = {
  code: number;
  lang: string;
  text: string[];
};
