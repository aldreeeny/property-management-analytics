# Property Management Analytics Dashboard

## Overview

This Google Apps Script project creates a comprehensive property management analytics dashboard by processing data from multiple Google Sheets containing unit vacancy information, rental applications, and property directory data. The system generates daily reports and analytics for property managers to track occupancy, applications, and performance metrics.

## Features

- **Multi-Source Data Integration**: Combines data from three separate Google Sheets
- **Unit Vacancy Tracking**: Monitors unit status, vacancy periods, and rent readiness
- **Rental Application Analytics**: Tracks applications by manager and lead source
- **Property Manager Performance**: Generates daily counts and metrics per manager
- **Automated Reporting**: Creates daily count sheets with timestamped data
- **Address Matching**: Intelligently matches properties across different data sources
- **Real-time Analytics**: Provides up-to-date insights on property performance

## File Structure

- **`.clasp.json`**: Google Apps Script CLI configuration
- **`appsscript.json`**: Apps Script manifest file
- **`Code.js`**: Main processing functions for unit vacancies and rental applications
- **`Constants.js`**: Configuration for source spreadsheet IDs
- **`GetData.js`**: Functions to retrieve and parse data from source sheets
- **`Spreadsheet.js`**: Functions to write processed data to output sheets
- **`Counts.js`**: Analytics and counting functions for daily reports
- **`Util.js`**: Utility functions for address parsing and date calculations

## Quick Start

### Prerequisites

1. **Google Apps Script Project**: Create a new Google Apps Script project
2. **Source Google Sheets**: Three source spreadsheets with specific data structures
3. **Target Google Sheet**: Main dashboard spreadsheet with predefined sheet names

### Configuration

1. **Replace Placeholders**: Update the following placeholders in the code:
   - `YOUR_SCRIPT_ID_HERE` in `.clasp.json`
   - `YOUR_UNIT_VACANCY_SHEET_ID` in `Constants.js`
   - `YOUR_RENTAL_APPLICATIONS_SHEET_ID` in `Constants.js`
   - `YOUR_PROPERTY_DIRECTORY_SHEET_ID` in `Constants.js`
   - Replace `MANAGER_NAME_1`, `MANAGER_NAME_2`, etc. in `Counts.js` with actual manager names

2. **Source Sheets Setup**:
   - **Unit Vacancy Sheet**: Contains unit vacancy data with columns for address, unit, city, state, zip, bed/bath, sqft, unit status, days vacant, scheduled rent, rent ready, last move out, available on, next move in
   - **Rental Applications Sheet**: Contains application data with columns for address, unit, city, state, zip, received date, desired move in, assigned user, lead source, pet kinds
   - **Property Directory Sheet**: Contains property information with columns for address, city, state, zip, units, site manager

3. **Target Sheet Setup**:
   Create sheets with the following names:
   - "Unit Vacancy"
   - "Rental Applications"
   - "Unit Vacancy Daily Count"
   - "Unit Status Daily Count"
   - "Applications Per Manager Daily Count"
   - "Applications Per Lead Source Daily Count"

## Usage

### Main Functions

1. **`unitVacancies()`**: Processes unit vacancy data and generates analytics
2. **`rentalApplications()`**: Processes rental application data and generates analytics

### Data Processing Flow

#### Unit Vacancy Processing:
1. Retrieves data from unit vacancy source sheet
2. Matches properties with property directory to get site manager information
3. Populates "Unit Vacancy" sheet with combined data
4. Generates daily count reports for:
   - Vacant units per manager
   - Rent-ready units per manager
   - Incoming move-outs per manager
   - Unit status counts

#### Rental Application Processing:
1. Retrieves data from rental applications source sheet
2. Matches properties with property directory to get site manager information
3. Populates "Rental Applications" sheet with combined data
4. Generates daily count reports for:
   - Applications per manager
   - Applications per lead source

### Analytics Generated

- **Daily Vacancy Counts**: Tracks vacant, rent-ready, and incoming move-out units per manager
- **Unit Status Distribution**: Monitors unit status categories (Vacant-Unrented, Notice-Rented, etc.)
- **Application Performance**: Tracks application volume by manager and lead source
- **Historical Data**: Maintains daily snapshots for trend analysis

