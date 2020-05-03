"""
A Small Utility that Changes the File Name Format & Extension
of the Downloaded Source Code from Free Code Camp's Website.
"""

import os

""" CONSTANTS """
EXPECTED_FILE_EXTENSION = '.txt'
TARGET_FILE_EXTENSION = '.js'
TARGET_FILE_NAME_WORD_DELIMITER = ''

# Obtain the List of all the File(s) in the Current Directory
fFullNames = [fName for fName in os.listdir('.') if os.path.isfile(fName)]

# Iterate over the File Names
for fFullName in fFullNames:
    # Extract File Name and Extension
    fName, fExtension = os.path.splitext(fFullName)

    # If the Extension is as Expected
    if fExtension.lower() == EXPECTED_FILE_EXTENSION:
        # Split Hyphen Separated String
        fNameTokens = fName.split('-')

        # Convert Words to Title Case
        fNameTokensTitleCase = [fNameToken.title() for fNameToken in fNameTokens]

        # Join Words using the Appropriate Delimiter
        fNameTitleCase = TARGET_FILE_NAME_WORD_DELIMITER.join(fNameTokensTitleCase)

        # Combine the File Name with its Target Extension
        fNameTitleCaseWExtension = fNameTitleCase + TARGET_FILE_EXTENSION

        # Attempt to Rename File, Notify in Case of Error
        try:
            os.rename(fFullName, fNameTitleCaseWExtension)
        except OSError as e:
            print(f'Failed to Rename File: {fFullName}!\nException Cause: {e}')

