export default function Banner() {
  return (
    <section id="banner">
      <video id="videobcg" preload="auto" autoPlay loop muted playsInline>
        {/**
         * legacy script will add the source (see public/js/main.js) -->
         */}
      </video>
      <div className="box"></div>
      <div className="text-center">
        <hr className="divider" />
        <h1 className="h1">Uma missão muitas vidas</h1>
        <hr className="divider" />
      </div>
      <div>
        <span className="arrow pulse"></span>
        <span className="arrow pulse"></span>
      </div>
    </section>
  );
}
