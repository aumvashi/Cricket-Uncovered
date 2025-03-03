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
### 🔹 Data Extraction
(Add screenshot/video here)

### 🔹 Data Cleaning & Processing
(Add screenshot/video here)

### 🔹 Power BI Dashboard
(Add screenshot/video here)

### 🔹 Final Web Dashboard
(Add screenshot/video here)

---

## 📌 System Architecture & Diagrams
### 1️⃣ ER Diagram
![ER Diagram](path_to_er_diagram.png)

### 2️⃣ Use Case Diagram
![Use Case Diagram](path_to_use_case_diagram.png)

### 3️⃣ Data Flow Diagram (DFD)
![DFD](path_to_dfd.png)

### 4️⃣ Class Diagram
![Class Diagram](path_to_class_diagram.png)

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

## 📜 License
This project is licensed under the MIT License - see the **LICENSE** file for details.

---

## 📬 Contact
For any queries or collaborations:
📧 Email: [your-email@example.com](mailto:your-email@example.com)
🌐 Website: [your-website.com](https://your-website.com)
