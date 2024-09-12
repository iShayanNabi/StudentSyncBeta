
# StudentSync

StudentSync is a collaborative student scheduling app designed to help students manage their academic tasks, track habits, and integrate class schedules with real-time navigation and notifications. Students can also follow each other to see shared classes, making it easier to collaborate and communicate.

## Features

1. **User Authentication**: Sign up and log in using Firebase Authentication.
2. **Schedule Management**: Add classes, homework, tests, quizzes, and other academic events.
3. **Habit Tracking**: Track daily habits, such as library visits, and automatically add them to your schedule.
4. **Navigation**: Use Google Maps/Apple Maps integration to navigate to classes in real-time, with traffic data.
5. **Collaborative Features**: Follow other students, view shared classes, and collaborate more easily.
6. **Push Notifications**: Get reminders for upcoming events, habits, and when to leave for class.

## How to Install

### Frontend (React Native):

#### Prerequisites:
- Node.js installed
- React Native CLI installed
- Android Studio or Xcode setup for emulation

#### Steps:
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/StudentSync.git
   cd StudentSync
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the app:
   ```
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

4. **Setting up Firebase**:
   - Go to [Firebase Console](https://firebase.google.com/), create a project, and enable **Authentication** and **Firestore Database**.
   - Add the Firebase configuration to your `App.js` file under the `firebaseConfig` section.

### Backend (Python Flask API):

#### Prerequisites:
- Python 3 installed
- Flask installed

#### Steps:
1. Navigate to the backend folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the Flask server:
   ```
   python app.py
   ```

   The backend server will start at `http://localhost:5000`. Make sure to run the backend while using the frontend for the habit-tracking features.

## Running and Testing the App:

1. **User Authentication**:
   - Users can sign up and log in using Firebase email and password authentication.
   - Once logged in, users can view their profile, add classes, and view their schedule.

2. **Adding Classes and Tasks**:
   - After logging in, go to the "Schedule" screen and add classes or tasks such as homework, tests, and quizzes.

3. **Habit Tracking**:
   - The app will automatically track habits such as library visits based on user inputs.
   - You can test the habit-tracking feature by running the Flask backend and posting sample times via the app to get predictions.

4. **Follow Students and Shared Classes**:
   - Search for students, follow them, and view shared classes.
   - Test this by creating multiple accounts and adding classes to each account, then following other users to see shared class data.

5. **Real-Time Navigation**:
   - Use the "Map" screen to view class locations and navigate using Google Maps/Apple Maps with real-time traffic information.

6. **Push Notifications**:
   - Notifications will remind users about upcoming events or when it's time to leave for class based on their schedule and real-time traffic data.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Any feedback is appreciated for improving the app!

## License

MIT License

