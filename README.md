# Travel Agency Dashboard

A Next.js application displaying a dashboard for a travel agency with key metrics.

## Deployment to Vercel

### Prerequisites

1. A [GitHub](https://github.com) account
2. A [Vercel](https://vercel.com) account (you can sign up using your GitHub account)

### Step 1: Prepare Your Project

1. Initialize a Git repository and commit your code:

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub and push your code:

```bash
git remote add origin https://github.com/yourusername/travel-agency-dashboard.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure the project:

   - Framework Preset: Next.js
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. Environment Variables:

   - Add `AUTH_SECRET` with a secure random string (you can generate one with `openssl rand -base64 32`)
   - If using Vercel Postgres, connect your database in the Vercel dashboard and the environment variables will be set automatically

6. Click "Deploy"

### Step 3: Seed the Database (if needed)

After deployment, you may need to seed your database if your application requires initial data:

1. Go to the Vercel Dashboard
2. Select your project
3. Navigate to "Settings" > "Deployments"
4. Run the database seed command from your terminal:

```bash
vercel env pull
npm run seed
```

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).
