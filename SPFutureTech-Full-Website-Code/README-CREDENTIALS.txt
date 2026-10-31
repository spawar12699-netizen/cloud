
# SPFutureTech - Mala Dairy Website - Full Code Guide

## 1. ADMIN LOGIN KUTH AHE? - Credentials

File: index.html -> Search kara "ADMIN_CREDENTIALS"

Admin Login:
  Email: super@spfuturetech.com
  Password: admin123
  Role: SUPER_ADMIN - Sagla data disel, API Keys fakt hyalach distil

Dairy Demo Logins (Tumhi Admin Panel madhun banavta):
  Email: amul@spfuturetech.com
  Password: amul123
  Dairy ID: AMUL
  Branch: Pune, Anand

  Email: warana@spfuturetech.com
  Password: warana123
  Dairy ID: WARANA

Tumhi he password index.html madhe 420 number line javal badalu shakta.

## 2. DELETE PROCESS - Lagech Delete Honar Nahi

Aata me 3-step secure delete process takla ahe:

Step 1: Delete button dabla ki popup yeil:
  "Tumhala AMUL Dairy delete karaycha ahe ka? Ha data sagla jail!"

Step 2: [Cancel] [Yes, Move to Trash] -> Dabalyavar dairy Trash madhe jail, table madhun gayab hoil pan database madhun nahi. 30 divas parat restore karu shakta.

Step 3: Trash madhe gelyavar parat ekda "Permanent Delete" button dabava lagel + Type kara "DELETE" mhanun confirm kara. Tevha kayamcha delete hoil.

Ha process index.html madhe deleteDairy() function madhe ahe.

## 3. API KEY KUTH GENERATE HOTE?

File: index.html -> function generateKey()
  Format: mala_write_{dairyId}_{8 random}  -> IoT device sathi
          mala_read_{dairyId}_{8 random}   -> Website sathi

Keys localStorage madhe save hotat: sp_dairies

## 4. Cloudflare Var Kasa Takaycha?

1. dash.cloudflare.com > Pages > Create Project > Upload index.html
2. 2 min madhe live hoil: spfuturetech.pages.dev

## 5. Code Kasa Edit Karaycha?

index.html ekach file ahe - Notepad madhe open kara, logo, color, product badalu shakta.

SPFutureTech Logo: Line 350 javal SVG ahe.

