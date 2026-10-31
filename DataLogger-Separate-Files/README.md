
# SP FutureTech Pollution Data Logger - Separate Files

## File Structure:
- index.html - Main login page
- css/style.css - Style
- js/app.js - Full app logic (Admin, Client, Data, CSV/PDF)
- functions/api/data.js - Backend API for D1 (Read/Write keys)
- functions/api/inquiry.js - Inquiry form backend
- wrangler.toml - Cloudflare config

## Cloudflare la Kasa Upload Karaycha?

### Option 1: GitHub varun (Best):
1. DataLogger repo madhe he sagle file/folder upload kar
   - index.html
   - css/ folder
   - js/ folder
   - functions/ folder
   - wrangler.toml
2. Cloudflare Dashboard > Workers & Pages > Create Application > Connect to Git > DataLogger
3. Production branch: main
4. Framework: None, Build command: (empty), Output: /
5. Deploy

### Option 2: Direct Upload (GitHub nako):
1. dash.cloudflare.com > Workers & Pages > Create Application > Upload your static files
2. He sagle file zip karun upload kar

### D1 Database Setup:
1. D1 > Create Database > spfuturetech
2. Console madhe SQL:
```
CREATE TABLE clients (id TEXT PRIMARY KEY, companyName TEXT, email TEXT, password TEXT, apiReadKey TEXT, apiWriteKey TEXT, columns TEXT, createdAt TEXT, status TEXT);
CREATE TABLE data_entries (id TEXT PRIMARY KEY, clientId TEXT, timestamp TEXT, valuesJson TEXT);
CREATE TABLE inquiries (id TEXT PRIMARY KEY, name TEXT, phone TEXT, message TEXT, created_at TEXT);
```
3. Pages > DataLogger > Settings > Functions > D1 Binding > Add binding: Variable name = DB, Database = spfuturetech

### CSV madhe Temp, CO2 nav kas yenar?
Admin > Add Client > Columns madhe:
Col1 = Temp
Col2 = CO2
Col3 = PM2.5
... etc
Mag CSV download kelyavar header madhe hech nav yetil.

Admin Login: super@spfuturetech.com / admin123
