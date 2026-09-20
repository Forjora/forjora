import { useState } from "react";
import {
  Bell,
  Folder,
  CalendarDays,
  FileText,
  CheckCircle,
  Users,
  ShieldCheck,
} from "lucide-react";

import "../../styles/MainCss/notifications.css";

const notifications = [
  {
    section: "Today",
    items: [
      {
        type: "project",
        title: "New member request for your project",
        message:
          'Ananya Sharma has requested to join "Forjora Web Platform" as a Frontend Developer.',
        time: "10:30 AM",
        button: "View Request",
        unread: true,
      },
      {
        type: "event",
        title: "Upcoming event reminder",
        message:
          '"DevFest 2026" is starting in 2 days. Don’t forget!',
        time: "09:15 AM",
        button: "View Event",
        unread: true,
      },
      {
        type: "research",
        title: "Research paper shared with you",
        message:
          'Rohan Singh shared a research paper "A Survey on LLMs in Software Engineering".',
        time: "08:45 AM",
        button: "View Paper",
        unread: true,
      },
    ],
  },

  {
    section: "Yesterday",
    items: [
      {
        type: "success",
        title: "Milestone completed",
        message:
          '"AI Study Buddy" reached the milestone "AI Integration".',
        time: "Yesterday, 8:40 PM",
        unread: true,
      },
      {
        type: "mention",
        title: "You were mentioned in a discussion",
        message:
          'Ishita Verma mentioned you in the project "Blockchain for Healthcare".',
        time: "Yesterday, 6:25 PM",
        unread: true,
      },
      {
        type: "event",
        title: "Event registration confirmed",
        message:
          'You have successfully registered for "HackOverflow 2026".',
        time: "Yesterday, 11:45 AM",
      },
    ],
  },

  {
    section: "Earlier this week",
    items: [
      {
        type: "project",
        title: "Project status updated",
        message:
          'The status of "Campus Connect" has been updated to "In Progress".',
        time: "May 24, 2026 · 9:30 PM",
      },
      {
        type: "research",
        title: "New research paper recommended",
        message:
          "Based on your interests, we found a paper you might like.",
        time: "May 24, 2026 · 3:20 PM",
      },
      {
        type: "mention",
        title: "New team member joined",
        message:
          'Arjun Patel joined your project "Hackathon Tracker".',
        time: "May 23, 2026 · 7:10 PM",
      },
    ],
  },

  {
    section: "Earlier",
    items: [
      {
        type: "notification",
        title: "Welcome to Forjora! 🎉",
        message:
          "Thanks for joining Forjora. Let's build something amazing together!",
        time: "May 22, 2026 · 10:00 AM",
      },
      {
        type: "verified",
        title: "Email verified successfully",
        message:
          "Your email has been verified. You're all set!",
        time: "May 22, 2026 · 9:58 AM",
      },
    ],
  },
];

const iconMap = {
  project: Folder,
  event: CalendarDays,
  research: FileText,
  success: CheckCircle,
  mention: Users,
  notification: Bell,
  verified: ShieldCheck,
};

function Notifications() {

  const [activeTab, setActiveTab] = useState("All");

  const [data, setData] = useState(notifications);

  const markAllAsRead = () => {
    const updated = data.map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        unread: false,
      })),
    }));

    setData(updated);
  };

  const unreadCount = data.reduce(
    (total, section) =>
      total +
      section.items.filter((item) => item.unread).length,
    0
  );

  const filterItems = (items) => {

    if (activeTab === "All") {
      return items;
    }

    if (activeTab === "Unread") {
      return items.filter((item) => item.unread);
    }

    if (activeTab === "Projects") {
      return items.filter(
        (item) =>
          item.type === "project" ||
          item.type === "mention"
      );
    }

    if (activeTab === "Events") {
      return items.filter(
        (item) => item.type === "event"
      );
    }

    if (activeTab === "Research") {
      return items.filter(
        (item) => item.type === "research"
      );
    }

    return items;
  };

  return (

    <div className="notifications-page">

      {/* =========================
          PAGE TITLE
      ========================= */}

      <div className="notifications-title">

        <div className="title-icon">
          <Bell size={27} />
        </div>

        <div>
          <h1>Notifications</h1>

          <p>
            Stay updated with everything that matters to you.
          </p>
        </div>

      </div>


      {/* =========================
          NOTIFICATION CARD
      ========================= */}

      <div className="notifications-container">

        {/* TOP TABS */}

        <div className="notifications-tabs">

          <div className="tabs-left">

            {[
              "All",
              "Projects",
              "Events",
              "Research",
              "Unread",
            ].map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={
                  activeTab === tab
                    ? "tab active"
                    : "tab"
                }
              >

                {tab}

                {tab === "Unread" && (
                  <span className="unread-number">
                    {unreadCount}
                  </span>
                )}

              </button>

            ))}

          </div>


          <button
            className="mark-read"
            onClick={markAllAsRead}
          >

            <CheckCircle size={16} />

            Mark all as read

          </button>

        </div>


        {/* =========================
            NOTIFICATION SECTIONS
        ========================= */}

        <div className="notifications-list">

          {data.map((section) => {

            const filteredItems =
              filterItems(section.items);

            if (filteredItems.length === 0) {
              return null;
            }

            return (

              <div
                className="notification-section"
                key={section.section}
              >

                <h3>
                  {section.section}
                </h3>


                <div className="notification-group">

                  {filteredItems.map((item, index) => {

                    const Icon =
                      iconMap[item.type] || Bell;

                    return (

                      <div
                        className={
                          item.unread
                            ? "notification unread"
                            : "notification"
                        }
                        key={index}
                      >

                        {/* UNREAD DOT */}

                        {item.unread && (
                          <span className="unread-dot"></span>
                        )}


                        {/* ICON */}

                        <div
                          className={`notification-icon ${item.type}`}
                        >
                          <Icon size={23} />
                        </div>


                        {/* TEXT */}

                        <div className="notification-text">

                          <h4>
                            {item.title}
                          </h4>

                          <p>
                            {item.message}
                          </p>

                          <span>
                            {item.time}
                          </span>

                        </div>


                        {/* ACTION BUTTON */}

                        {item.button && (

                          <button className="notification-button">
                            {item.button}
                          </button>

                        )}

                      </div>

                    );

                  })}

                </div>

              </div>

            );

          })}


          <div className="notifications-end">
            You've reached the end of your notifications ✨
          </div>

        </div>

      </div>

    </div>
  );
}

export default Notifications;