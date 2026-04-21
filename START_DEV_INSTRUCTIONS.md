## How to Run Dev Server Independently

### Option 1: Double-Click the Batch File (RECOMMENDED)
1. Go to your project folder: `applywizz-moulikamanthripragada-5259-main`
2. **Double-click** `start-dev.bat`
3. A command window will open - **KEEP IT RUNNING**
4. Your site will be live at: **http://localhost:8080/**
5. You can now **close VS Code** - the server keeps running!
6. To stop the server, close the command window

### Option 2: Run in Windows Task Scheduler
1. Open Task Scheduler
2. Create a new task to run `start-dev.bat` at startup
3. Your server will auto-start when you boot Windows

### Option 3: Create a Shortcut
1. Right-click `start-dev.bat` → "Send to" → "Desktop (create shortcut)"
2. Now you have a shortcut on your desktop
3. Double-click it anytime to start the server

---

**Remember:** Keep the command window open while you want your site running. 
As long as that window is open, your portfolio is accessible at **http://localhost:8080/**
