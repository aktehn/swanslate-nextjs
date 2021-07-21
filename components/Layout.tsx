import React from "react";
import styles from "../styles/Home.module.scss";
import SideBarComponent from "./dashboard/SideBarComponent";

type LayoutProps = {
  children?: React.ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.line}></div>

      <div className={styles.container}>
        <aside className={styles.sideBar}>
          <SideBarComponent />
        </aside>
        <div className={styles.content}>{children}</div>
      </div>

      <div className={styles.line}></div>
    </>
  );
}
