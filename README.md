# Vocabulary Recording App

A React application that simulates a media recording and review process, complete with progress visualization and user interactions. This app is built using TypeScript and Material-UI, and provides functionality for recording, reviewing, and submitting responses with a focus on accessibility.

## Features

- **Three Buttons**:
  - **Stop**: Stops the current recording or review process, resets the state of other buttons, and resets the timer.
  - **Record**: Starts a simulated recording process with visual feedback, including a countdown timer.
  - **Review**: Initiates a simulated review process with visual feedback, including a countdown timer.

- **Progress Bar**: Displays the progress of the recording or review session along with a countdown timer.

- **Text Area**: Allows users to input their responses.

- **Radio Buttons**: Enables users to indicate if their answer is final.

- **Submit Button**: Submits the user's answer and displays a toast notification upon successful submission.

- **Accessibility**: The app is designed with accessibility in mind, including ARIA roles, keyboard navigation, and screen reader support.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Yarn
- TypeScript (5.5.4)

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

   Navigate to `http://localhost:5173` in your browser to view the app.

### Project Structure

- `src/`
  - `assets/`: Contains static assets like images.
  - `components/`:
    - `Button.tsx`: Custom button component with different states for Stop, Record, and Review actions.
    - `TextArea.tsx`: Text area component for user input.
    - `RadioGroupComponent.tsx`: Radio buttons for final answer selection.
    - `SubmitButton.tsx`: Submit button component that triggers the submission process.
    - `ProgressBar.tsx`: Progress bar component that visually represents the recording/review progress and countdown.
  - `App.tsx`: Main application component that integrates all features and manages the app's state.
  - `index.tsx`: Application entry point.
  - `App.css`: Custom styles for the app.
- `public/`: Static assets accessible to the app.
- `vite.config.ts`: Vite configuration file for project setup.

### Usage

- **Buttons**:
  - **Stop**: Stops any ongoing process (recording or review) and resets the timer to the initial state.
  - **Record**: Begins recording, displays progress in the progress bar, and starts a 20-second countdown.
  - **Review**: Initiates the review process, displays progress in the progress bar, and starts a 20-second countdown.

- **Text Area**: Input your answer or notes related to the recording.

- **Radio Buttons**: Select "true" if you are confident your answer is final.

- **Submit Button**: Submits the answer and triggers a toast notification confirming the submission.

### State Management

- **`activeButton`**: Tracks which button (Record, Review, or Stop) is currently active.
- **`isPlaying`**: Boolean state indicating if the recording or review process is active.
- **`progress`**: Numeric state representing the progress of the recording or review process.
- **`timeRemaining`**: Tracks the remaining time for the recording or review, resetting when Stop is clicked.
- **`textAreaValue`**: Stores the text input by the user in the text area.
- **`finalAnswer`**: Boolean state indicating whether the user has selected their answer as final.


### Accessibility Considerations

- **ARIA Roles**: Implemented ARIA roles and properties for buttons, progress bars, and the timer to ensure compatibility with screen readers.
- **Keyboard Navigation**: Fully accessible via keyboard navigation, with focus management and proper keyboard interactions for all buttons.
- **Screen Reader Support**: Live region updates for progress bar and timer, ensuring screen readers can announce changes as they occur.
- **Responsive Design**: Adjusted layout and image sizes for different screen sizes, ensuring usability across devices, including narrow screens (350px and below).
