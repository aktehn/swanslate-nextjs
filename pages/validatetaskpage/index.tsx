import React from "react";
import Layout from "../../components/Layout";

import TaskCard from "../../components/taskComponents/TaskCard";

export default function ValidateTaskPage() {
  return (
    <Layout>
      <div>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </Layout>
  );
}
