import sampleProject from '../assets/images/sample-project.png';
import LuxusBrauchtLasttiere from '../assets/images/Luxus-braucht-Lasttiere.png';

export const apps = [
    { id: 'finder', name: 'Finder', icon: 'finder' },
    { id: 'photoshop', name: 'Photoshop', icon: 'photoshop' },
    { id: 'mail', name: 'Mail', icon: 'mail' },
    { id: 'photos', name: 'Photos', icon: 'photos' },
    { id: 'trash', name: 'Trash', icon: 'trash' },
];

export const files = [
    {
        id: 'about-me',
        name: 'About Me.txt',
        type: 'text',
        content: 'Hello! I am Lorenzo, a passionate developer...',
        position: { x: 20, y: 20 }
    },
    {
        id: 'my-projects',
        name: 'My Projects',
        type: 'folder',
        previewImage: sampleProject,
        content: (
            <div style={{ padding: '10px' }}>
                <h2 style={{ marginTop: 0, color: '#333' }}>My Projects</h2>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#555' }}>Project 1</h3>
                    <img
                        src={sampleProject}
                        alt="Sample Project"
                        style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
                    />
                    <p style={{ color: '#666' }}>
                        This is an example of how you can display images in your portfolio files.
                        Replace this image with your own project screenshots!
                    </p>
                </div>
            </div>
        ),
        position: { x: 20, y: 140 }
    },
    {
        id: 'BG-Project',
        name: 'Luxus braucht Lasttiere.png',
        type: "folder",
        previewImage: LuxusBrauchtLasttiere,
        content: (
            <div style={{ padding: "10px" }}>
                <h2 style={{ marginTop: 0, color: "#333" }}>Luxus braucht Lasttiere</h2>
                <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ color: "#555" }}>Project 2</h3>
                    <img src={LuxusBrauchtLasttiere} alt="Luxus braucht Lasttiere" style={{ width: "70%", borderRadius: "8px", marginBottom: "10px" }}
                    />
                    <p style={{ color: "#666" }}>
                        This is the first Artwork of a series of artworkes realated to the theme of "Poorness".
                    </p>
                </div>
            </div>
        ),
        position: {
            x: 300, y: 400

        }
    },
    {
        id: 'contact',
        name: 'Contact.txt',
        type: 'text',
        content: 'Email: your.email@example.com\nGitHub: github.com/yourusername\nLinkedIn: linkedin.com/in/yourusername',
        position: { x: 20, y: 260 }
    }
];
