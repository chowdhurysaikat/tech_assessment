# Electric Vehicle Dashboard

This project provides a dashboard that visualizes insights about Electric Vehicle (EV) population data. It includes a backend API built with Flask for data processing and a React-based frontend for visualizations.

## Features
- **Top EV Manufacturers**: Bar chart of the most popular manufacturers.
- **EV Type Distribution**: Pie chart showing the distribution of EV types (e.g., BEVs, PHEVs).
- **Model Year Trends**: Line chart of EV adoption over time.
- **Top Cities**: Bar chart of cities with the highest EV registrations.

## Local Setup

### Prerequisites
- Python 3.7+
- Node.js 14+
- Git

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ev-dashboard-backend.git
   cd ev-dashboard-backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask app:
   ```bash
   python app.py
   ```
5. Access the API at `http://localhost:5000`.

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ev-dashboard-frontend.git
   cd ev-dashboard-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Access the dashboard at `http://localhost:3000`.

## Folder Structure
```
project-root/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Procfile
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
```
