import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "@/shared/components/layout/MainLayout";
import ProposalStepperWrapper from "@/features/proposal/ProposalStepperWrapper";
import ReportStepperWrapper from "@/features/report/ReportStepperWrapper";
import DeliveryStepperWrapper from "@/features/delivery/DeliveryStepperWrapper";
import ProjectStepperWrapper from "@/features/project/ProjectStepperWrapper";
import STEMLabReportStepperWrapper from "@/features/stemlab_report/STEMLabReportStepperWrapper";
import FLPReportStepperWrapper from "@/features/flp_report/FLPReportStepperWrapper";
import EventPostsStepperWrapper from "@/features/event_posts/EventPostsStepperWrapper";
import AdminPanel from "@/features/admin/AdminPanel";
import Login from "@/shared/auth/Login";
import Home from "@/pages/Home";
import ProtectedRoute from "@/shared/auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event_post",
        element: <EventPostsStepperWrapper />,
      },
      {
        path: "/proposal",
        element: <ProposalStepperWrapper />,
      },
      {
        path: "/flp-report",
        element: <FLPReportStepperWrapper />,
      },
      {
        path: "/stemlab-report",
        element: <STEMLabReportStepperWrapper />,
      },
      {
        path: "/report",
        element: <ReportStepperWrapper />,
      },
      {
        path: "/delivery",
        element: <DeliveryStepperWrapper />,
      },
      {
        path: "/project",
        element: <ProjectStepperWrapper />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />, // no layout (intentional)
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
