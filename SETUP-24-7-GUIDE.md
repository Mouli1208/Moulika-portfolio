# 24/7 Server Setup Options

## 🚀 EASIEST METHOD - Automatic Startup (Recommended)

### Step 1: Run the Setup Script
1. **Right-click** `setup-24-7.vbs` in your project folder
2. **Select "Open with" → "Windows Script Host"**
3. A popup will confirm the task was created ✓

### Step 2: That's It!
Your server will now:
- ✅ Start automatically when Windows boots up
- ✅ Run 24/7 in the background
- ✅ Auto-restart if it crashes
- ✅ Be accessible at **http://localhost:8080/**

---

## 📋 MANUAL SETUP (If Script Doesn't Work)

### Option A: Windows Task Scheduler
1. Press `Win + R` and type: `taskschd.msc`
2. Click **"Create Task"** on the right panel
3. Set these options:
   - **Name:** `ApplyWizz-Dev-Server`
   - **Trigger:** Set to **"At startup"**
   - **Action:** Set program to `c:\Users\mouli\applywizz-moulikamanthripragada-5259-main\applywizz-moulikamanthripragada-5259-main\start-server-24-7.bat`
   - Check **"Run with highest privileges"**
4. Click **OK**

### Option B: Startup Folder
1. Press `Win + R` and type: `shell:startup`
2. Create a **shortcut** to `start-server-24-7.bat`
3. Paste it in the startup folder
4. Server runs when you log in

---

## 🛠️ MANAGEMENT COMMANDS

### Check if server is running:
```
cmd /c tasklist | findstr npm
```

### View running task:
```
cmd /c schtasks /query /tn "ApplyWizz-Dev-Server-24-7"
```

### Delete the scheduled task:
```
cmd /c schtasks /delete /tn "ApplyWizz-Dev-Server-24-7" /f
```

---

## 📝 Files Created:
- `start-server-24-7.bat` - Runs dev server with auto-restart
- `setup-24-7.vbs` - Automates the setup process
- `ecosystem.config.js` - PM2 configuration (optional)

---

**Your site will be live 24/7 at:** `http://localhost:8080/`
