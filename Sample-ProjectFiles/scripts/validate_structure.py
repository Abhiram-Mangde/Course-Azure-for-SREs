import os
import sys

# Example: enforce required folders and files
REQUIRED_FOLDERS = [
    'Capstone-Project',
    'Module-1-Introduction-to-Azure-SRE',
    'Module-2-Core-Azure-Services',
    'Module-3-Observability-Monitoring',
    'Module-4-Keeping-Systems-Reliable',
    'Module-5-Automation-DevOps',
    'Module-6-Security-Cost-Management',
    'Module-7-Hands-On-Projects',
    'Module-8-Career-Prep-Best-Practices',
]

missing = [folder for folder in REQUIRED_FOLDERS if not os.path.isdir(folder)]
if missing:
    print(f"Missing required folders: {', '.join(missing)}")
    sys.exit(1)
else:
    print("All required folders are present.")
    sys.exit(0)
