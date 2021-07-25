import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Link from "next/link";
import { Button, IconButton } from "@material-ui/core";
import Image from "next/image";
import logo from "../../public/images/logoRight-1.png";
import button1 from "../../public/images/mtt2Passive.png";
import button2 from "../../public/images/vt-2.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    height: "96vh",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  buttons: {
    width: "%100",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      margin: "5px",
      flexDirection: "row",
    },
  },
  btn: {
    fontSize: "4rem",
    margin: "1rem auto",
    padding: 0,
    width: "78px",
    height: "78px",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#ececec;",
      transition: "transform 0.2s ease-in",
      transform: "translateY(-15px)",
    },
    [theme.breakpoints.down("md")]: {
      height: "50px",
    },
  },
  logo: {
    display: "block",
    margin: "1rem auto",
    width: "60%",
    height: "80px",
    transition: "transform 0.2s ease-in",
    padding: 0,
    [theme.breakpoints.down("md")]: {
      margin: "1rem 0",
      height: "50px",
      width: "100 px",
    },
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#ececec;",
      transform: "translateY(-15px)",
    },
  },
}));

export default function SideBarComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton className={classes.logo}>
        <Link href="/" passHref>
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </Link>
      </IconButton>
      <div className={classes.buttons}>
        <IconButton className={classes.btn}>
          <Link href="/validatetaskpage" passHref>
            <Image
              src={button1}
              alt="Validate-Task-Button"
              layout="fill"
              objectFit="contain"
              // width={78}
              // height={78}
            />
          </Link>
        </IconButton>
        <IconButton className={classes.btn}>
          <Link href="/" passHref>
            <Image
              src={button2}
              alt="Translate-Task-Button"
              layout="fill"
              objectFit="contain"
              // width={78}
              // height={78}
            />
          </Link>
        </IconButton>
        <Button variant="contained" color="secondary">
          <Link href="/translate">
            <a>Translate</a>
          </Link>
        </Button>
      </div>
    </div>
  );
}
