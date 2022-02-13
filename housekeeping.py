import os
import jsbeautifier

# Define JSBeautifier Options
JSBEAUTIFIER_OPTS = jsbeautifier.default_options()
JSBEAUTIFIER_OPTS.indent_size = 2
JSBEAUTIFIER_OPTS.preserve_newlines = False

# Fetch the List of Directories in the Current Working Directory
listOfDirectories = [item for item in os.scandir(".") if item.is_dir()]
for directory in listOfDirectories:
    # Ignore the Directories whose name starts with a Period (.)
    if directory.name.startswith("."): continue

    print(f"Started House-Keeping in [{directory.name}]...")
    
    # Change the TXT Files to JS Files
    print(f"\tChanging File Extension for TXT File(s)...", end = "")
    listOfFiles = [item for item in os.scandir(directory) if item.is_file()]
    for file in listOfFiles:
        # If the File Extension is 't .txt', Change the File Extension to '.js'
        filePathTokens = os.path.splitext(file)
        fileExtension = filePathTokens[1]
        if fileExtension == ".txt": os.rename(file, filePathTokens[0] + ".js")
    print(f"DONE!")

    # Beautify JS Code via JSBeautifier
    print(f"\tBeautifying JS Code...", end = "")
    listOfJSFiles = [item for item in os.scandir(directory) if item.is_file()]
    for jsFile in listOfJSFiles:
        beautifiedJSCode = jsbeautifier.beautify_file(jsFile, JSBEAUTIFIER_OPTS)
        with open(jsFile, 'w+', newline = '\r\n') as f:
            f.write(beautifiedJSCode)
    print(f"DONE!")

    print("DONE!\n")