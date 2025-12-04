import { useState } from 'react';
import Desktop from './components/Desktop/Desktop';
import Dock from './components/Dock/Dock';
import FileIcon from './components/FileIcon/FileIcon';
import Window from './components/Window/Window';
import { files } from './config/fileSystem.jsx';

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const openFile = (file) => {
    if (openWindows.find((w) => w.id === file.id)) {
      focusWindow(file.id);
      return;
    }

    const newWindow = {
      id: file.id,
      title: file.name,
      content: file.content,
      zIndex: highestZIndex + 1,
    };

    setOpenWindows([...openWindows, newWindow]);
    setActiveWindowId(file.id);
    setHighestZIndex(highestZIndex + 1);
  };

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter((w) => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const focusWindow = (id) => {
    if (activeWindowId === id) return;

    const newZIndex = highestZIndex + 1;
    setOpenWindows(
      openWindows.map((w) =>
        w.id === id ? { ...w, zIndex: newZIndex } : w
      )
    );
    setActiveWindowId(id);
    setHighestZIndex(newZIndex);
  };

  return (
    <div className="App">
      <Desktop>
        {files.map((file) => (
          <FileIcon
            key={file.id}
            name={file.name}
            type={file.type}
            position={file.position}
            previewImage={file.previewImage}
            onClick={() => openFile(file)}
          />
        ))}

        {openWindows.map((window) => (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            isOpen={true}
            onClose={closeWindow}
            zIndex={window.zIndex}
            isActive={activeWindowId === window.id}
            onFocus={() => focusWindow(window.id)}
            initialPosition={{ x: 100 + openWindows.indexOf(window) * 20, y: 100 + openWindows.indexOf(window) * 20 }}
          >
            <div>{window.content}</div>
          </Window>
        ))}

        <Dock />
      </Desktop>
    </div>
  );
}

export default App;
