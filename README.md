# Dashboard UI

A responsive project management dashboard built with **React**, **Vite**, and **Tailwind CSS**. It provides a clean overview of project progress, top achievers, upcoming events, completed tasks, and daily schedule — all in a modern, card-based layout.

## Features

- **Responsive Layout** – Adapts seamlessly to desktop, tablet, and mobile screens.
- **Overall Progress Gauge** – Semi-circular SVG gauge showing overall completion percentage.
- **Project Progress List** – Individual progress bars with stacked team avatars.
- **Top Achievers** – Highlighted cards for top 3 performers with rank ribbons.
- **Upcoming Events** – List of upcoming tasks with date badges.
- **Completed Tasks** – Checklist with dates and checkmark icons.
- **Daily Schedule** – Meetings and deadlines with a decorative 3D weather asset.
- **Navigation Toggle** – Switch between "Dashboard" and "Projects Log" views.
- **Announcement Header** – Prominent banner with a call-to-action and microphone illustration.

## Tech Stack

- **React** – UI library
- **Vite** – Build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework
- **React Router DOM** – Client-side routing
- **React Icons** – Icon library (HiChevronRight, IoMdCheckmark, etc.)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
2. Install dependencies:
   npm install
3. Start the development server:
    npm run dev
4.Open your browser and navigate to http://localhost:5173.



## Project Structure

src/
├── Components/
│   ├── Layout/
│   │   └── Layout.jsx
│   ├── Header/
│   │   └── Header.jsx
│   ├── NavigationToggle/
│   │   └── NavigationToggle.jsx
│   ├── TopAchievers/
│   │   └── TopAchievers.jsx
│   ├── Upcoming/
│   │   └── Upcoming.jsx
│   ├── CompletedTasks/
│   │   └── CompletedTasks.jsx
│   ├── ScheduleCard/
│   │   └── ScheduleCard.jsx
│   └── Progress/
│       └── Progress.jsx
├── App.jsx
├── main.jsx
└── index.css
public/
└── Images/
    ├── 1.png ... 8.png
    ├── number1.png ... number3.png
    ├── cloud.png
    ├── background.png
    └── Microphone.png

Components Overview
Component	Description
Layout	Main layout with responsive two-column grid (desktop) and single-column stack (mobile).
NavigationToggle	Pill-shaped toggle to switch between Dashboard and Projects Log.
Header	Announcement banner for "Q1 Strategy Kick-off" with microphone illustration.
TopAchievers	Displays top 3 achievers with rank ribbons, avatars, fields, and project counts.
Upcoming	Lists upcoming events with date badges (day + month).
CompletedTasks	Shows completed tasks with dates and checkmark icons.
ScheduleCard	Daily schedule card with meetings/deadlines and a weather-themed decorative image.
Progress	Overall progress gauge (75%) and project-wise progress bars with team avatars.
Customization
Data: All content (achievers, projects, events, tasks, schedule) is defined as arrays inside the respective components. Edit these arrays to update the displayed information.

Images: Place your own images in public/Images/. The components reference paths like /Images/1.png, /Images/number1.png, etc. Replace them with your own assets.

Colors & Styling: Tailwind CSS classes are used throughout. You can adjust colors, border radii, spacing, and shadows directly in the JSX files.

License
This project is open-source and available under the MIT License.

Feel free to adjust the project name, repository URL, or any other details to match your actual setup.
   
