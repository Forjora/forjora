import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
// Public Pages
import LandingPage from './pages/landingpage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ThankingYou from "./pages/ThankingYou.jsx";
import ForgotPassword from "./components/Login/ForgotPassword.jsx";
// Dashboard Layout & Pages
import DashboardLayout from "./components/DashboardLayout.jsx";
import Dashboard from "./pages/Main/Dashboard.jsx";
import Discover from "./pages/Main/Discover.jsx"; 
import EventCalender from "./pages/Main/EventCalender.jsx";
import Notifications from "./pages/Main/Notifications.jsx";
import ProjectWorkspace from "./pages/Main/ProjectWorkspace.jsx";
import MiniChat from "./pages/Main/MiniChat.jsx";
import Settings from "./pages/Main/Settings.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (No Sidebar) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Thank-You" element={<ThankingYou />} />

        {/* Protected Dashboard Routes (Wraps children in DashboardLayout) */}
        <Route  element={<DashboardLayout />}>
        <Route path="/dashboardlayout" element={<Navigate to="/dashboard" replace/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/event-calender" element={<EventCalender />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/projectworkspace" element={<ProjectWorkspace />} /> 
          <Route path="/minichat" element={<MiniChat />} /> 
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;