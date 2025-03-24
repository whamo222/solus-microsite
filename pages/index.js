// Simplified version of the SOLUS microsite
export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>SOLUS: A New Kind of Companion</h1>
      <p>A voice-driven sci-fi companion game where your words shape the soul of an AI.</p>
      <h2>Download the Partner Pitch</h2>
      <a href="/SOLUS_Partner_Pitch.pdf" download>Download PDF</a>
      <h2>Visuals</h2>
      <img src="/SOLUS_HUD_Example.png" alt="SOLUS HUD" width="300" />
      <img src="/SOLUS_Emotional_Progression.png" alt="Emotion Progression" width="300" />
      <img src="/SOLUS_Memory_Map.png" alt="Memory Map" width="300" />
    </div>
  );
}
