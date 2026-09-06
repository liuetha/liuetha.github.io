import topTracks from "@/public/data/top-tracks.json";

type TopTrack = {
  id: string;
  rank: number;
  title: string;
  artist: string;
  album: string;
  image: string | null;
  url: string;
};

type LearningPiece = {
  title: string;
  artist: string;
  learned?: boolean;
};

const tracks = (topTracks.tracks ?? []) as TopTrack[];

const learningList: LearningPiece[] = [
  { title: "From The Start", artist: "Laufey", learned: true },
  { title: "Falling Behind", artist: "Laufey" },
  { title: "Valentine", artist: "Laufey" },
  { title: "Blackbird", artist: "The Beatles" },
  { title: "Happiness", artist: "Rex Orange County" },
  { title: "So Far So Good", artist: "Rex Orange County" },
  { title: "Nothing", artist: "Bruno Major" },
  { title: "Regent’s Park", artist: "Bruno Major" },
  { title: "Cherry Wine", artist: "grentperez" },
  { title: "Risk It All", artist: "Bruno Mars" },
  { title: "Billionaire", artist: "Travie McCoy ft. Bruno Mars" },
  { title: "Just the Two of Us", artist: "Grover Washington Jr. ft. Bill Withers" },
  { title: "Until I Found You", artist: "Stephen Sanchez" },
];

export default function Music() {
  return (
    <section className="music" id="music" aria-labelledby="music-heading">
      <div className="music-intro-block">
        <h2 className="section-heading" id="music-heading">Music</h2>
        <div className="music-story">
          <p>
            I’ve played piano since I was four, and music has been a constant
            part of my life for as long as I can remember. Playing is one of
            the ways I step away from school and engineering for a bit.
          </p>
          <p>
            I’m learning guitar now too, mostly by working through songs I like
            and keeping a running list of pieces I want to learn.
          </p>
        </div>
      </div>

      <div className="music-subsection" aria-labelledby="listening-heading">
        <div className="music-subheading-row">
          <h3 id="listening-heading">Listening lately</h3>
          {tracks.length > 0 ? (
            <span className="music-source">Top tracks · past 4 weeks</span>
          ) : null}
        </div>

        {tracks.length > 0 ? (
          <ul className="music-grid">
            {tracks.map((track) => (
              <li key={track.id}>
                <a
                  className="music-card"
                  href={track.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${track.title} by ${track.artist} on Spotify`}
                >
                  <div className="music-artwork" aria-hidden="true">
                    {track.image ? (
                      <img src={track.image} alt="" loading="lazy" />
                    ) : (
                      <span>No artwork</span>
                    )}
                  </div>
                  <div className="music-copy">
                    <h4>{track.title}</h4>
                    <p>{track.artist}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="music-empty">
            My top Spotify tracks will appear here once the private sync is connected.
          </p>
        )}
      </div>

      <div className="music-learning" aria-labelledby="learning-heading">
        <h3 id="learning-heading">Guitar Songs To-do</h3>
        <ul className="learning-list">
          {learningList.map((piece) => (
            <li className={piece.learned ? "is-learned" : undefined} key={`${piece.title}-${piece.artist}`}>
              <span
                className="learning-status"
                aria-label={piece.learned ? "Learned" : "Not learned yet"}
              >
                {piece.learned ? "✓" : ""}
              </span>
              <span className="learning-title">{piece.title}</span>
              <span className="learning-artist">{piece.artist}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
