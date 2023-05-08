export default function PPVAlert() {
  return (
    <div
      id="ppv-alert"
      className="d-none fixed-bottom alert alert-secondary alert-dismissible fade show"
      role="alert"
    >
      Para se inscrever no curso <strong>Pilotando Para Vida</strong>
      <a
        href="https://forms.gle/aXDmkphS8SSRMoXPA"
        target="_blank"
        className="alert-link text-primary"
        rel="noreferrer"
      >
        clique aqui!
      </a>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
