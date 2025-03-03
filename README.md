# Cricket Uncovered 🏏📊

## 📌 Overview
**Cricket Uncovered** is a data-driven analytics project that extracts, cleans, transforms, and visualizes cricket player performance data to identify the best openers, middle-order batsmen, finishers, and bowlers. Using Power BI dashboards, the project helps analyze key performance metrics and selects the **Best XI** players from a tournament.

This project integrates **data scraping, data processing, and dashboard visualization** to bring meaningful insights to cricket enthusiasts, analysts, and coaches.

---

## ✨ Features
- 🏏 **Player Performance Analysis:** Identify top-performing batsmen and bowlers.
- 📊 **Power BI Dashboard:** Interactive visualization of player statistics.
- 📈 **Best XI Selection:** Automated logic to filter the best players in each category.
- 🔍 **Data Extraction:** Web scraping from ESPN using Bright Data.
- 🛠 **Data Processing:** Cleaned and transformed using Pandas and Power Query.
- 🌍 **Web Integration:** Hosted dashboard on a custom-built HTML/CSS website.

---

## 🛠️ Technologies Used
- **Python** 🐍 (for data extraction & cleaning)
- **Pandas** 🏗️ (for data processing)
- **Bright Data** 🌍 (for web scraping)
- **Power Query** 🔄 (for data transformation)
- **DAX (Data Analysis Expressions)** 📊 (for data modeling)
- **Power BI** 📉 (for dashboard visualization)
- **HTML & CSS** 🌐 (for website front-end)

---

## 🚀 Installation & Setup
Follow these steps to set up the project on your local machine:

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-username/cricket-uncovered.git
 cd cricket-uncovered
```

### 2️⃣ Install Required Python Libraries
```sh
pip install pandas requests beautifulsoup4 powerbiclient
```

### 3️⃣ Set Up Data Extraction
- Ensure **Bright Data** is configured.
- Modify `scraper.py` to include your API keys and scraping configurations.
- Run the script to extract data:
```sh
python scraper.py
```

### 4️⃣ Clean & Transform Data
```sh
python data_processing.py
```

### 5️⃣ Load Data into Power BI
- Open `Cricket_Uncovered.pbix` in Power BI.
- Refresh data and apply **DAX calculations**.

### 6️⃣ View the Dashboard
- Publish the Power BI dashboard online.
- Embed it into the `index.html` website.

---

## 🎥 Project Execution

### 🔹 Power BI Dashboard
![ODI Final XI](https://github.com/user-attachments/assets/a5ed862c-14eb-44b5-af1d-a8dc8cc8366e)
![T20i Final XI](https://github.com/user-attachments/assets/ab7028c8-7f07-43fb-8a5e-cb55e6ef3149)

### 🔹 Final Web Dashboard
![Opening Page](https://github.com/user-attachments/assets/4d56dd2e-2967-4d9e-9f21-480d4717bbf6)

---

## 📌 System Architecture & Diagrams
### 1️⃣ ER Diagram
![ER Diagram](https://github.com/user-attachments/assets/4d56a11b-da57-4e26-be57-6d3010d2f9ef)

### 2️⃣ Use Case Diagram
![Use Case Diagram](https://github.com/user-attachments/assets/07fc4777-1b0a-4299-88b1-b75f3f1c5f85)

### 3️⃣ Data Flow Diagram (DFD)
![DFD](https://github.com/user-attachments/assets/f49675ce-6616-4b4a-88d6-6d4f3de615a4)


### 4️⃣ Activity Diagram
![Activity Diagram](https://github.com/user-attachments/assets/9477f8be-c689-4b41-ae5f-383ff9f9eee9)
---

## 📈 Power BI Dashboard Features
- **Best Openers**: Based on strike rate and average.
- **Best Middle Order**: Players ranked on consistency and impact.
- **Best Finishers**: Evaluated based on death-over performance.
- **Best Bowlers**: Ranked by economy rate, wickets taken, and impact.
- **Final Best XI**: Automatically selected based on tournament performance.

---

## 📌 Future Enhancements
- ✅ Add real-time data updates.
- ✅ Introduce AI-driven player ranking.
- ✅ Expand to multiple cricket formats (ODI, T20, Test).
- ✅ Provide player comparison tool.

---

## 🤝 Contributing
Feel free to **fork** this repository and contribute! Steps to contribute:
1. Fork the repository.
2. Create a new branch.
3. Make changes and commit.
4. Open a pull request.

---