## API Reference

### Core Processing Functions

- `unitVacancies()`: Main function for processing unit vacancy data
- `rentalApplications()`: Main function for processing rental application data

### Data Retrieval Functions

- `getUnitVacancyData()`: Retrieves data from unit vacancy source sheet
- `getRentalApplicationsData()`: Retrieves data from rental applications source sheet
- `getPropertyDirectoryData()`: Retrieves data from property directory source sheet
- `getUnitVacancyDataSpreadsheetData()`: Retrieves processed data from target sheet
- `getRentalApplicationsDataSpreadsheetData()`: Retrieves processed application data from target sheet

### Analytics Functions

- `unitVacancyCountSheet()`: Generates daily vacancy count reports
- `unitStatusCount()`: Generates daily unit status count reports
- `applicationsManagerCount()`: Generates daily application count by manager
- `applicationsLeadSourceCount()`: Generates daily application count by lead source

### Utility Functions

- `getAddress()`: Parses address strings to extract full addresses
- `getAddress2()`: Parses address strings to extract address components
- `isWithin30Days()`: Checks if a date is within 30 days from current date

### Spreadsheet Functions

- `writeToSpreadsheet()`: Writes unit vacancy data to target sheet
- `writeToSpreadsheet2()`: Writes rental application data to target sheet
- `writeToSpreadsheet3()`: Writes unit vacancy daily count data
- `writeToSpreadsheet4()`: Writes unit status daily count data
- `writeToSpreadsheet5()`: Writes applications per manager daily count data
- `writeToSpreadsheet6()`: Writes applications per lead source daily count data

## Data Schema

### Unit Vacancy Data Columns:
- Address, City, State, Zip
- Bed/Bath, Square Footage
- Unit Status, Days Vacant
- Scheduled Rent, Rent Ready
- Last Move Out, Available On, Next Move In
- Site Manager

### Rental Application Data Columns:
- Address, Unit, City, State, Zip
- Received Date, Desired Move In
- Assigned User, Lead Source, Pet Kinds
- Site Manager

### Unit Status Categories:
- Vacant-Unrented
- Notice-Rented
- Notice-Unrented
- Vacant-Rented

## Security & Privacy

- **Spreadsheet IDs**: Keep source spreadsheet IDs private
- **Script ID**: Keep the script ID private
- **Manager Names**: Replace placeholder names with actual manager names
- **Data Access**: Ensure appropriate permissions for all source and target sheets
- **Data Privacy**: Ensure compliance with local data protection regulations

## Troubleshooting

### Common Issues

1. **Sheet Not Found**: Ensure all required sheet names exist exactly as specified
2. **Data Format Issues**: Verify source sheet column structure matches expected format
3. **Address Matching Failures**: Check address format consistency across source sheets
4. **Permission Errors**: Ensure script has access to all source and target sheets
5. **Date Format Issues**: Verify date formats are consistent across all sheets

### Debugging Tips

- Check Apps Script logs for detailed execution information
- Test with small datasets before running on full data
- Verify address matching logic for your specific address formats
- Monitor data processing time for large datasets

## Development

### Best Practices

- Test with individual functions before running complete workflows
- Use Apps Script logs for debugging and monitoring
- Implement error handling for data validation
- Consider implementing data validation checks
- Monitor API quotas and execution time limits

### Performance Optimization

- Batch operations where possible
- Minimize API calls to Google Sheets
- Use efficient data structures for large datasets
- Consider implementing caching for frequently accessed data

## Configuration

### Time Zone Settings

The script is configured for Asia/Hong_Kong timezone. Update the timezone in `appsscript.json` if needed for your location:

```json
{
  "timeZone": "Asia/Hong_Kong"
}
```

### Manager Configuration

Update the manager names in `Counts.js` to match your organization:

```javascript
let vacantCount = [
  {
    name: "MANAGER_NAME_1", // Replace with actual manager name
    count: 0,
  },
  // ... add more managers as needed
];
```
