import React from "react";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AnalysisQuestions from "./AnalysisQuestions";
import AnalysisPoll from "./AnalysisPoll";

export default function Home() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analysis" element={<Analytics />} />
        <Route path="/analysis/question" element={<AnalysisQuestions />} />
        <Route path="/analysis/poll" element={<AnalysisPoll />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}
