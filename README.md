# STEMbotix DocGen

> Professional Document Automation System for STEM Lab Project Management

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple?logo=vite)
![Capacitor](https://img.shields.io/badge/Capacitor-8.1.0-5a67d8?logo=capacitor)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Mobile Deployment](#mobile-deployment)
- [Contributing](#contributing)
- [Support](#support)

## 🎯 About

STEMbotix DocGen is a comprehensive React-based web and mobile application designed to automate the creation of professional documentation for STEM Lab projects. The system provides guided workflow wizards for generating **Project Proposals** and **Impact Reports** with PDF export capabilities.

### What This Project Does

This application streamlines documentation processes by:

- **Project Proposal Module**: Create multi-section proposals with cover letters, technical details, and financial estimates
- **Impact Report Module**: Generate comprehensive post-implementation reports with impact analysis, baseline/endline assessments, and sustainability evaluations
- **PDF Generation**: Automatically export completed documents in professional PDF format
- **Cross-Platform**: Run on web browsers, iOS, and Android devices

Perfect for organizations managing STEM education initiatives, lab implementations, and project documentation workflows.

## ✨ Features

### Project Proposal Module

- 3-step guided workflow for proposal creation
- Sections include:
  - General proposal information
  - Project details and objectives
  - Financial planning and budgeting
- Real-time form validation
- PDF export with professional formatting

### Impact Report Module

- 17-step comprehensive form wizard
- Covers multiple impact dimensions:
  - Project baselines and endline assessments
  - Quantitative and qualitative impact measurements
  - Learning outcomes tracking
  - Institutional, social, and economic impact analysis
  - Innovation and sustainability assessments
  - Challenges and lessons learned
  - Monitoring and evaluation data
  - Beneficiary profiles and case studies
  - Photography documentation
- Persistent data management with Zustand
- PDF generation with detailed report compilation

### Technical Features

- **Responsive Design**: Mobile-first UI with Tailwind CSS
- **State Management**: Zustand for efficient local state handling
- **PDF Rendering**: @react-pdf/renderer for document generation
- **Code Quality**: ESLint configuration for code consistency
- **Hot Module Reload**: Fast development with Vite HMR
- **Cross-Platform**: Capacitor integration for iOS/Android deployment

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher (or yarn/pnpm)
- **Git**: For version control

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd DailyReport
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Quick Start - Creating Your First Document

#### Generating a Project Proposal

1. Open the application in your browser
2. Click on **"Project Proposal"** from the main menu
3. Fill out the multi-step form:
   - **Step 1**: General proposal information
   - **Step 2**: Project details and objectives
   - **Step 3**: Financial information
4. Click **"Generate PDF"** to export your proposal
5. Use **"← Switch Document Type"** button to return to the main menu

#### Generating an Impact Report

1. From the main menu, select **"Impact Report"**
2. Progress through the 17-step wizard:
   - Start with project identification
   - Document baseline and endline data
   - Record impact measurements across multiple dimensions
   - Add beneficiary and case study information
   - Include project photographs
3. Review your entries as you progress
4. Generate the final PDF report when complete

### Development Server Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm preview

# Run ESLint checks
npm run lint
```

## 📁 Project Structure

```
DailyReport/
├── public/                      # Static assets
│   └── favicon/                # Favicon files
├── src/
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   ├── assets/                 # Image and media assets
│   │   └── images/
│   ├── proposal/               # Project Proposal module
│   │   ├── forms/              # Proposal form components
│   │   │   ├── ProposalForm.jsx
│   │   │   ├── ProjectProposalForm.jsx
│   │   │   └── FinancialForm.jsx
│   │   ├── navigation/         # Form navigation & stepper
│   │   │   ├── Stepper.jsx
│   │   │   └── FormNavigation.jsx
│   │   └── pdf/                # PDF document generation
│   │       └── ProposalDocumentPDF.jsx
│   ├── report/                 # Impact Report module
│   │   ├── forms/              # Report form components (17 forms)
│   │   │   ├── ProjectForm.jsx
│   │   │   ├── BaselineEndlineForm.jsx
│   │   │   ├── QuantitativeImpactForm.jsx
│   │   │   ├── QualitativeImpactForm.jsx
│   │   │   └── ... (11 more forms)
│   │   ├── navigation/         # Report navigation & stepper
│   │   └── pdf/                # PDF document generation
│   │       └── ReportDocumentPDF.jsx
│   └── store/                  # Zustand state stores
│       ├── proposalStore.js    # Proposal state management
│       └── reportStore.js      # Report state management
├── android/                     # Android native app
├── ios/                         # iOS native app
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── capacitor.config.json       # Capacitor configuration
├── eslint.config.js            # ESLint configuration
└── package.json                # Project dependencies
```

## 💻 Development

### Code Style & Quality

This project uses **ESLint** for code quality. Run linting checks before committing:

```bash
npm run lint
```

### Adding New Form Fields

To add fields to an existing form:

1. Edit the corresponding form component in `src/proposal/forms/` or `src/report/forms/`
2. Update the Zustand store in `src/store/proposalStore.js` or `src/store/reportStore.js`
3. Update the PDF template in the corresponding PDF component
4. Test with `npm run dev`

### State Management with Zustand

The application uses Zustand for state management. Access proposal data:

```javascript
import { useProposalStore } from "@/store/proposalStore";

function MyComponent() {
  const proposalData = useProposalStore();
  // Use proposalData to read/write to the store
}
```

### Styling with Tailwind CSS

The project uses **Tailwind CSS** for styling with the Vite plugin integration. Customize in `tailwind.config.js`.

## 🔨 Building for Production

Build the project for optimized production deployment:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory with:

- Minified JavaScript and CSS
- Tree-shaken dependencies
- Optimized asset loading

Preview the production build locally:

```bash
npm run preview
```

## 📱 Mobile Deployment

STEMbotix DocGen supports iOS and Android through **Capacitor**.

### Android Build

```bash
# Install Android dependencies
npm install

# Prepare assets for Android
npx cap sync

# Open Android Studio for building
npx cap open android
```

### iOS Build

```bash
# Install iOS dependencies
npm install

# Prepare assets for iOS
npx cap sync

# Open Xcode for building
npx cap open ios
```

For detailed Capacitor documentation, see [Capacitor Official Guide](https://capacitorjs.com/docs).

## 🤝 Contributing

Contributions are welcome! To contribute to STEMbotix DocGen:

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Workflow

- Keep commits atomic and well-documented
- Follow the existing code style (enforce with `npm run lint`)
- Test your changes with `npm run dev` before submitting
- Update this README if adding significant features

## 📞 Support

### Getting Help

- **Documentation**: Review inline code comments and component documentation
- **Issues**: Check [GitHub Issues](https://github.com/your-org/DailyReport/issues) for known problems and solutions
- **Discussions**: Engage with the community on project discussions

### Common Issues

**Issue**: Port 5173 already in use

```bash
# Use a different port
npm run dev -- --port 3000
```

**Issue**: Module not found errors

```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

**Issue**: PDF generation not working

- Ensure all form required fields are completed
- Check browser console for detailed error messages
- Verify PDF dependencies are properly installed

### Reporting Bugs

When reporting bugs, please include:

- Steps to reproduce
- Expected vs. actual behavior
- Browser/device information
- Relevant error messages or console logs

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👥 Maintainers

This project is maintained by the STEMbotix development team. For questions or collaboration inquiries, please open an issue on [GitHub](https://github.com/your-org/DailyReport).

---

**Made with ❤️ for STEM Education** | Version 0.0.0
