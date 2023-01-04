import logo from "./logo.svg";
import "./App.css";
import { JitsiMeeting } from "@jitsi/react-sdk";

function App() {
  return (
    <div className="App">
      <JitsiMeeting
        configOverwrite={{
          startWithAudioMuted: true,
          hiddenPremeetingButtons: ["microphone"],
        }}
        roomName={"YOUR_CUSTOM_ROOM_NAME"}
        getIFrameRef={(node) => (node.style.height = "800px")}
      />
    </div>
  );
}

export default App;
