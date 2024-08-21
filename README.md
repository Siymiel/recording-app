# Recording App

A React application that simulates a media recording and review process, complete with progress visualization and user interactions. This app is built using TypeScript and provides functionality for recording, reviewing, and submitting responses.

## Features

- **Three Buttons**: 
  - **Stop**: Resets the state of the other buttons and stops the current recording or review process.
  - **Record**: Starts a simulated recording process with visual feedback.
  - **Review**: Starts a simulated review process with visual feedback.
  
- **Progress Bar**: Displays the progress of the media recording or review with a time countdown.

- **Text Area**: Allows users to input their answers.

- **Radio Buttons**: Users indicate if their answer is final.

- **Submit Button**: Submits the user's answer and shows a toast notification on submission.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/recording-app.git
   cd recording-app
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   ```bash
   yarn dev
   ```

   Navigate to `http://localhost:3000` in your browser to view the app.

### Project Structure

- `src/`
  - `components/`
    - `Button.tsx`: Button component.
    - `TextArea.tsx`: Text area component for user input.
    - `RadioGroup.tsx`: Radio buttons for final answer selection.
    - `SubmitButton.tsx`: Submit button component.
    - `ProgressBar.tsx`: Progress bar component.
  - `App.tsx`: Main application component.
  - `index.tsx`: Application entry point.
- `public/`: Static assets.
- `vite.config.ts`: Vite configuration file.

### Usage

- **Buttons**:
  - **Stop**: Resets the state of the recording or review and stops any ongoing process.
  - **Record**: Starts recording with visual feedback in the progress bar.
  - **Review**: Starts review with visual feedback in the progress bar.

- **Text Area**: Enter your freeform answer here.

- **Radio Buttons**: Select "true" if the answer is final.

- **Submit Button**: Submits the answer and shows a toast notification.

### Handling State

- **`isPlaying`**: Manages whether the media is currently being played or reviewed.
- **`progress`**: Tracks the progress of the recording or review.
- **`timeRemaining`**: Shows the remaining time for the recording or review.
- **`textAreaValue`**: Stores the value of the text area.
- **`finalAnswer`**: Tracks whether the final answer has been selected.

### TypeScript Usage

The application is built using TypeScript to ensure type safety and enhance development experience. Type definitions are used for component props and state management.

### Troubleshooting

If you encounter issues with the TypeScript setup or application behavior:

1. Ensure that you have the correct versions of dependencies installed.
2. Check the TypeScript configuration in `tsconfig.json`.
3. Verify that all components are correctly typed and imported.