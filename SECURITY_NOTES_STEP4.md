# Security Hardening – Step 4

## 1. Full-device encryption (Windows – BitLocker)

- Open an elevated PowerShell (Run as Administrator) and run:

  manage-bde -status

- If your OS drive is not encrypted, you can enable BitLocker (ONLY if you understand the impact):

  manage-bde -on C: -RecoveryPassword

- Store the recovery key OFF the machine (USB, printed, password manager).

## 2. Project-level protection

- Ensure .env and secrets are NOT committed to Git:
  - Check .gitignore includes: .env, .env.local, .env.*.local

- Use a password manager for:
  - Database passwords
  - SMTP credentials
  - Any API keys

## 3. Database encryption (PostgreSQL)

- Prefer:
  - Full-disk encryption on the drive where PostgreSQL data directory lives.
  - Or use a managed Postgres with encryption-at-rest enabled.

- For local dev:
  - Keep Postgres data on an encrypted volume (BitLocker or VeraCrypt).

## 4. Network & browser

- Always access the dashboard via:
  - http://localhost:PORT (not exposed to the internet)
- Do NOT port-forward or expose this to public networks.

## 5. Auth & sessions

- Replace the placeholder 'session' cookie check in middleware.ts
  with a real auth/session mechanism when ready.

