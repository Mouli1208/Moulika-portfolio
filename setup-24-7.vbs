Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

' Path to the batch file
batchFilePath = "c:\Users\mouli\applywizz-moulikamanthripragada-5259-main\applywizz-moulikamanthripragada-5259-main\start-server-24-7.bat"

' Check if batch file exists
If objFSO.FileExists(batchFilePath) Then
    ' Create the scheduled task via schtasks command
    taskName = "ApplyWizz-Dev-Server-24-7"
    cmd = "cmd /c schtasks /create /tn """ & taskName & """ /tr """ & batchFilePath & """ /sc onstart /rl highest /f"
    
    objShell.Run cmd, 0, True
    
    MsgBox "✓ Task created successfully!" & vbCrLf & vbCrLf & _
           "Your dev server will now:" & vbCrLf & _
           "• Start automatically at system boot" & vbCrLf & _
           "• Run 24/7 in the background" & vbCrLf & _
           "• Auto-restart if it crashes" & vbCrLf & vbCrLf & _
           "Access your site at: http://localhost:8080/", 0, "ApplyWizz Server Setup"
Else
    MsgBox "Error: Batch file not found at:" & vbCrLf & batchFilePath, 16, "File Not Found"
End If
